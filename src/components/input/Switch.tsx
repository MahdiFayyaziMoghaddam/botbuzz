import { InputHTMLAttributes } from "react";

export default function Switch({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<label className={`relative cursor-pointer overflow-hidden inline-block ${className}`}>
			<input type="checkbox" className="peer sr-only" {...props} />
			<div className="w-[5rem] max-xl:w-[4.6rem] max-lg:w-[4.2rem] max-md:w-[3.8rem] max-sm:w-[3.4rem] max-xs:w-[3rem] p-[0.3rem] max-xl:p-[0.28rem] max-lg:p-[0.25rem] max-md:p-[0.22rem] max-sm:p-[0.2rem] max-xs:p-[0.18rem] rounded-[2.4rem] max-xl:rounded-[2.2rem] max-lg:rounded-[2rem] max-md:rounded-[1.8rem] max-sm:rounded-[1.6rem] max-xs:rounded-[1.4rem] size-full bg-icon-blue peer-checked:bg-icon-purple peer-checked:*:translate-x-[2.4rem] max-xl:peer-checked:*:translate-x-[2.2rem] max-lg:peer-checked:*:translate-x-[2rem] max-md:peer-checked:*:translate-x-[1.8rem] max-sm:peer-checked:*:translate-x-[1.6rem] max-xs:peer-checked:*:translate-x-[1.4rem] peer-focus:border-btn-purple border-1 border-icon-blue duration-200 peer-checked:border-icon-purple peer-disabled:opacity-50 peer-disabled:bg-typo-dark-gray peer-disabled:border-typo-dark-gray">
				<div className="size-[1.8rem] max-xl:size-[1.65rem] max-lg:size-[1.5rem] max-md:size-[1.35rem] max-sm:size-[1.2rem] max-xs:size-[1.1rem] bg-icon-white rounded-full duration-200"></div>
			</div>
		</label>
	);
}
