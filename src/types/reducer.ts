import { ClientMessage, Conversation, Personality, Subscription } from "./database";
import { UserInfo } from "./user";

type CompletingState = "COMPLETING" | "COMPLETED" | "NOT_COMPLETED";

export interface State {
	notification: boolean;
	userPlan: Subscription | null;
	subscriptions: Subscription[];
	personalities: Personality[];
	conversations: Conversation[];
	messages: ClientMessage[];
	userAvatar: string;
	userPrompt: string;
	userPersonalityID: Personality["id"];
	userInfo: UserInfo;
	isDrawerOpened: boolean;
	isCollapsed: boolean;
	isCompleting: CompletingState;
}

type Actions = {
	SET_NOTIFICATION_STATUS: boolean;
	SET_USER_PERSONALITY_ID: Personality["id"];
	SET_DRAWER_OPEN: boolean;
	TOGGLE_DRAWER: undefined;
	SET_COLLAPSE_OPEN: boolean;
	TOGGLE_COLLAPSE: undefined;
	SET_USER_PROMPT: string;
	SET_USER_INFO: Partial<UserInfo>;
	SET_COMPLETING: CompletingState;
	ADD_MESSAGE: Pick<ClientMessage, "content" | "conversation_id" | "role">;
	UPDATE_LAST_MESSAGE: ClientMessage["content"];
	UPDATE_MESSAGES: ClientMessage[];
	UPDATE_USER_PLAN: Subscription;
	ADD_CONVERSATION: Conversation;
	REMOVE_CONVERSATION: Conversation["id"];
	UPDATE_USER_AVATAR: string;
};

export type Action = {
	[A in keyof Actions]: Actions[A] extends undefined ? { type: A } : { type: A; payload: Actions[A] };
}[keyof Actions];
