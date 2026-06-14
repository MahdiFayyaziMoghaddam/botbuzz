import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] h-dvh bg-[#25272B]">
			<Sidebar />
			<Topbar />
			{children}
		</div>
	);
}
