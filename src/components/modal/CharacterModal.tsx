import Button from "../button/Button";
import Image from "../image/Image";
import Modal from "./Modal";
import { ModalProps } from "@/types/modal";

interface CharacterModal extends ModalProps {
	imgSrc: string;
	title?: string;
	description?: string;
	skills?: string[];
}

export default function CharacterModal(props: CharacterModal) {
	return (
		<Modal onClose={props.onClose} open={props.open}>
			<div className="flex gap-8 max-lg:gap-6 max-md:gap-5 max-sm:gap-4 max-xs:gap-3 outline-none overflow-hidden max-md:flex-col max-md:max-h-[85vh]">
				<div className="flex flex-col items-center rounded-l-[1.6rem] max-lg:rounded-l-[1.2rem] max-md:rounded-[1.2rem] max-md:rounded-b-none bg-glass-white border-1 border-glass-stroke backdrop-blur-[1.2rem] max-lg:backdrop-blur-[0.8rem] max-md:backdrop-blur-[0.6rem] p-24 max-xl:p-20 max-lg:p-16 max-md:p-14 max-sm:p-12 max-xs:p-10 overflow-y-auto shrink-0">
					<Image
						src={props.imgSrc}
						alt={props.title || ""}
						className="relative size-280 max-xl:size-240 max-lg:size-200 max-md:size-160 max-sm:size-140 max-xs:size-120 rounded-full shrink-0"
					/>
					<h4 className="mt-24 max-xl:mt-20 max-lg:mt-16 max-md:mt-14 max-sm:mt-12 max-xs:mt-10 text-center">
						{props.title}
					</h4>
					<p className="mt-40 max-xl:mt-34 max-lg:mt-28 max-md:mt-20 max-sm:mt-16 max-xs:mt-12 max-w-310 max-xl:max-w-280 max-lg:max-w-250 max-md:max-w-full text-center text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem]">
						{props.description}
					</p>
					<Button
						variant="solid"
						className="mt-50 max-xl:mt-40 max-lg:mt-30 max-md:mt-20 max-sm:mt-16 max-xs:mt-12 w-full font-semibold! max-lg:text-[1.2rem] max-md:text-[1rem] max-sm:text-[0.9rem]"
					>
						Chat Now
					</Button>
				</div>
				<div className="rounded-r-[1.6rem] max-lg:rounded-r-[1.2rem] max-md:rounded-[1.2rem] max-md:rounded-t-none bg-glass-white border-1 border-glass-stroke backdrop-blur-[1.2rem] max-lg:backdrop-blur-[0.8rem] max-md:backdrop-blur-[0.6rem] py-58 max-xl:py-48 max-lg:py-38 max-md:py-24 max-sm:py-20 max-xs:py-16 px-24 max-xl:px-20 max-lg:px-16 max-md:px-14 max-sm:px-12 max-xs:px-10 overflow-y-auto">
					<div className="flex items-start gap-18 max-xl:gap-16 max-lg:gap-14 max-md:gap-12 max-sm:gap-10 max-xs:gap-8">
						<p className="font-semibold w-64 max-lg:w-56 max-md:w-48 max-sm:w-40 max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] shrink-0">
							Role
						</p>
						<span className="max-w-630 max-xl:max-w-550 max-lg:max-w-450 max-md:max-w-full text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-medium-gray">
							{props.description?.split(",")[0]}
						</span>
					</div>
					<div className="flex items-start gap-18 max-xl:gap-16 max-lg:gap-14 max-md:gap-12 max-sm:gap-10 max-xs:gap-8 mt-48 max-xl:mt-40 max-lg:mt-32 max-md:mt-24 max-sm:mt-20 max-xs:mt-16">
						<p className="font-semibold w-64 max-lg:w-56 max-md:w-48 max-sm:w-40 max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] shrink-0">
							Purpose
						</p>
						<span className="max-w-630 max-xl:max-w-550 max-lg:max-w-450 max-md:max-w-full text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-medium-gray">
							{props.description?.split(",").slice(1).join(",")}
						</span>
					</div>
					<div className="mt-48 max-xl:mt-40 max-lg:mt-32 max-md:mt-24 max-sm:mt-20 max-xs:mt-16 max-w-740 max-xl:max-w-650 max-lg:max-w-550 max-md:max-w-full">
						<h5>Character Skills</h5>
						<div className="flex flex-wrap items-start gap-16 max-xl:gap-14 max-lg:gap-12 max-md:gap-10 max-sm:gap-8 max-xs:gap-6 mt-16 max-xl:mt-14 max-lg:mt-12 max-md:mt-10 max-sm:mt-8 max-xs:mt-6">
							{props.skills?.map((skill) => (
								<p
									key={skill}
									className="border-1 border-typo-dark-gray bg-onboarding text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-8 max-xs:p-7 text-nowrap"
								>
									{skill}
								</p>
							))}
						</div>
					</div>
					<div className="mt-48 max-xl:mt-40 max-lg:mt-32 max-md:mt-24 max-sm:mt-20 max-xs:mt-16 max-w-740 max-xl:max-w-650 max-lg:max-w-550 max-md:max-w-full">
						<h5>Interaction Style</h5>
						<div className="flex flex-wrap items-start gap-16 max-xl:gap-14 max-lg:gap-12 max-md:gap-10 max-sm:gap-8 max-xs:gap-6 mt-16 max-xl:mt-14 max-lg:mt-12 max-md:mt-10 max-sm:mt-8 max-xs:mt-6">
							<p className="border-1 border-typo-dark-gray bg-onboarding text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-8 max-xs:p-7 text-nowrap">
								Reflective and Deep
							</p>
							<p className="border-1 border-typo-dark-gray bg-onboarding text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-8 max-xs:p-7 text-nowrap">
								Adaptable and Personalized
							</p>
							<p className="border-1 border-typo-dark-gray bg-onboarding text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.2rem] max-md:text-[1.1rem] max-sm:text-[1rem] max-xs:text-[0.9rem] rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.5rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem] p-16 max-xl:p-14 max-lg:p-12 max-md:p-10 max-sm:p-8 max-xs:p-7 text-nowrap">
								Interactive and Engaging
							</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}
