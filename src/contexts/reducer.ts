import { Action, State } from "@/types/reducer";

export const reducer = (prevState: State, action: Action) => {
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
		case "SET_COMPLETING": {
			return {
				...prevState,
				isCompleting: action.payload
			};
		}
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
			prevState.messages[prevState.messages.length - 1].content = content;
			return prevState;
		}
		case "UPDATE_USER_AVATAR": {
			return { ...prevState, userAvatar: action.payload };
		}
		case "UPDATE_USER_API_KEY": {
			return { ...prevState, userAPIKey: action.payload };
		}
		case "SET_USER_INFO":
			return {
				...prevState,
				userInfo: { ...prevState.userInfo, ...action.payload }
			};
		default:
			return prevState;
	}
};
