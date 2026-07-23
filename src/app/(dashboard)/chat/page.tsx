"use client";
import DateSeparator from "@/components/dashboard/DateSeparator";
import ChatSuggestions from "@/components/dashboard/ChatSuggestions";
import ChatBox from "@/components/dashboard/ChatBox";
import ChatFooter from "@/components/dashboard/ChatFooter";
import GetStarted from "@/components/dashboard/GetStarted";
import { useEffect } from "react";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { useCompletion } from "@ai-sdk/react";

export default function Chat() {
	const { state, dispatch } = useDashboardContext();
	const { complete, completion } = useCompletion({ api: "/api/chat" });

	useEffect(() => {
		if (state.isModelGenerating) {
			(async () => {
				await complete(state.userPrompt);
				dispatch({ type: "SET_USER_PROMPT", payload: "" });
				dispatch({ type: "SET_IS_MODEL_GENERATING", payload: false });
			})();
		}
	}, [state.isModelGenerating, state.userPrompt, dispatch, complete]);

	return (
		<div className="relative flex flex-col overflow-hidden">
			<div className="flex flex-col px-194 max-xl:px-130 max-lg:px-80 max-md:px-60 max-sm:px-30 max-xs:px-20 gap-32 max-lg:gap-28 max-md:gap-24 max-sm:gap-20 max-xs:gap-16 my-24 max-lg:my-20 max-md:my-16 max-sm:my-12 max-xs:my-10 shrink overflow-auto h-full">
				<ChatBox
					role="model"
					date="01 July ▪ 05:12 PM"
					title="Response"
					imgSrc="/images/favicon.png"
					msg={completion}
				/>
				{/* <GetStarted /> */}
				{/* <DateSeparator title="Today" />
				<ChatBox date="01 July ▪ 05:12 PM" msg="How do you approach designing for accessibility in UI?" />
				<ChatBox
					role="model"
					date="01 July ▪ 05:12 PM"
					title="Response"
					imgSrc="/images/favicon.png"
					msg="Designing for accessibility in user interfaces (UI) is about ensuring that all users, including those with disabilities, can interact with your product effectively. Here are some key principles and steps to consider: 1. Understand Accessibility Guidelines Web Content Accessibility Guidelines (WCAG): Familiarize yourself with WCAG 2.1 standards, which provide a comprehensive set of guidelines for making web content more accessible. Platform-Specific Guidelines: Consider the guidelines provided by different platforms (e.g., Apple’s Human Interface Guidelines, Android’s Material Design Accessibility Guidelines). 2. Design with Inclusivity in Mind Color Contrast: Ensure sufficient contrast between text and background colors to make content readable for users with visual impairments. Tools like WebAIM’s Contrast Checker can help."
				/>
				<ChatSuggestions
					items={["Can our perception of reality be trusted?", "How do different philosophers define the self?"]}
				/> */}
			</div>
			<ChatFooter />
		</div>
	);
}
