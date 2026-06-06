import { InputHTMLAttributes } from "react";

export default function Switch({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<label className={`relative cursor-pointer overflow-hidden inline-block ${className}`}>
			<input type="checkbox" className="peer sr-only" {...props} />
			<div
				className={`w-[5rem] p-[0.3rem] rounded-[2.4rem] size-full bg-icon-blue peer-checked:bg-icon-purple peer-checked:*:translate-x-[2.4rem] peer-focus:border-btn-purple border-1 border-icon-blue duration-200 peer-checked:border-icon-purple peer-disabled:bg-typo-dark-gray peer-disabled:border-typo-dark-gray`}
			>
				<div className="size-[1.8rem] bg-icon-white rounded-full duration-200"></div>
			</div>
		</label>
	);
}
