"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { DashboardContextProvider } from "@/contexts/DashboardContext";
import { State } from "@/types/reducer";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Provider({ children, initialState }: { children: ReactNode; initialState?: Partial<State> }) {
	const pathname = usePathname();

	return (
		<>
			<DashboardContextProvider initialState={initialState}>
				<div className="grid md:grid-cols-[max-content_1fr] max-md:grid-cols-1 grid-rows-[max-content_1fr] h-dvh bg-[#25272B]">
					{pathname !== "/onboarding" && (
						<>
							<Sidebar />
							<Topbar />
						</>
					)}
					{children}
				</div>
			</DashboardContextProvider>
		</>
	);
}
