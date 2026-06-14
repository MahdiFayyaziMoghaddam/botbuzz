"use client";
import Image from "../image/Image";
import Button from "../button/Button";
import ArrowLeft from "../icons/arrow-left";
import ChatBubble from "../icons/chat-bubble";
import People from "../icons/people";
import History from "../icons/history";
import Settings from "../icons/settings";
import SidebarOption from "./SidebarOption";
import SidebarUpgrade from "./SidebarUpgrade";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext<boolean | null>(null);
export const useSidebarContext = () => useContext(SidebarContext) as boolean;

export default function Sidebar() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const toggle = () => setIsCollapsed((prev) => !prev);

	return (
		<SidebarContext.Provider value={isCollapsed}>
			<aside
				className={`flex flex-col justify-between py-40 row-start-1 -row-end-1 bg-[#3A3C40] border-r-2 border-glass-stroke duration-400 ${isCollapsed ? "w-[12.16rem] px-35" : "w-260 px-24"}`}
			>
				<div>
					<div className={`flex justify-between items-start ${isCollapsed ? "-mr-47" : "-mr-36"}`}>
						<Image src="/images/favicon.png" alt="icon" className="relative size-48 rounded-[0.8rem]" />
						<Button
							variant="ghost"
							className={`bg-icon-white! text-icon-black p-0! rounded-[0.5rem] z-10 duration-400 ${isCollapsed ? "rotate-180" : ""}`}
							onClick={toggle}
						>
							<ArrowLeft />
						</Button>
					</div>
					<div className="flex flex-col gap-8 mt-40">
						<SidebarOption href="/dashboard" icon={<ChatBubble />} title="Chat" />
						<SidebarOption href="/history" icon={<History />} title="Chat History" />
						<SidebarOption href="/personalities" icon={<People />} title="AI Personalities" />
						<SidebarOption href="/settings" icon={<Settings />} title="Settings" />
					</div>
				</div>
				<SidebarUpgrade />
			</aside>
		</SidebarContext.Provider>
	);
}
