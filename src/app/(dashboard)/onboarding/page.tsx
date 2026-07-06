"use client";

import Button from "@/components/button/Button";
import ArrowRight from "@/components/icons/arrow-right";
import Glint from "@/components/icons/glint";
import Shapes1 from "@/components/icons/shapes1";
import Shapes2 from "@/components/icons/shapes2";
import Shapes3 from "@/components/icons/shapes3";
import Shapes4 from "@/components/icons/shapes4";
import Shapes5 from "@/components/icons/shapes5";
import Shapes6 from "@/components/icons/shapes6";
import Shuffle from "@/components/icons/shuffle";
import User from "@/components/icons/user";
import Image from "@/components/image/Image";
import Checkbox from "@/components/input/Checkbox";
import Radio from "@/components/input/Radio";
import { useState } from "react";

export default function Onboarding() {
	const [step, setStep] = useState(1);
	const STEPS_LENGTH = 5;
	const questions = [
		"How would you describe your personality?",
		"What are some of your favorite hobbies or activities",
		"When Interacting with chat AI, what type of experience are you looking for?",
		"Do you prefer the AI to initiate conversation and ask questions, or would you rather lead the interaction?",
		"Are there any specific topics or areas of interest you would like the AI to focus on during your interactions?"
	];
	const descriptions = [
		"You can select multiple options from the following list",
		"Tell us about your activities that you do in your leisure time",
		"You can select multiple options from the following list",
		"Select only single option from the following list",
		"You can select multiple options from the following list"
	];
	const components = {
		0: <Step1 />,
		1: <Step2 />,
		2: <Step3 />,
		3: <Step4 />,
		4: <Step5 />
	};

	return (
		<div className="[background-image:url(/images/onboarding.png)] bg-cover bg-center min-h-dvh">
			<div className="fixed inset-0 bg-onboarding/90 py-[2.2vw] px-[4.4vw] backdrop-blur-[2vw] overflow-auto">
				<div className="flex items-center gap-[0.8rem] max-lg:gap-7 max-md:gap-6 max-sm:gap-5 max-xs:gap-4 select-none justify-self-start">
					<Image
						src={"/images/logo.png"}
						alt="icon"
						className="relative w-[3.6rem] max-lg:w-[3rem] max-md:w-[2.4rem] max-sm:w-[1.8rem] aspect-[1/1.09] shrink-0"
					/>
					<p className="text-[2.4rem] max-lg:text-[2rem] max-md:text-[1.6rem] max-sm:text-[1.2rem]">BotBuzz</p>
				</div>
				<div className="flex flex-col items-center mt-88 max-xl:mt-75 max-lg:mt-65 max-md:mt-50 max-sm:mt-44 max-xs:mt-35 mx-auto max-w-900">
					<p className="text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] text-typo-light-gray">
						{step}/5
					</p>
					<h4 className="mt-40 max-xl:mt-30 max-lg:mt-25 max-md:mt-20 max-sm:mt-15 max-xs:mt-10 text-center">
						{questions[step - 1]}
					</h4>
					<p className="mt-8 max-lg:mt-7 max-md:mt-6 max-sm:mt-5 max-xs:mt-4 text-typo-light-gray text-[1.4rem] max-xl:text-[1.3rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] text-center mb-56 max-xl:mb-52 max-lg:mb-48 max-md:mb-40 max-sm:mb-32 max-xs:mb-22">
						{descriptions[step - 1]}
					</p>
					{components[(step - 1) as keyof typeof components]}
					<div className="grid grid-cols-2 items-center gap-24 max-xl:gap-22 max-lg:gap-20 max-md:gap-18 max-sm:gap-16 max-xs:gap-12 mt-80 max-xl:mt-70 max-lg:mt-62 max-md:mt-48 max-sm:mt-40 max-xs:mt-32 max-w-306">
						<Button variant="ghost">Skip</Button>
						<Button variant="solid" onClick={() => setStep((prev) => (prev < STEPS_LENGTH ? prev + 1 : prev))}>
							{step === STEPS_LENGTH ? "Finish" : "Next"}
							{step !== STEPS_LENGTH && <ArrowRight className="size-[1.5em]" />}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Step1() {
	const items = [
		{ label: "Friendly", icon: <Shapes1 /> },
		{ label: "Introvert", icon: <Shapes2 /> },
		{ label: "Extrovert", icon: <Shapes3 /> },
		{ label: "Analytical", icon: <Shapes4 /> },
		{ label: "Creative", icon: <Shapes5 /> },
		{ label: "Others", icon: <Shapes6 /> }
	];
	return (
		<div className="grid grid-cols-3 max-md:grid-cols-2 gap-24 max-xl:gap-22 max-lg:gap-20 max-md:gap-18 max-sm:gap-16 max-xs:gap-12 items-start max-w-648 w-full">
			{items.map((item, i) => (
				<label key={i} className="bg-gradient-stroke rounded-[0.8rem] p-[0.1rem] cursor-pointer">
					<div className="bg-onboarding hover:bg-btn-dark duration-300 rounded-[0.8rem] p-16 max-lg:p-15 max-md:p-14 max-sm:p-12 max-xs:p-10 *:first:size-38 max-xl:*:first:size-36 max-lg:*:first:size-33 max-md:*:first:size-30 max-sm:*:first:size-27 max-xs:*:first:size-24">
						{item.icon}
						<Checkbox
							label={item.label}
							className="text-typo-light-white! mt-56 max-xl:mt-48 max-lg:mt-40 max-md:mt-34 max-xs:mt-30"
						/>
					</div>
				</label>
			))}
		</div>
	);
}
function Step2() {
	return (
		<>
			<input
				className="outline-none text-[3.6rem] caret-btn-purple placeholder:font-semibold placeholder:text-typo-medium-gray w-788 resize-none text-center shrink-0"
				placeholder="Type here"
				autoFocus
			/>
		</>
	);
}
function Step3() {
	const items = [
		"Casual and Friendly",
		"Professional and formal",
		"Informative and Detailed",
		"Quick and to the point",
		"Creative and Engaging"
	];
	return (
		<div className="flex flex-col gap-16 max-w-422 max-md:max-w-320 max-sm:max-w-260 max-xs:max-w-200 w-full">
			{items.map((item, i) => (
				<label
					key={i}
					className="bg-gradient-stroke p-[0.1rem] rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] select-none cursor-pointer"
				>
					<div className="flex items-center justify-between rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] max-xs:rounded-[0.4rem] bg-onboarding hover:bg-btn-dark duration-300 py-22 max-lg:py-18 max-md:py-14 max-sm:py-10 max-xs:py-8 px-16 max-lg:px-14 max-md:px-12 max-sm:px-9 max-xs:px-6 w-full">
						<p className="text-[1.6rem] max-xl:text-[1.5] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.8rem]">
							{item}
						</p>
						<Checkbox />
					</div>
				</label>
			))}
		</div>
	);
}
function Step4() {
	const items = [
		{
			title: "AI Lead",
			icon: <Glint />,
			description: "AI ask questions or give prompts, and I'll respond accordingly."
		},
		{
			title: "You Lead",
			icon: <User />,
			description: "I initiate conversation, ask questions, and provide topics for discussion."
		},
		{
			title: "Mixed",
			icon: <Shuffle />,
			description: "A blend of both, where either of us can initiate and steer the conversation."
		}
	];
	return (
		<div className="grid grid-cols-2 max-md:grid-cols-1 gap-24 max-md:gap-20 max-sm:gap-16 max-xs:gap-12 w-full max-w-850 max-lg:max-w-700 max-md:max-w-450 max-sm:max-w-350 max-xs:max-w-250">
			{items.map((item, i) => (
				<label key={i} className="bg-gradient-stroke p-[0.1rem] rounded-[0.8rem] cursor-pointer select-none">
					<div className="grid grid-cols-[2.4rem_1fr_2rem] max-sm:grid-cols-[2rem_1fr_1.8rem] max-xs:grid-cols-[1.8rem_1fr_1.6rem] items-start gap-x-16 max-lg:gap-x-14 max-md:gap-x-12 max-sm:gap-x-10 max-xs:gap-x-8 gap-y-8 max-md:gap-y-6 max-sm:gap-y-4 *:first:size-24 max-sm:*:first:size-20 max-xs:*:first:size-18 rounded-[0.8rem] bg-onboarding hover:bg-btn-dark duration-300 p-16 max-lg:p-14 max-md:p-12 max-sm:p-10 max-xs:p-8">
						{item.icon}
						<p className="text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.3rem] max-sm:text-[1.1rem] max-xs:text-[1rem]">
							{item.title}
						</p>
						<Radio name="ai-interaction-option" />
						<p className="col-start-2 col-end-3 text-typo-medium-gray text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem]">
							{item.description}
						</p>
					</div>
				</label>
			))}
		</div>
	);
}
function Step5() {
	const items = [
		{ title: "Science and Technology", img: "/images/science.png" },
		{ title: "Entertainment and Pop Culture", img: "/images/culture.png" },
		{ title: "Travel and Adventure", img: "/images/adventure.png" },
		{ title: "Education and Learning", img: "/images/learning.png" },
		{ title: "Art and Literature", img: "/images/art.png" }
	];
	return (
		<div className="grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 max-xs:grid-cols-1 gap-24 max-lg:gap-20 max-md:gap-16 max-sm:gap-12 max-xs:gap-8 w-full max-w-900 max-lg:max-w-800 max-md:max-w-650 max-sm:max-w-500 max-xs:max-w-210">
			{items.map((item, i) => (
				<label
					key={i}
					className="cursor-pointer bg-gradient-stroke has-checked:[background:var(--color-icon-purple)] p-[0.1rem] rounded-[1rem] max-lg:rounded-[0.8rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] duration-200 transition-colors select-none"
				>
					<input type="checkbox" className="sr-only peer" />
					<div className="py-24 max-lg:py-20 max-md:py-16 max-sm:py-14 max-xs:py-12 px-16 max-lg:px-14 max-md:px-12 max-sm:px-10 max-xs:px-8 rounded-[1rem] max-lg:rounded-[0.8rem] max-md:rounded-[0.7rem] max-sm:rounded-[0.6rem] bg-onboarding hover:bg-btn-dark duration-200 peer-checked:text-icon-purple">
						<p className="text-[1.4rem] max-lg:text-[1.3rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] line-clamp-1">
							{item.title}
						</p>
						<Image
							src={item.img}
							alt={item.title}
							className="relative mt-16 max-lg:mt-14 max-md:mt-12 max-sm:mt-10 max-xs:mt-8 rounded-[0.8rem] max-lg:rounded-[0.7rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.5rem] h-90 max-lg:h-80 max-md:h-70 max-sm:h-60 max-xs:h-50 w-full object-cover"
						/>
					</div>
				</label>
			))}
		</div>
	);
}
