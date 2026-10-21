import { ClientMessage, Conversation, Personality, Subscription } from "./database";
import { UserInfo } from "./user";

export type CompletingState = "COMPLETING" | "COMPLETED" | "NOT_COMPLETED";

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
	userAPIKey: string;
	isDrawerOpened: boolean;
	isCollapsed: boolean;
	isCompleting: CompletingState;
}
