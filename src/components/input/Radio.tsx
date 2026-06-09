import { InputHTMLAttributes } from "react";

export default function Radio({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<label className={`inline-block cursor-pointer ${className}`}>
			<input type="radio" className="sr-only peer" {...props} />
			<div className="flex items-center justify-center size-20 max-lg:size-18 max-md:size-16 max-sm:size-14 max-xs:size-12 rounded-full border-1 text-icon-purple overflow-hidden border-icon-blue peer-checked:border-icon-purple peer-checked:*:visible peer-checked:bg-typo-light-white hover:border-typo-light-white duration-200 peer-checked:hover:border-icon-purple peer-focus:border-icon-purple">
				<div className="[visibility:hidden] bg-icon-purple size-[0.8rem] max-lg:size-[0.7rem] max-md:size-[0.65rem] max-sm:size-[0.55rem] max-xs:size-[0.45rem] rounded-full" />
			</div>
		</label>
	);
}
