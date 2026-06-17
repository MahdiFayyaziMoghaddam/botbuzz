import Prompt from "../input/Prompt";

export default function ChatFooter() {
	return (
		<div className="mx-194 max-xl:mx-130 max-lg:mx-80 max-md:mx-60 max-sm:mx-30 max-xs:mx-20 shrink-0">
			<Prompt />
			<p className="text-[1.2rem] max-xl:text-[1.1rem] max-lg:text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.8rem] max-xs:text-[0.75rem] text-center my-11 max-lg:my-9 max-md:my-7 max-sm:my-5 max-xs:my-4 text-typo-medium-gray select-none px-16 max-sm:px-10 max-xs:px-6">
				Free Research Preview. BotBuzz may produce inaccurate information about people, places, or facts.{" "}
				<span className="text-btn-purple text-nowrap">BotBuzz Version 1.0</span>
			</p>
		</div>
	);
}
