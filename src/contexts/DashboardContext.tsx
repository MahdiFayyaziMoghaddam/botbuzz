import { Action, State } from "@/types/reducer";
import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

interface Context {
	state: State;
	dispatch: Dispatch<Action>;
}

const DashboardContext = createContext<Context | null>(null);

export const DashboardContextProvider = ({
	children,
	initialState
}: {
	children: ReactNode;
	initialState?: Partial<State>;
}) => {
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
						isDrawerOpened: true
					};
				case "SET_DRAWER_CLOSE":
					return {
						...prevState,
						isDrawerOpened: false
					};
				case "SET_COLLAPSE_OPEN":
					return {
						...prevState,
						isCollapsed: true
					};
				case "SET_COLLAPSE_CLOSE":
					return {
						...prevState,
						isCollapsed: false
					};
				case "TOGGLE_COLLAPSE":
					return {
						...prevState,
						isCollapsed: !prevState.isCollapsed
					};
				case "TURN_NOTIFICATION_OFF":
					return {
						...prevState,
						notification: false
					};
				case "TURN_NOTIFICATION_ON":
					return {
						...prevState,
						notification: true
					};
				case "UPDATE_USER_AVATAR":
					return {
						...prevState,
						userAvatar: action.payload
					};
				case "UPDATE_USER_PLAN":
					return {
						...prevState,
						userPlan: action.payload
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
			userPlan: "Free",
			personalities: [],
			subscriptions: [],
			...initialState
		}
	);

	return <DashboardContext.Provider value={{ dispatch, state }}>{children}</DashboardContext.Provider>;
};

export const useDashboardContext = () => useContext(DashboardContext) as Context;
