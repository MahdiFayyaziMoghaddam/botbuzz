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
	const { state, dispatch } = useDashboardContext();
	const { isBelow: isMobile } = useMediaQuery("md");
	const scrollY = useRef(0);
	const toggleCollapse = () => dispatch({ type: "TOGGLE_COLLAPSE" });
	const closeDrawer = useCallback(() => dispatch({ type: "SET_DRAWER_OPEN", payload: false }), [dispatch]);

	useEffect(() => {
		if (isMobile) {
			dispatch({ type: "SET_COLLAPSE_OPEN", payload: false });
		} else {
			dispatch({ type: "SET_DRAWER_OPEN", payload: false });
		}
	}, [isMobile, dispatch]);

	useEffect(() => {
		if (!isMobile) return;

		if (state.isDrawerOpened) {
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
	}, [state, isMobile]);

	useEffect(() => {
		if (!isMobile || !state.isDrawerOpened) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				closeDrawer();
			}
		};

		document.addEventListener("keydown", handleEscape, true);
		return () => document.removeEventListener("keydown", handleEscape, true);
	}, [state, isMobile, closeDrawer]);

	return (
		<>
			<div
				onClick={closeDrawer}
				className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px] transition-opacity duration-600 ${
					state.isDrawerOpened ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			/>

			<aside
				className={`flex flex-col justify-between py-40 max-xl:py-35 max-lg:py-30 max-md:py-20 bg-[#3A3C40] border-r-2 border-glass-stroke h-full max-md:fixed max-md:top-0 max-md:bottom-0 z-50 transition-all duration-500 md:row-start-1 md:-row-end-1
					${
						isMobile
							? `w-260 px-16 ${state.isDrawerOpened ? "left-0" : "-left-full"}`
							: state.isCollapsed
								? "w-[10rem] max-xl:w-[9.3rem] max-lg:w-[7.3rem] xl:px-24 lg:px-24 md:px-16"
								: "w-260 max-xl:w-230 max-lg:w-200 xl:px-24 lg:px-24 md:px-16"
					}`}
			>
				<div>
					<div className={`flex justify-between items-start xl:-mr-36 lg:-mr-34 md:-mr-24`}>
						<Image
							src="/images/favicon.png"
							alt="icon"
							className="relative size-48 max-xl:size-42 max-lg:size-36 rounded-[0.8rem] max-xl:rounded-[0.7rem] max-lg:rounded-[0.6rem] shrink-0"
						/>

						<Button
							variant="ghost"
							className={`bg-icon-white! text-icon-black p-0! rounded-[0.5rem] max-xl:rounded-[0.4rem] max-lg:rounded-[0.3rem] z-10 duration-400 *:size-24 max-xl:*:size-20 max-lg:*:size-16 ${
								state.isCollapsed ? "rotate-180" : ""
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

					<div
						className="flex flex-col gap-8 max-xl:gap-7 max-lg:gap-6 mt-40 max-xl:mt-35 max-lg:mt-30"
						onClick={isMobile ? closeDrawer : undefined}
					>
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
