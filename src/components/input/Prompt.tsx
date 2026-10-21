"use client";
import { useDashboardStore } from "@/stores/dashboardStore";
import AddPhoto from "../icons/add-photo";
import Microphone from "../icons/microphone";
import Send from "../icons/send";
import Stop from "../icons/stop";

export default function Prompt() {
	const userPrompt = useDashboardStore((state) => state.userPrompt);
	const isCompleting = useDashboardStore((state) => state.isCompleting);
	const setUserPrompt = useDashboardStore((state) => state.action.setUserPrompt);
	const sendPromptProcess = useDashboardStore((state) => state.action.sendPromptProcess);
	const pausePromptProcess = useDashboardStore((state) => state.action.pausePromptProcess);
	return (
		<div className="flex gap-2 max-md:gap-1 mx-auto w-full *:border-transparent *:border-1 *:first:border-r-0 *:nth-[2]:border-l-0 group">
			<div className="flex items-start gap-x-8 max-lg:gap-x-6 max-md:gap-x-5 max-sm:gap-x-4 max-xs:gap-x-3 rounded-l-[1.2rem] max-lg:rounded-l-[1rem] max-md:rounded-l-[0.8rem] max-sm:rounded-l-[0.6rem] max-xs:rounded-l-[0.5rem] bg-btn-dark grow pl-16 max-lg:pl-14 max-md:pl-10 max-sm:pl-8 max-xs:pl-6 pr-12 max-lg:pr-10 max-md:pr-8 max-sm:pr-6 max-xs:pr-5 overflow-hidden py-8 max-lg:py-7 max-md:py-6 max-sm:py-5 max-xs:py-4 max-h-280 max-xl:max-h-210 max-lg:max-h-240 max-md:max-h-300 max-sm:max-h-300 max-xs:max-h-240 group-focus-within:border-icon-purple duration-200">
				<textarea
					id="prompt-input"
					className="content-center text-[1.3rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.85rem] placeholder:text-typo-light-gray outline-none grow resize-none shrink! field-sizing-content h-full leading-[1.2]"
					placeholder="Enter a prompt here"
					value={userPrompt}
					disabled={isCompleting === "COMPLETING"}
					onChange={(e) => setUserPrompt(e.target.value)}
					onKeyDown={(e) => {
						if (!e.shiftKey && e.key === "Enter" && isCompleting !== "COMPLETING") {
							e.preventDefault();
							sendPromptProcess();
						}
					}}
				/>
				<div className="flex items-center">
					<button className="*:size-24 max-lg:*:size-20 max-md:*:size-18 max-sm:*:size-16 max-xs:*:size-14 p-4 max-lg:p-[0.35rem] max-md:p-[0.3rem] max-sm:p-[0.25rem] max-xs:p-[0.2rem] cursor-pointer outline-none hover:bg-glass-white rounded-full duration-200 active:brightness-50">
						<AddPhoto />
					</button>
					<hr className="h-20 max-lg:h-18 max-md:h-16 max-sm:h-14 max-xs:h-12 border-1 mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-5 max-xs:mx-4 border-typo-dark-gray" />
					<button className="*:size-24 max-lg:*:size-20 max-md:*:size-18 max-sm:*:size-16 max-xs:*:size-14 p-4 max-lg:p-[0.35rem] max-md:p-[0.3rem] max-sm:p-[0.25rem] max-xs:p-[0.2rem] cursor-pointer outline-none hover:bg-glass-white rounded-full duration-200 active:brightness-50">
						<Microphone />
					</button>
				</div>
			</div>
			<button
				onClick={() => (isCompleting === "COMPLETING" ? pausePromptProcess() : sendPromptProcess())}
				disabled={!userPrompt.trim() && isCompleting !== "COMPLETING"}
				className="bg-btn-dark hover:bg-glass-white rounded-r-[1.2rem] max-lg:rounded-r-[1rem] max-md:rounded-r-[0.8rem] max-sm:rounded-r-[0.6rem] max-xs:rounded-r-[0.5rem] cursor-pointer px-16 max-lg:px-14 max-md:px-10 max-sm:px-8 max-xs:px-6 disabled:text-typo-dark-gray disabled:cursor-not-allowed disabled:hover:bg-btn-dark *:size-24 max-lg:*:size-20 max-md:*:size-18 max-sm:*:size-16 max-xs:*:size-14 duration-200 active:brightness-50 disabled:active:brightness-100 group-focus-within:border-icon-purple text-btn-purple"
			>
				{isCompleting === "COMPLETING" ? <Stop /> : <Send />}
			</button>
		</div>
	);
}
