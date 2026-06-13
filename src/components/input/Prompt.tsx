"use client";

import AddPhoto from "../icons/add-photo";
import Microphone from "../icons/microphone";
import Send from "../icons/send";

export default function Prompt() {
	return (
		<div className="flex gap-2 max-w-800 mx-auto w-full">
			<div className="flex items-start gap-x-8 rounded-l-[1.2rem] bg-btn-dark grow pl-16 pr-12 overflow-hidden py-8 max-h-280">
				<textarea
					id="prompt-input"
					className="content-center text-[1.2rem] placeholder:text-typo-light-gray outline-none grow resize-none shrink! overflow-auto field-sizing-content h-full"
					placeholder="Enter a prompt here"
				/>
				<div className="flex items-center">
					<button className="*:size-24 p-4 cursor-pointer outline-none hover:bg-glass-white rounded-full duration-300  active:brightness-50">
						<AddPhoto />
					</button>
					<hr className="h-20 border-1 mx-10 border-typo-dark-gray" />
					<button className="*:size-24 p-4 cursor-pointer outline-none hover:bg-glass-white rounded-full duration-300  active:brightness-50">
						<Microphone />
					</button>
				</div>
			</div>
			<button className="bg-btn-dark hover:bg-glass-white rounded-r-[1.2rem] cursor-pointer px-16 disabled:text-typo-dark-gray disabled:cursor-not-allowed disabled:hover:bg-btn-dark *:size-24 duration-300  active:brightness-50">
				<Send />
			</button>
		</div>
	);
}
