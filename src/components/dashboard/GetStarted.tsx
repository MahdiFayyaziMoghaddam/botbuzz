import Shapes10 from "@/components/icons/shapes10";
import Shapes7 from "@/components/icons/shapes7";
import Shapes8 from "@/components/icons/shapes8";
import Shapes9 from "@/components/icons/shapes9";
import Image from "@/components/image/Image";

export default function GetStarted() {
	return (
		<div className="flex flex-col items-center justify-center m-auto max-w-800 grow select-none px-16 max-lg:px-14 max-md:px-12 max-sm:px-10 max-xs:px-8">
			<Image
				src="/images/favicon.png"
				alt="icon"
				className="relative size-48 max-lg:size-40 max-md:size-32 max-sm:size-28 max-xs:size-24 rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem]"
			/>
			<p className="text-[2rem] max-xl:text-[1.8rem] max-lg:text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.2rem] max-xs:text-[1.1rem] leading-[1.6] mt-16 max-lg:mt-14 max-md:mt-12 max-sm:mt-10 max-xs:mt-8 text-center">
				Your Daily AI Assistant
			</p>
			<div className="grid grid-cols-4 max-xl:grid-cols-2 max-xs:grid-cols-1 items-start gap-24 max-xl:gap-20 max-lg:gap-16 max-md:gap-12 max-sm:gap-10 max-xs:gap-8 mt-48 max-xl:mt-28 max-lg:mt-32 max-md:mt-24 max-sm:mt-20 max-xs:mt-16 w-full">
				<button className="bg-gradient-stroke rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-[0.1rem] cursor-pointer outline-none">
					<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-9 max-xs:p-8 *:first:size-24 max-lg:*:first:size-20 max-md:*:first:size-18 max-sm:*:first:size-16 max-xs:*:first:size-14">
						<Shapes8 className="text-icon-cyan" />
						<p className="text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-light-gray mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-32 max-sm:mt-24 max-xs:mt-20 text-left">
							Create a crossword puzzle for me
						</p>
					</div>
				</button>
				<button className="bg-gradient-stroke rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-[0.1rem] cursor-pointer outline-none">
					<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-9 max-xs:p-8 *:first:size-24 max-lg:*:first:size-20 max-md:*:first:size-18 max-sm:*:first:size-16 max-xs:*:first:size-14">
						<Shapes7 className="text-icon-peach" />
						<p className="text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-light-gray mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-32 max-sm:mt-24 max-xs:mt-20 text-left">
							Plan a budget for my vacation
						</p>
					</div>
				</button>
				<button className="bg-gradient-stroke rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-[0.1rem] cursor-pointer outline-none">
					<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-9 max-xs:p-8 *:first:size-24 max-lg:*:first:size-20 max-md:*:first:size-18 max-sm:*:first:size-16 max-xs:*:first:size-14">
						<Shapes9 className="text-icon-green" />
						<p className="text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-light-gray mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-32 max-sm:mt-24 max-xs:mt-20 text-left">
							Ethical implications of AI
						</p>
					</div>
				</button>
				<button className="bg-gradient-stroke rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-[0.1rem] cursor-pointer outline-none">
					<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-9 max-xs:p-8 *:first:size-24 max-lg:*:first:size-20 max-md:*:first:size-18 max-sm:*:first:size-16 max-xs:*:first:size-14">
						<Shapes10 className="text-icon-yellow" />
						<p className="text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-light-gray mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-32 max-sm:mt-24 max-xs:mt-20 text-left">
							Calendar for the whole month
						</p>
					</div>
				</button>
			</div>
		</div>
	);
}
