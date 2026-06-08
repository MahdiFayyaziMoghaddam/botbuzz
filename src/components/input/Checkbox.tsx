import { InputHTMLAttributes } from "react";
import Check from "../icons/check";

interface Checkbox extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	className?: string;
}

export default function Checkbox({ label = "", className = "", ...props }: Checkbox) {
	return (
		<label
			className={`flex items-center w-fit gap-16 max-lg:gap-[1.4rem] max-md:gap-[1.2rem] max-sm:gap-[1rem] max-xs:gap-[0.9rem] cursor-pointer select-none text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] text-typo-medium-gray ${className}`}
		>
			<input type="checkbox" className="sr-only peer" {...props} />
			<div className="flex items-center justify-center size-20 max-lg:size-17 max-md:size-14 max-sm:size-13 max-xs:size-12 rounded-[0.6rem] max-lg:rounded-[0.5rem] max-md:rounded-[0.4rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.3rem] border-1 text-icon-purple overflow-hidden border-icon-blue peer-checked:border-icon-purple peer-checked:*:visible hover:border-typo-light-white duration-200 peer-checked:hover:border-icon-purple peer-focus:border-icon-purple">
				<Check className="[visibility:hidden] size-full bg-typo-light-white" />
			</div>
			{label}
		</label>
	);
}
