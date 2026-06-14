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
import { useEffect, useRef, useCallback } from "react";
import { useDashboardContext } from "@/contexts/DashboardContext";
import useMediaQuery from "@/hooks/useBreakpoint";

export default function Sidebar() {
	const { isDrawerOpen, setIsDrawerOpen, isCollapsed, setIsCollapsed } = useDashboardContext();
	const { isBelow: isMobile } = useMediaQuery("md");
	const scrollY = useRef(0);

	const toggleCollapse = () => setIsCollapsed((prev) => !prev);
	const closeDrawer = useCallback(() => setIsDrawerOpen(false), [setIsDrawerOpen]);

	useEffect(() => {
		const check = () => {
			if (isMobile) {
				setIsCollapsed(false);
			} else {
				setIsDrawerOpen(false);
			}
		};

		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, [setIsDrawerOpen, setIsCollapsed, isMobile]);

	useEffect(() => {
		if (!isMobile) return;

		if (isDrawerOpen) {
			scrollY.current = window.scrollY;
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollY.current}px`;
			document.body.style.width = "100%";
		} else {
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
			window.scrollTo(0, scrollY.current);
		}

		return () => {
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";
		};
	}, [isDrawerOpen, isMobile]);

	useEffect(() => {
		if (!isMobile || !isDrawerOpen) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				closeDrawer();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isDrawerOpen, isMobile, closeDrawer]);

	return (
		<>
			<div
				onClick={closeDrawer}
				className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px] transition-opacity duration-600 ${
					isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			/>

			<aside
				className={`flex flex-col justify-between py-40 max-md:py-20 bg-[#3A3C40] border-r-2 border-glass-stroke h-full max-md:fixed max-md:top-0 max-md:bottom-0 z-50 transition-all duration-500 md:row-start-1 md:-row-end-1
					${
						isMobile
							? `w-260 px-16 ${isDrawerOpen ? "left-0" : "-left-full"}`
							: isCollapsed
								? "w-[12.16rem] px-35"
								: "w-260 px-24"
					}`}
			>
				<div>
					<div className={`flex justify-between items-start ${!isMobile && isCollapsed ? "md:-mr-47" : "md:-mr-36"}`}>
						<Image src="/images/favicon.png" alt="icon" className="relative size-48 rounded-[0.8rem]" />

						<Button
							variant="ghost"
							className={`bg-icon-white! text-icon-black p-0! rounded-[0.5rem] z-10 duration-400 ${
								isCollapsed ? "rotate-180" : ""
							} max-md:hidden`}
							onClick={toggleCollapse}
						>
							<ArrowLeft />
						</Button>

						<button
							onClick={closeDrawer}
							className="md:hidden size-18 text-[3.3rem] flex justify-center items-center cursor-pointer select-none outline-none text-white"
							aria-label="Close menu"
						>
							&times;
						</button>
					</div>

					<div className="flex flex-col gap-8 mt-40" onClick={isMobile ? closeDrawer : undefined}>
						<SidebarOption href="/chat" icon={<ChatBubble />} title="Chat" />
						<SidebarOption href="/history" icon={<History />} title="Chat History" />
						<SidebarOption href="/personalities" icon={<People />} title="AI Personalities" />
						<SidebarOption href="/settings" icon={<Settings />} title="Settings" />
					</div>
				</div>
				<SidebarUpgrade />
			</aside>
		</>
	);
}
