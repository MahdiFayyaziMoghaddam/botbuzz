import Shapes10 from "@/components/icons/shapes10";
import Shapes7 from "@/components/icons/shapes7";
import Shapes8 from "@/components/icons/shapes8";
import Shapes9 from "@/components/icons/shapes9";
import Image from "@/components/image/Image";
import Prompt from "@/components/input/Prompt";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";

export default function Chat() {
	return (
		<div className="flex flex-col *:shrink-0">
			<div className="flex flex-col items-center justify-center m-auto max-w-800 grow select-none">
				<Image src="/images/favicon.png" alt="icon" className="relative size-48 rounded-[0.8rem]" />
				<p className="text-[2rem] leading-[1.6] mt-16">Your Daily AI Assistant</p>
				<div className="grid grid-cols-4 gap-24 mt-48 ">
					<button className="bg-gradient-stroke rounded-[0.8rem] p-[0.1rem] cursor-pointer outline-none">
						<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] p-16 max-lg:p-15 max-md:p-14 max-sm:p-12 max-xs:p-10 *:first:size-24">
							<Shapes8 className="text-icon-cyan" />
							<p className="text-[1.4rem] text-typo-light-gray mt-56 text-left">Create a crossword puzzle for me</p>
						</div>
					</button>
					<button className="bg-gradient-stroke rounded-[0.8rem] p-[0.1rem] cursor-pointer outline-none">
						<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] p-16 max-lg:p-15 max-md:p-14 max-sm:p-12 max-xs:p-10 *:first:size-24">
							<Shapes7 className="text-icon-peach" />
							<p className="text-[1.4rem] text-typo-light-gray mt-56 text-left">Plan a budget for my vacation</p>
						</div>
					</button>
					<button className="bg-gradient-stroke rounded-[0.8rem] p-[0.1rem] cursor-pointer outline-none">
						<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] p-16 max-lg:p-15 max-md:p-14 max-sm:p-12 max-xs:p-10 *:first:size-24">
							<Shapes9 className="text-icon-green" />
							<p className="text-[1.4rem] text-typo-light-gray mt-56 text-left">Ethical implications of AI</p>
						</div>
					</button>
					<button className="bg-gradient-stroke rounded-[0.8rem] p-[0.1rem] cursor-pointer outline-none">
						<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] p-16 max-lg:p-15 max-md:p-14 max-sm:p-12 max-xs:p-10 *:first:size-24">
							<Shapes10 className="text-icon-yellow" />
							<p className="text-[1.4rem] text-typo-light-gray mt-56 text-left">Calendar for the whole month</p>
						</div>
					</button>
				</div>
			</div>
			<Prompt />
			<p className="text-[1.2rem] text-center my-11 text-typo-medium-gray select-none">
				Free Research Preview. BotBuzz may produce inaccurate information about people, places, or facts.{" "}
				<span className="text-btn-purple">BotBuzz Version 1.0</span>
			</p>
		</div>
	);
}
