import { ReactNode } from "react";
import Link from "../link/Link";
import { useSidebarContext } from "./Sidebar";

interface SidebarOption {
	title: string;
	icon: ReactNode;
	href: string;
}

export default function SidebarOption({ href, icon, title }: SidebarOption) {
	const isCollapsed = useSidebarContext();
	return (
		<Link href={href} className={(isActive) => `${isActive ? "*:bg-btn-purple text-typo-main-black" : ""}`}>
			<div className="flex items-center gap-16 py-10 px-13 rounded-[0.8rem] text-[1.4rem] font-semibold *:first:size-24 *:shrink-0">
				{icon}
				<span
					className={`overflow-hidden whitespace-nowrap transition-all duration-320 ${
						isCollapsed ? "max-w-0 opacity-0 -translate-x-2" : "max-w-[200px] opacity-100 translate-x-0"
					}`}
				>
					{title}
				</span>
			</div>
		</Link>
	);
}
