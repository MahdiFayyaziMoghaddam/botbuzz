"use client";
import { useState } from "react";
import Image from "../image/Image";
import CharacterModal from "../modal/CharacterModal";

interface CharacterCard {
	id: string;
	imgSrc: string;
	title: string;
	description: string;
	skills: string[];
}

export default function CharacterCard(props: CharacterCard) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<CharacterModal {...props} open={isOpenModal} onClose={() => setIsOpenModal(false)} />
			<button
				className="cursor-pointer outline-none bg-gradient-stroke rounded-[1.2rem] max-xl:rounded-[1rem] max-lg:rounded-[0.85rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] max-xs:rounded-[0.5rem] p-1"
				onClick={() => setIsOpenModal(true)}
			>
				<div className="flex flex-col items-center bg-onboarding hover:bg-btn-dark gap-16 max-xl:gap-14 max-lg:gap-12 max-md:gap-10 max-sm:gap-8 max-xs:gap-7 rounded-[1.2rem] max-xl:rounded-[1rem] max-lg:rounded-[0.85rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] max-xs:rounded-[0.5rem] p-24 max-xl:p-20 max-lg:p-16 max-md:p-14 max-sm:p-12 max-xs:p-10 duration-500">
					<Image
						src={props.imgSrc}
						alt={props.title}
						className="relative rounded-full size-80 max-xl:size-70 max-lg:size-60 max-md:size-50 max-sm:size-42 max-xs:size-36"
					/>
					<p className="text-[2rem] max-xl:text-[1.8rem] max-lg:text-[1.6rem] max-md:text-[1.4rem] max-sm:text-[1.3rem] max-xs:text-[1.2rem] font-semibold select-none text-center">
						{props.title}
					</p>
					<p className="text-typo-medium-gray text-center text-[1.4rem] max-xl:text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.85rem] max-w-180 max-xl:max-w-160 max-lg:max-w-140 max-md:max-w-120 max-sm:max-w-100 max-xs:max-w-80 line-clamp-3">
						{props.description}
					</p>
					<div className="flex flex-wrap justify-center items-start gap-8 max-xl:gap-7 max-lg:gap-6 max-md:gap-5 max-sm:gap-4 max-xs:gap-3">
						{props.skills.map((skill) => (
							<p
								key={skill}
								className="border-1 border-typo-dark-gray rounded-[0.6rem] max-xl:rounded-[0.55rem] max-lg:rounded-[0.5rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.4rem] max-xs:rounded-[0.35rem] text-[1.2rem] max-xl:text-[1.1rem] max-lg:text-[1rem] max-md:text-[0.9rem] max-sm:text-[0.85rem] max-xs:text-[0.8rem] py-5 max-xl:py-4.5 max-lg:py-4 max-md:py-3.5 max-sm:py-3 max-xs:py-2.5 px-8 max-xl:px-7 max-lg:px-6 max-md:px-5 max-sm:px-4.5 max-xs:px-4 text-nowrap"
							>
								{skill}
							</p>
						))}
					</div>
				</div>
			</button>
		</>
	);
}
