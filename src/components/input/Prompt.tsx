"use client";

import AddPhoto from "../icons/add-photo";
import Microphone from "../icons/microphone";
import Send from "../icons/send";

export default function Prompt() {
	return (
		<div className="flex gap-2 max-w-800 mx-auto w-full">
			<div className="flex items-center rounded-l-[1.2rem] bg-btn-dark grow pr-8 *:first:p-16 *:first:pr-8">
				<input
					type="text"
					className="text-[1.2rem] placeholder:text-typo-light-gray outline-none grow"
					placeholder="Enter a prompt here"
				/>
				<button className="*:size-24 p-8 cursor-pointer outline-none hover:bg-glass-white rounded-full duration-300  active:brightness-50">
					<AddPhoto />
				</button>
				<hr className="h-20 border-1 mx-8 border-typo-dark-gray" />
				<button className="*:size-24 p-8 cursor-pointer outline-none hover:bg-glass-white rounded-full duration-300  active:brightness-50">
					<Microphone />
				</button>
			</div>
			<button className="bg-btn-dark hover:bg-glass-white rounded-r-[1.2rem] cursor-pointer px-16 disabled:text-typo-dark-gray disabled:cursor-not-allowed disabled:hover:bg-btn-dark *:size-24 duration-300  active:brightness-50">
				<Send />
			</button>
		</div>
	);
}
