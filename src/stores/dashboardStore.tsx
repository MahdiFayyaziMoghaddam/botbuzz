"use client";
import { updateUser, uploadUserAvatar } from "@/auth/actions";
import { addConversation, addMessage, getMessages, removeConversation } from "@/database/actions";
import useLoadingToast from "@/hooks/useLoadingToast";
import { CompletingState, State } from "@/types/dashboard";
import { Conversation, Message, Subscription } from "@/types/database";
import { UserInfo } from "@/types/user";
import { redirectAction } from "@/utils/redirect";
import { useCompletion } from "@ai-sdk/react";
import { CompletionRequestOptions } from "ai";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createStore, type StoreApi, useStore } from "zustand";

const defaultState: State = {
	isCollapsed: false,
	isDrawerOpened: false,
	notification: false,
	userAvatar: "/images/user.png",
	userInfo: { name: "", email: "", password: "", confirm: "" },
	userPlan: null,
	userAPIKey: "",
	isCompleting: "NOT_COMPLETED",
	userPrompt: "",
	userPersonalityID: "",
	personalities: [],
	subscriptions: [],
	conversations: [],
	messages: []
};

export interface DashboardStore extends State {
	isPending: boolean;
	pendingMessage: string;
	pathname: string;
	// `complete` and `stop` come from the useCompletion hook, so the provider injects them once mounted.
	complete: (prompt: string, options?: CompletionRequestOptions) => Promise<string | null | undefined>;
	stop: () => void;
	action: {
		setUserPrompt: (prompt: string) => void;
		setUserInfo: (userInfo: Partial<UserInfo>) => void;
		setUserPersonalityID: (id: string) => void;
		setPendingMessage: (message: string) => void;
		setDrawerOpen: (isDrawerOpened: boolean) => void;
		setCollapseOpen: (isCollapsed: boolean) => void;
		toggleCollapse: () => void;
		setCompleting: (isCompleting: CompletingState) => void;
		updateLastMessage: (content: string) => void;
		addMessage: (
			conversation_id: Message["conversation_id"],
			role: Message["role"],
			content: Message["content"]
		) => Promise<{ completed: boolean }>;
		updateMessages: (conversation_id: Conversation["id"]) => Promise<{ completed: boolean }>;
		addConversation: (
			personality_id: string,
			title?: string
		) => Promise<{ data: Conversation | null }>;
		removeConversation: (id: Conversation["id"]) => void;
		updateUserPlan: (id: Subscription["id"]) => void;
		updateUserAvatar: (file: File) => void;
		updateUserInfo: (userInfo: UserInfo) => void;
		updateUserNotification: (notification: boolean) => void;
		updateUserAPIkey: (apiKey: string) => void;
		pausePromptProcess: () => void;
		sendPromptProcess: (prompt?: string) => Promise<void>;
	};
}

export const createDashboardStore = (preloadedState?: Partial<State>) =>
	createStore<DashboardStore>()((set, get) => {
		const setPending = (isPending: boolean) =>
			set(isPending ? { isPending } : { isPending, pendingMessage: "" });

		const action: DashboardStore["action"] = {
			setUserPrompt: (userPrompt) => set({ userPrompt }),
			setUserInfo: (userInfo) => set({ userInfo: { ...get().userInfo, ...userInfo } }),
			setUserPersonalityID: (id) =>
				set({
					userPersonalityID: get().personalities.some((p) => p.id === id) ? id : get().userPersonalityID
				}),
			setPendingMessage: (pendingMessage) => set({ pendingMessage }),
			setDrawerOpen: (isDrawerOpened) => set({ isDrawerOpened }),
			setCollapseOpen: (isCollapsed) => set({ isCollapsed }),
			toggleCollapse: () => set({ isCollapsed: !get().isCollapsed }),
			setCompleting: (isCompleting) => set({ isCompleting }),
			updateLastMessage: (content) => {
				const { messages } = get();
				const lastMessage = messages[messages.length - 1];
				if (!lastMessage) return;
				set({ messages: [...messages.slice(0, -1), { ...lastMessage, content }] });
			},
			addMessage: async (conversation_id, role, content) => {
				setPending(true);
				const { error } = await addMessage(conversation_id, role, content);
				setPending(false);
				if (error) {
					const { messages } = get();
					set({ messages: messages.slice(0, messages.length - 1) });
					toast.error(error.message);
					return { completed: false };
				}
				return { completed: true };
			},
			updateMessages: async (conversation_id) => {
				setPending(true);
				const { data, error } = await getMessages(conversation_id);
				setPending(false);
				if (!error && data) {
					set({ messages: data });
					return { completed: true };
				}
				if (error) toast.error(error.message);
				return { completed: false };
			},
			addConversation: async (personality_id, title) => {
				setPending(true);
				const { data, error } = await addConversation(personality_id, title);
				setPending(false);
				if (error) toast.error(error.message);
				if (!error && data) {
					set({ conversations: [...get().conversations, data] });
					return { data };
				}
				return { data: null };
			},
			removeConversation: (id) => {
				const prevConversation = get().conversations.find((c) => c.id === id);
				set({ conversations: get().conversations.filter((c) => c.id !== id) });
				setPending(true);
				removeConversation(id).then(({ error }) => {
					setPending(false);
					if (error) {
						toast.error(error.message);
						if (prevConversation) set({ conversations: [...get().conversations, prevConversation] });
					}
				});
			},
			updateUserPlan: (id) => {
				setPending(true);
				updateUser({ subscriptionID: id }).then(({ error }) => {
					setPending(false);
					if (error) {
						toast.error(error);
						return;
					}
					const subscription = get().subscriptions.find((s) => s.id === id);
					if (subscription) set({ userPlan: subscription });
				});
			},
			updateUserAvatar: (file) => {
				setPending(true);
				uploadUserAvatar(file).then(({ error, data }) => {
					setPending(false);
					if (error) {
						toast.error(error);
						return;
					}
					if (data) {
						toast.success("User avatar updated successfully");
						set({ userAvatar: data });
					}
				});
			},
			updateUserInfo: (userInfo) => {
				setPending(true);
				updateUser(userInfo).then(({ error }) => {
					setPending(false);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("User information updated successfully");
					set({ userInfo: { ...get().userInfo, confirm: "", email: "", name: "", password: "" } });
				});
			},
			updateUserNotification: (notification) => {
				switch (Notification.permission) {
					case "denied": {
						toast.error("Notification permission denied");
						if (get().notification) {
							set({ notification: false });
							updateUser({ notification: false });
						}
						break;
					}

					case "granted": {
						set({ notification });
						setPending(true);
						updateUser({ notification }).then(({ error }) => {
							setPending(false);
							if (error) {
								toast.error(error);
								set({ notification: !notification });
							}
						});
						break;
					}

					case "default": {
						Notification.requestPermission().then((permission) => {
							const granted = permission === "granted";
							set({ notification: granted });
							setPending(true);
							updateUser({ notification: granted }).then(({ error }) => {
								setPending(false);
								if (error) {
									toast.error(error);
									set({ notification: !granted });
								}
							});
						});
						break;
					}
				}
			},
			updateUserAPIkey: (apiKey) => {
				setPending(true);
				updateUser({ apiKey }).then(({ error }) => {
					setPending(false);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("User API key updated successfully");
					set({ userAPIKey: apiKey });
				});
			},
			pausePromptProcess: () => {
				if (get().isCompleting !== "COMPLETING") return;
				get().stop();
				// the provider persists the partial answer and resets the state
				set({ isCompleting: "PAUSED" });
			},
			sendPromptProcess: async (prompt) => {
				const { userPrompt, userPersonalityID, pathname, isCompleting } = get();
				if (isCompleting === "COMPLETING") return;
				const text = (prompt || userPrompt).trim();
				if (!text) return;
				set({ userPrompt: "", isCompleting: "COMPLETING" });

				const appendMessage = (conversation_id: string, role: Message["role"], content: string) =>
					set({
						messages: [
							...get().messages,
							{ content, conversation_id, role, created_at: new Date().toISOString() }
						]
					});
				const startCompletion = (conversation_id: string) => {
					// the prompt may have been stopped while the message was being saved
					if (get().isCompleting !== "COMPLETING") return;
					appendMessage(conversation_id, "assistant", "");
					get().complete(text, {
						body: { personality_id: userPersonalityID, api_key: get().userAPIKey }
					});
				};

				if (pathname === "/chat") {
					const { data } = await action.addConversation(
						userPersonalityID,
						text.split(" ").slice(0, 8).join(" ")
					);
					if (!data) {
						set({ isCompleting: "NOT_COMPLETED" });
						return;
					}
					appendMessage(data.id, "user", text);
					await redirectAction(`/chat/${data.id}`);
					const { completed } = await action.addMessage(data.id, "user", text);
					if (!completed) {
						set({ isCompleting: "NOT_COMPLETED" });
						return;
					}
					startCompletion(data.id);
					return;
				}

				const conversation_id = pathname.split("chat/")[1];
				appendMessage(conversation_id, "user", text);
				const { completed } = await action.addMessage(conversation_id, "user", text);
				if (!completed) {
					set({ isCompleting: "NOT_COMPLETED" });
					return;
				}
				startCompletion(conversation_id);
			}
		};

		return {
			...defaultState,
			...preloadedState,
			isPending: false,
			pendingMessage: "",
			pathname: "/",
			complete: async () => null,
			stop: () => {},
			action
		};
	});

const DashboardStoreContext = createContext<StoreApi<DashboardStore> | null>(null);

export function DashboardStoreProvider({
	children,
	preloadedState
}: {
	children: ReactNode;
	preloadedState?: Partial<State>;
}) {
	// One store per request/render tree: the SSR preloaded data seeds it.
	const [store] = useState(() => createDashboardStore(preloadedState));

	const pathname = usePathname();
	const { complete, stop, completion } = useCompletion({
		api: "/api/chat",
		onFinish: () => store.getState().action.setCompleting("COMPLETED"),
		onError: (error) => {
			store.getState().action.setCompleting("NOT_COMPLETED");
			toast.error(error.message);
		}
	});
	const isPending = useStore(store, (state) => state.isPending);
	const pendingMessage = useStore(store, (state) => state.pendingMessage);
	const isCompleting = useStore(store, (state) => state.isCompleting);

	useLoadingToast(pendingMessage, isPending);

	useEffect(() => {
		store.setState({ complete, stop, pathname });
	}, [complete, stop, pathname, store]);

	useEffect(() => {
		const { action, messages } = store.getState();
		if (completion && isCompleting === "COMPLETING") {
			action.updateLastMessage(completion);
		}
		if (isCompleting === "COMPLETED" || isCompleting === "PAUSED") {
			const lastMessage = messages[messages.length - 1];
			if (lastMessage?.role === "assistant" && completion) {
				action.addMessage(lastMessage.conversation_id, lastMessage.role, completion);
			}
			action.setCompleting("NOT_COMPLETED");
		}
	}, [completion, isCompleting, store]);

	return <DashboardStoreContext.Provider value={store}>{children}</DashboardStoreContext.Provider>;
}

export function useDashboardStore<T>(selector: (state: DashboardStore) => T): T {
	const store = useContext(DashboardStoreContext);
	if (!store) throw new Error("useDashboardStore must be used within a DashboardStoreProvider");
	return useStore(store, selector);
}
