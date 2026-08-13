import { ReactNode } from "react";
import Link from "../link/Link";
import { useDashboardContext } from "@/contexts/DashboardContext";

interface SidebarOption {
	title: string;
	icon: ReactNode;
	href: string;
}

export default function SidebarOption({ href, icon, title }: SidebarOption) {
	const { state } = useDashboardContext();
	return (
		<Link href={href} prefetch className={(isActive) => `${isActive ? "*:bg-btn-purple text-typo-main-black" : ""}`}>
			<div className="flex items-center gap-16 max-xl:gap-14 max-lg:gap-12 py-10 max-xl:py-9 max-lg:py-8 px-13 max-xl:px-11 max-lg:px-10 rounded-[0.8rem] max-xl:rounded-[0.65rem] max-lg:rounded-[0.5rem] text-[1.4rem] max-xl:text-[1.2rem] max-lg:text-[1.1rem] font-semibold *:first:size-24 max-xl:*:first:size-20 max-lg:*:first:size-18 *:shrink-0 *:duration-320">
				{icon}
				<span
					className={`overflow-hidden whitespace-nowrap transition-all duration-300 ease-in ${
						state.isCollapsed ? "md:max-w-0 md:opacity-0 md:-translate-x-2" : "max-w-[200px] opacity-100 translate-x-0"
					}`}
				>
					{title}
				</span>
			</div>
		</Link>
	);
}
