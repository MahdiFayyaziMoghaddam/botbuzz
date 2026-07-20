import { Personality, Subscription } from "./database";

export interface State {
	isDrawerOpened: boolean;
	isCollapsed: boolean;
	notification: boolean;
	userAvatar: string;
	userPlan: Subscription["plan"];
	subscriptions: Subscription[];
	personalities: Personality[];
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
};

export type Action = {
	[A in keyof Actions]: Actions[A] extends undefined
		? { type: A; payload?: Actions[A] }
		: { type: A; payload: Actions[A] };
}[keyof Actions];
