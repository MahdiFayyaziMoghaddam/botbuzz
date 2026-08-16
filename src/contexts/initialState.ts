import { State } from "@/types/reducer";

export const initialState: State = {
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
