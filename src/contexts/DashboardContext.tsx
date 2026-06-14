import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface Context {
	isDrawerOpen: boolean;
	setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
	setIsCollapsed: Dispatch<SetStateAction<boolean>>;
	isCollapsed: boolean;
}

const DashboardContext = createContext<Context | null>(null);

export const DashboardContextProvider = ({ children }: { children: ReactNode }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<DashboardContext.Provider value={{ isDrawerOpen, setIsDrawerOpen, isCollapsed, setIsCollapsed }}>
			{children}
		</DashboardContext.Provider>
	);
};

export const useDashboardContext = () => useContext(DashboardContext) as Context;
