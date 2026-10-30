"use client";
import { updateUser, uploadUserAvatar } from "@/auth/actions";
import { addConversation, addMessage, getMessages, removeConversation } from "@/database/actions";
import useLoadingToast from "@/hooks/useLoadingToast";
import { Conversation, Message, Subscription } from "@/types/database";
import { Action, State } from "@/types/reducer";
import { UserInfo } from "@/types/user";
import { redirectAction } from "@/utils/redirect";
import { useCompletion } from "@ai-sdk/react";
import { usePathname } from "next/navigation";
import {
	createContext,
	Dispatch,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useRef,
	useState
} from "react";
import { toast } from "react-toastify";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

interface Context {
	state: State;
	dispatch: Dispatch<Action>;
	isPending: boolean;
	setPendingMessage: Dispatch<string>;
	completion: string;
	updateUserAvatarAction: (file: File) => void;
	addMessageAction: (
		conversation_id: Message["conversation_id"],
		role: Message["role"],
		content: Message["content"]
	) => Promise<{ completed: boolean }>;
	updateMessagesAction: (conversation_id: Conversation["id"]) => Promise<{ completed: boolean }>;
	addConversationAction: (personality_id: string, title?: string) => Promise<{ data: Conversation | null }>;
	removeConversationAction: (id: Conversation["id"]) => void;
	updateUserPlanAction: (id: Subscription["id"]) => void;
	updateUserInfoAction: (userInfo: UserInfo) => void;
	updateUserNotificationAction: (notification: boolean) => void;
	sendUserPromptAction: (prompt: string) => void;
	sendPromptProcess: (prompt?: string) => Promise<void>;
	stopPromptProcess: () => void;
	updateUserAPIkeyAction: (apiKey: string) => void;
}

const DashboardContext = createContext<Context | null>(null);

export const DashboardContextProvider = ({
	children,
	initialState: initialStateProp
}: {
	children: ReactNode;
	initialState?: Partial<State>;
}) => {
	const [{ state: isPending, content: pendingMessage }, setPendingData] = useState({ state: false, content: "" });
	const setPendingMessage = useCallback((content: string) => setPendingData((prev) => ({ ...prev, content })), []);
	const setIsPending = useCallback((state: boolean) => setPendingData((prev) => ({ ...prev, state })), []);
	useLoadingToast(pendingMessage, isPending);
	const pathname = usePathname();
	const [state, dispatch] = useReducer<State, [action: Action]>(reducer, { ...initialState, ...initialStateProp });
	const inFlightRef = useRef(false);
	const stopRequestedRef = useRef(false);
	const completingTargetRef = useRef<string | null>(null);
	const { complete, completion, stop } = useCompletion({
		api: "/api/chat",
		onFinish,
		onError
	});

	const addMessageAction = useCallback(
		async (conversation_id: Message["conversation_id"], role: Message["role"], content: Message["content"]) => {
			setIsPending(true);
			const { error } = await addMessage(conversation_id, role, content);
			setIsPending(false);
			if (error) {
				const prevMessages = state.messages.slice(0, state.messages.length - 1);
				dispatch({ type: "UPDATE_MESSAGES", payload: prevMessages });
				toast.error(error.message);
				return { completed: false };
			}
			return { completed: true };
		},
		[setIsPending, state.messages]
	);

	const updateMessagesAction = useCallback(
		async (conversation_id: Conversation["id"]) => {
			setIsPending(true);
			const { data, error } = await getMessages(conversation_id);
			setIsPending(false);
			if (!error && data) {
				const conversation = state.conversations.find((p) => p.id === conversation_id);
				if (conversation) {
					dispatch({
						type: "SET_USER_PERSONALITY_ID",
						payload: conversation.personality_id
					});
				}
				dispatch({ type: "UPDATE_MESSAGES", payload: data });
				return { completed: true };
			}
			if (error) {
				toast.error(error.message);
			}
			return { completed: false };
		},
		[dispatch, setIsPending, state.conversations]
	);

	const updateUserPlanAction = useCallback(
		(id: Subscription["id"]) => {
			setIsPending(true);
			updateUser({ subscriptionID: id }).then(({ error }) => {
				setIsPending(false);
				if (error) {
					toast.error(error);
				} else {
					const subscription = state.subscriptions.find((s) => s.id === id);
					dispatch({ type: "UPDATE_USER_PLAN", payload: subscription! });
				}
			});
		},
		[dispatch, setIsPending, state.subscriptions]
	);

	const addConversationAction = useCallback(
		async (personality_id: string, title?: string) => {
			setIsPending(true);
			const { data, error } = await addConversation(personality_id, title);
			setIsPending(false);
			if (error) {
				toast.error(error.message);
			}
			if (!error && data) {
				dispatch({ type: "ADD_CONVERSATION", payload: data });
				return { data };
			}
			return { data: null };
		},
		[dispatch, setIsPending]
	);

	const removeConversationAction = useCallback(
		(id: Conversation["id"]) => {
			const prevConversation = state.conversations.find((c) => c.id === id);
			dispatch({ type: "REMOVE_CONVERSATION", payload: id });
			setIsPending(true);
			removeConversation(id).then(({ error }) => {
				setIsPending(false);
				if (error) {
					toast.error(error.message);
					if (prevConversation) {
						dispatch({ type: "ADD_CONVERSATION", payload: prevConversation });
					}
				}
			});
		},
		[setIsPending, state.conversations]
	);

	const updateUserAvatarAction = useCallback(
		(file: File) => {
			setIsPending(true);
			uploadUserAvatar(file).then(({ error, data }) => {
				setIsPending(false);
				if (error) {
					toast.error(error);
				}
				if (!error && data) {
					toast.success("User avatar updated successfully");
					dispatch({ type: "UPDATE_USER_AVATAR", payload: data });
				}
			});
		},
		[dispatch, setIsPending]
	);

	const updateUserInfoAction = useCallback(
		(userInfo: UserInfo) => {
			setIsPending(true);
			updateUser(userInfo).then(({ error }) => {
				setIsPending(false);
				if (error) {
					toast.error(error);
				} else {
					toast.success("User information updated successfully");
					dispatch({ type: "SET_USER_INFO", payload: { confirm: "", email: "", name: "", password: "" } });
				}
			});
		},
		[dispatch, setIsPending]
	);

	const updateUserNotificationAction = useCallback(
		(notification: boolean) => {
			switch (Notification.permission) {
				case "denied": {
					toast.error("Notification permission denied");
					if (state.notification) {
						dispatch({ type: "SET_NOTIFICATION_STATUS", payload: false });
						updateUser({ notification: false });
					}
					break;
				}

				case "granted": {
					dispatch({ type: "SET_NOTIFICATION_STATUS", payload: notification });
					setIsPending(true);
					updateUser({ notification }).then(({ error }) => {
						setIsPending(false);
						if (error) {
							toast.error(error);
							dispatch({ type: "SET_NOTIFICATION_STATUS", payload: !notification });
						}
					});
					break;
				}

				case "default": {
					Notification.requestPermission().then((permission) => {
						dispatch({ type: "SET_NOTIFICATION_STATUS", payload: permission === "granted" });
						setIsPending(true);
						updateUser({ notification: permission === "granted" }).then(({ error }) => {
							setIsPending(false);
							if (error) {
								toast.error(error);
								dispatch({ type: "SET_NOTIFICATION_STATUS", payload: permission !== "granted" });
							}
						});
					});
					break;
				}

				default:
					break;
			}
		},
		[dispatch, state.notification, setIsPending]
	);

	const sendUserPromptAction = useCallback(
		(prompt: string) => {
			complete(prompt, { body: { personality_id: state.userPersonalityID, api_key: state.userAPIKey } });
		},
		[complete, state.userPersonalityID, state.userAPIKey]
	);

	const sendPromptProcess = useCallback(
		async (prompt?: string) => {
			if (inFlightRef.current) return;
			const promptToSend = (prompt ?? state.userPrompt).trim();
			if (!promptToSend) return;
			inFlightRef.current = true;
			stopRequestedRef.current = false;
			const personalityId = state.userPersonalityID;
			const isNewConversation = pathname === "/chat";
			const prevMessagesSnapshot = state.messages;
			dispatch({ type: "SET_USER_PROMPT", payload: "" });
			dispatch({ type: "SET_COMPLETING", payload: "COMPLETING" });
			try {
				if (isNewConversation) {
					const { data } = await addConversationAction(personalityId, promptToSend.split(" ").slice(0, 8).join(" "));
					if (!data) {
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					console.log("conversation created:", data);
					dispatch({ type: "ADD_MESSAGE", payload: { content: promptToSend, conversation_id: data.id, role: "user" } });
					const { completed } = await addMessageAction(data.id, "user", promptToSend);
					if (!completed) {
						dispatch({ type: "UPDATE_MESSAGES", payload: prevMessagesSnapshot });
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					// Stop pressed before the stream started: keep the saved user message, no reply.
					if (stopRequestedRef.current) {
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					dispatch({ type: "ADD_MESSAGE", payload: { content: "", conversation_id: data.id, role: "assistant" } });
					completingTargetRef.current = data.id;
					sendUserPromptAction(promptToSend);
					await redirectAction(`/chat/${data.id}`);
				} else {
					const conversation_id = pathname.split("chat/")[1];
					if (!conversation_id) {
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					console.log("conversation_id:", conversation_id);
					dispatch({ type: "ADD_MESSAGE", payload: { content: promptToSend, conversation_id, role: "user" } });
					const { completed } = await addMessageAction(conversation_id, "user", promptToSend);
					if (!completed) {
						dispatch({ type: "UPDATE_MESSAGES", payload: prevMessagesSnapshot });
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					// Stop pressed before the stream started: keep the saved user message, no reply.
					if (stopRequestedRef.current) {
						dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
						return;
					}
					dispatch({ type: "ADD_MESSAGE", payload: { content: "", conversation_id, role: "assistant" } });
					completingTargetRef.current = conversation_id;
					sendUserPromptAction(promptToSend);
				}
			} catch (error) {
				console.error(error);
				dispatch({ type: "UPDATE_MESSAGES", payload: prevMessagesSnapshot });
				dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
				completingTargetRef.current = null;
				if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
					// Next.js redirect throws - navigation may proceed; keep state consistent
				} else if (error instanceof Error) {
					toast.error(error.message);
				}
			} finally {
				inFlightRef.current = false;
				stopRequestedRef.current = false;
			}
		},
		[
			addConversationAction,
			addMessageAction,
			dispatch,
			pathname,
			sendUserPromptAction,
			state.userPersonalityID,
			state.userPrompt,
			state.messages
		]
	);

	const stopPromptProcess = useCallback(() => {
		const targetId = completingTargetRef.current;
		// If send is still in-flight (before stream started), request cancellation
		if (inFlightRef.current) {
			stopRequestedRef.current = true;
			return;
		}
		// Stream is active - abort and persist/drop accordingly
		stop();
		const lastMessage = state.messages[state.messages.length - 1];
		if (lastMessage && (!targetId || lastMessage.conversation_id === targetId)) {
			if (lastMessage.content) {
				addMessageAction(lastMessage.conversation_id, lastMessage.role, lastMessage.content);
			} else {
				dispatch({ type: "UPDATE_MESSAGES", payload: state.messages.slice(0, state.messages.length - 1) });
			}
		}
		completingTargetRef.current = null;
		dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
	}, [addMessageAction, dispatch, state.messages, stop]);

	const updateUserAPIkeyAction = useCallback(
		(apiKey: string) => {
			setIsPending(true);
			updateUser({ apiKey }).then(({ error }) => {
				setIsPending(false);
				if (error) {
					toast.error(error);
				} else {
					toast.success("User API key updated successfully");
					dispatch({ type: "UPDATE_USER_API_KEY", payload: apiKey });
				}
			});
		},
		[dispatch, setIsPending]
	);

	useEffect(() => {
		if (!isPending) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setPendingMessage("");
		}
	}, [isPending, setPendingMessage]);

	useEffect(() => {
		if (completion && state.isCompleting === "COMPLETING") {
			const targetId = completingTargetRef.current;
			if (targetId) {
				const lastMessage = state.messages[state.messages.length - 1];
				if (lastMessage && lastMessage.conversation_id === targetId) {
					dispatch({ type: "UPDATE_LAST_MESSAGE", payload: completion });
				}
			} else {
				dispatch({ type: "UPDATE_LAST_MESSAGE", payload: completion });
			}
		}
		if (state.isCompleting === "COMPLETED") {
			const targetId = completingTargetRef.current;
			const lastMessage = state.messages[state.messages.length - 1];
			if (lastMessage && (!targetId || lastMessage.conversation_id === targetId) && completion) {
				// eslint-disable-next-line react-hooks/set-state-in-effect
				addMessageAction(lastMessage.conversation_id, lastMessage.role, completion);
			}
			completingTargetRef.current = null;
			dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
		}
	}, [completion, state.isCompleting, state.messages, addMessageAction]);

	function onFinish() {
		const targetId = completingTargetRef.current;
		const lastMessage = state.messages[state.messages.length - 1];
		if (!targetId || (lastMessage && lastMessage.conversation_id === targetId)) {
			dispatch({ type: "SET_COMPLETING", payload: "COMPLETED" });
		} else {
			completingTargetRef.current = null;
		}
	}

	function onError(error: Error) {
		completingTargetRef.current = null;
		dispatch({ type: "SET_COMPLETING", payload: "NOT_COMPLETED" });
		toast.error(error.message);
	}

	const value = useMemo(
		() => ({
			dispatch,
			state,
			isPending,
			setPendingMessage,
			completion,
			updateUserAvatarAction,
			addMessageAction,
			updateMessagesAction,
			addConversationAction,
			removeConversationAction,
			updateUserPlanAction,
			updateUserInfoAction,
			updateUserNotificationAction,
			sendUserPromptAction,
			sendPromptProcess,
			stopPromptProcess,
			updateUserAPIkeyAction
		}),
		[
			dispatch,
			state,
			isPending,
			setPendingMessage,
			completion,
			updateUserAvatarAction,
			addMessageAction,
			updateMessagesAction,
			addConversationAction,
			removeConversationAction,
			updateUserPlanAction,
			updateUserInfoAction,
			updateUserNotificationAction,
			sendUserPromptAction,
			sendPromptProcess,
			stopPromptProcess,
			updateUserAPIkeyAction
		]
	);

	return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = () => useContext(DashboardContext) as Context;
