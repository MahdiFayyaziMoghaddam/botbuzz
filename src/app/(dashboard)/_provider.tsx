"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { DashboardStoreProvider } from "@/stores/dashboardStore";
import { MediaQueryResult } from "@/types/breakpoint";
import { State } from "@/types/dashboard";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Provider({
	children,
	initialState,
	initialBreakpoint
}: {
	children: ReactNode;
	initialState?: Partial<State>;
	initialBreakpoint?: Partial<MediaQueryResult>;
}) {
	const pathname = usePathname();

	return (
		<>
			<DashboardStoreProvider preloadedState={initialState}>
				<div className="grid md:grid-cols-[max-content_1fr] max-md:grid-cols-1 grid-rows-[max-content_1fr] h-dvh bg-[#25272B]">
					{pathname !== "/onboarding" && (
						<>
							<Sidebar initialBreakpoint={initialBreakpoint} />
							<Topbar />
						</>
					)}
					{children}
				</div>
			</DashboardStoreProvider>
		</>
	);
}
