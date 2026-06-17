import Copy from "@/components/icons/copy";
import LikeOutline from "@/components/icons/like-outline";
import DislikeOutline from "@/components/icons/dislike-outline";
import Refresh from "@/components/icons/refresh";
import Image from "../image/Image";

interface ChatBox {
	role?: "user" | "model";
	title?: string;
	imgSrc?: string;
	msg?: string;
	date?: string;
}

export default function ChatBox({ role = "user", date, imgSrc = "/images/user.png", msg, title }: ChatBox) {
	return (
		<>
			{role === "model" ? (
				<div className="w-full">
					<div className="flex items-center gap-8 max-sm:gap-6 max-xs:gap-5 mb-16 max-lg:mb-14 max-md:mb-12 max-sm:mb-10 max-xs:mb-8">
						<Image
							src={imgSrc}
							alt="model"
							className="relative size-32 max-lg:size-28 max-md:size-24 max-sm:size-20 max-xs:size-18 rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] flex items-center justify-center shrink-0"
						/>
						<span className="font-semibold max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.8rem] text-btn-purple select-none">
							{title}
						</span>
						<span className="text-[0.9rem] max-lg:text-[0.8rem] max-md:text-[0.7rem] max-sm:text-[0.6rem] max-xs:text-[0.5rem] text-typo-light-gray select-none">
							{date}
						</span>
					</div>
					<div className="bg-glass-white text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.8rem] border border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1.1rem] max-md:rounded-[1rem] max-sm:rounded-[0.9rem] max-xs:rounded-[0.8rem] p-16 max-lg:p-14 max-md:p-12 max-sm:p-10 max-xs:p-8">
						{msg}
						<div className="flex items-center gap-12 max-lg:gap-11 max-md:gap-10 max-sm:gap-9 max-xs:gap-8 mt-16 max-lg:mt-14 max-md:mt-12 max-sm:mt-10 max-xs:mt-8">
							<button className="*:size-12 max-lg:*:size-11 max-md:*:size-10 max-sm:*:size-9 max-xs:*:size-9 text-typo-medium-gray hover:text-icon-purple duration-300 cursor-pointer outline-none">
								<LikeOutline />
							</button>
							<hr className="h-9 max-lg:h-8 max-md:h-7 max-sm:h-6 max-xs:h-6 border-glass-stroke" />
							<button className="*:size-12 max-lg:*:size-11 max-md:*:size-10 max-sm:*:size-9 max-xs:*:size-9 text-typo-medium-gray hover:text-error duration-300 cursor-pointer outline-none">
								<DislikeOutline />
							</button>
							<hr className="h-9 max-lg:h-8 max-md:h-7 max-sm:h-6 max-xs:h-6 border-glass-stroke" />
							<button className="*:size-12 max-lg:*:size-11 max-md:*:size-10 max-sm:*:size-9 max-xs:*:size-9 text-typo-medium-gray hover:text-typo-light-white duration-300 cursor-pointer outline-none">
								<Copy />
							</button>
							<hr className="h-9 max-lg:h-8 max-md:h-7 max-sm:h-6 max-xs:h-6 border-glass-stroke" />
							<button className="*:size-12 max-lg:*:size-11 max-md:*:size-10 max-sm:*:size-9 max-xs:*:size-9 text-typo-medium-gray hover:text-typo-light-white duration-300 cursor-pointer outline-none">
								<Refresh />
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-end ml-auto">
					<div className="flex items-center gap-8 max-sm:gap-6 max-xs:gap-5 mb-16 max-lg:mb-14 max-md:mb-12 max-sm:mb-10 max-xs:mb-8">
						<span className="text-[0.9rem] max-lg:text-[0.8rem] max-md:text-[0.7rem] max-sm:text-[0.6rem] max-xs:text-[0.5rem] text-typo-light-gray select-none">
							{date}
						</span>
						<Image
							src={imgSrc}
							alt="user"
							className="relative size-32 max-lg:size-28 max-md:size-24 max-sm:size-20 max-xs:size-18 rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] shrink-0"
						/>
					</div>
					<div className="bg-onboarding border border-glass-stroke rounded-[1.2rem] max-lg:rounded-[1.1rem] max-md:rounded-[1rem] max-sm:rounded-[0.9rem] max-xs:rounded-[0.8rem] p-16 max-lg:p-14 max-md:p-12 max-sm:p-10 max-xs:p-8 text-typo-light-white text-[1.4rem] max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.8rem]">
						{msg}
					</div>
				</div>
			)}
		</>
	);
}
