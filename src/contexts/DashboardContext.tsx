"use client";
import { updateUser, uploadUserAvatar } from "@/auth/actions";
import { addConversation, addMessage, getMessages, removeConversation } from "@/database/actions";
import useDebug from "@/hooks/useDebug";
import useLoadingToast from "@/hooks/useLoadingToast";
import { Conversation, Message, Subscription } from "@/types/database";
import { Action, State } from "@/types/reducer";
import { UserInfo } from "@/types/user";
import { useCompletion } from "@ai-sdk/react";
import {
	createContext,
	Dispatch,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useState
} from "react";
import { toast } from "react-toastify";

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
	) => void;
	updateMessagesAction: (conversation_id: Conversation["id"]) => void;
	addConversationAction: (personality_id: string, title?: string) => Promise<{ data: Conversation | null }>;
	removeConversationAction: (id: Conversation["id"]) => void;
	updateUserPlanAction: (id: Subscription["id"]) => void;
	updateUserInfoAction: (userInfo: UserInfo) => void;
	updateUserNotificationAction: (notification: boolean) => void;
	sendUserPromptAction: (prompt: string) => void;
}

const DashboardContext = createContext<Context | null>(null);

export const DashboardContextProvider = ({
	children,
	initialState
}: {
	children: ReactNode;
	initialState?: Partial<State>;
}) => {
	const [{ state: isPending, content: pendingMessage }, setPendingData] = useState({ state: false, content: "" });
	const setPendingMessage = useCallback((content: string) => setPendingData((prev) => ({ ...prev, content })), []);
	const setIsPending = useCallback((state: boolean) => setPendingData((prev) => ({ ...prev, state })), []);
	useLoadingToast(pendingMessage, isPending);
	const [state, dispatch] = useReducer<State, [action: Action]>(
		(prevState, action) => {
			switch (action.type) {
				case "TOGGLE_DRAWER":
					return {
						...prevState,
						isDrawerOpened: !prevState.isDrawerOpened
					};
				case "SET_DRAWER_OPEN":
					return {
						...prevState,
						isDrawerOpened: action.payload
					};
				case "SET_COLLAPSE_OPEN":
					return {
						...prevState,
						isCollapsed: action.payload
					};
				case "TOGGLE_COLLAPSE":
					return {
						...prevState,
						isCollapsed: !prevState.isCollapsed
					};
				case "SET_NOTIFICATION_STATUS":
					return {
						...prevState,
						notification: action.payload
					};
				case "UPDATE_USER_PLAN":
					return {
						...prevState,
						userPlan: action.payload
					};
				case "SET_USER_PROMPT":
					return {
						...prevState,
						userPrompt: action.payload
					};
				case "SET_USER_PERSONALITY_ID": {
					const personality = prevState.personalities.find((p) => p.id === action.payload);
					return {
						...prevState,
						userPersonalityID: personality ? action.payload : prevState.userPersonalityID
					};
				}
				case "ADD_CONVERSATION":
					return { ...prevState, conversations: [...prevState.conversations, action.payload] };
				case "REMOVE_CONVERSATION":
					return { ...prevState, conversations: prevState.conversations.filter((c) => c.id !== action.payload) };
				case "ADD_MESSAGE": {
					const { content, conversation_id, role } = action.payload;
					return {
						...prevState,
						messages: [...prevState.messages, { content, conversation_id, role, created_at: new Date().toISOString() }]
					};
				}
				case "UPDATE_MESSAGES": {
					return {
						...prevState,
						messages: Array.isArray(action.payload) ? action.payload : []
					};
				}
				case "UPDATE_LAST_MESSAGE": {
					const content = action.payload;
					prevState.messages[prevState.messages.length - 1].content += content;
					return prevState;
				}
				case "UPDATE_USER_AVATAR": {
					return { ...prevState, userAvatar: action.payload };
				}
				case "SET_USER_INFO":
					return {
						...prevState,
						userInfo: { ...prevState.userInfo, ...action.payload }
					};
				default:
					return prevState;
			}
		},
		{
			isCollapsed: false,
			isDrawerOpened: false,
			notification: false,
			userAvatar: "/images/user.png",
			userInfo: { name: "", email: "", password: "", confirm: "" },
			userPlan: null,
			userPrompt: "",
			userPersonalityID: "",
			personalities: [],
			subscriptions: [],
			conversations: [],
			messages: [],
			...initialState
		}
	);

	const { complete, completion } = useCompletion({
		api: "/api/chat",
		onFinish,
		onError
	});

	useDebug("conversations", state.conversations);
	useDebug("messages", state.messages);
	useDebug("userPrompt", state.userPrompt);
	useDebug("personality_id", state.userPersonalityID);
	useDebug("isPending", isPending);
	useDebug("completion", completion);

	const addMessageAction = useCallback(
		(conversation_id: Message["conversation_id"], role: Message["role"], content: Message["content"]) => {
			setIsPending(true);
			addMessage(conversation_id, role, content).then(({ error }) => {
				setIsPending(false);
				if (error) {
					const prevMessages = state.messages.slice(0, state.messages.length - 1);
					dispatch({ type: "UPDATE_MESSAGES", payload: prevMessages });
					toast.error(error.message);
				}
			});
		},
		[setIsPending, state.messages]
	);

	const updateMessagesAction = useCallback(
		(conversation_id: Conversation["id"]) => {
			setIsPending(true);
			getMessages(conversation_id).then(({ data, error }) => {
				setIsPending(false);
				if (error) {
					toast.error(error.message);
				}
				if (!error && data) {
					dispatch({ type: "UPDATE_MESSAGES", payload: data });
				}
			});
		},
		[dispatch, setIsPending]
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
			setIsPending(true);
			complete(prompt, { body: { personality_id: state.userPersonalityID } });
		},
		[complete, setIsPending, state.userPersonalityID]
	);

	useEffect(() => {
		if (!isPending) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setPendingMessage("");
		}
		if (completion && isPending) {
			// const isRedirected = pathname.startsWith("/chat") && pathname !== "/chat";
			// if (isRedirected) {
			dispatch({ type: "UPDATE_LAST_MESSAGE", payload: completion });
			// }
		}
	}, [completion, isPending, setPendingMessage]);

	function onFinish(prompt: string, completion: string) {
		setIsPending(false);
		console.log("onFinish");
		const completedMessage = state.messages[state.messages.length - 1];
		addMessageAction(completedMessage.conversation_id, "assistant", completion);
	}

	function onError(error: Error) {
		setIsPending(false);
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
			sendUserPromptAction
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
			sendUserPromptAction
		]
	);

	return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = () => useContext(DashboardContext) as Context;
