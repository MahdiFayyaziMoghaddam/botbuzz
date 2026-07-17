"use client";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { DashboardContextProvider } from "@/contexts/DashboardContext";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function Provider({ children, AvatarElement }: { children: ReactNode; AvatarElement: ReactNode }) {
	const [isMounted, setIsMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<DashboardContextProvider>
				<div className="grid md:grid-cols-[max-content_1fr] max-md:grid-cols-1 grid-rows-[max-content_1fr] h-dvh bg-[#25272B]">
					{pathname !== "/onboarding" && (
						<>
							<Sidebar />
							<Topbar AvatarElement={AvatarElement} />
						</>
					)}
					{children}
				</div>
			</DashboardContextProvider>
		</>
	);
}
