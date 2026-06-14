"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { DashboardContextProvider } from "@/contexts/DashboardContext";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
	return (
		<>
			<DashboardContextProvider>
				<div className="grid md:grid-cols-[max-content_1fr] max-md:grid-cols-1 grid-rows-[max-content_1fr] h-dvh bg-[#25272B]">
					<Sidebar />
					<Topbar />
					{children}
				</div>
			</DashboardContextProvider>
		</>
	);
}
