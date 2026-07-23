import { Conversation, Message, Personality, Subscription } from "./database";

export interface State {
	isDrawerOpened: boolean;
	isCollapsed: boolean;
	notification: boolean;
	userAvatar: string;
	userPlan: Subscription["plan"];
	subscriptions: Subscription[];
	personalities: Personality[];
	conversations: Conversation[];
	messages: Message[];
	userPrompt: string;
	userPersonality: Personality["name"];
	isModelGenerating: boolean;
}

type Actions = {
	SET_DRAWER_OPEN: undefined;
	SET_DRAWER_CLOSE: undefined;
	TOGGLE_DRAWER: undefined;
	SET_COLLAPSE_OPEN: undefined;
	SET_COLLAPSE_CLOSE: undefined;
	TOGGLE_COLLAPSE: undefined;
	TURN_NOTIFICATION_ON: undefined;
	TURN_NOTIFICATION_OFF: undefined;
	UPDATE_USER_AVATAR: string;
	UPDATE_USER_PLAN: Subscription["plan"];
	SET_USER_PROMPT: string;
	SET_USER_PERSONALITY: Personality["name"];
	SET_IS_MODEL_GENERATING: boolean;
	REMOVE_CONVERSATION: string;
	ADD_CONVERSATION: Conversation;
};

export type Action = {
	[A in keyof Actions]: Actions[A] extends undefined ? { type: A } : { type: A; payload: Actions[A] };
}[keyof Actions];
