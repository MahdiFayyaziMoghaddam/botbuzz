"use client";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Error from "../icons/error";
import Visibility from "../icons/visibility";
import VisibilityOff from "../icons/visibility-off";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

export default function Textbox({ label, className, required = false, error, type, onBlur, onFocus, ...props }: Input) {
	const [isVisible, setIsVisible] = useState(type !== "password");
	const borderElemRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		(borderElemRef.current as HTMLDivElement).style.background = error
			? "var(--color-error)"
			: "var(--gradient-stroke)";
	}, [error]);
	return (
		<div className={`select-none ${className}`}>
			<label className="font-semibold text-input-gray max-xl:text-[1.5rem] max-lg:text-[1.4rem] max-md:text-[1.3rem] max-sm:text-[1.2rem] max-xs:text-[1.1rem]">
				{label}
				{required && "*"}
				<div
					ref={borderElemRef}
					className="p-[0.1rem] rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] mt-[1.2rem] max-lg:mt-[1rem] max-md:mt-[0.8rem] max-sm:mt-[0.6rem] max-xs:mt-[0.5rem] duration-200"
				>
					<div className="flex items-center gap-[0.8rem] max-lg:gap-[0.65rem] max-md:gap-[0.5rem] max-sm:gap-[0.4rem] max-xs:gap-[0.3rem] bg-input-dark w-full rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] px-[1.4rem] max-lg:px-[1.2rem] max-md:px-[1rem] max-sm:px-[0.8rem] max-xs:px-[0.6rem]">
						<input
							type={isVisible ? (type === "password" ? "text" : type) : "password"}
							onFocus={(e) => {
								(borderElemRef.current as HTMLDivElement).style.background = error
									? "var(--color-error)"
									: "var(--color-icon-purple)";
								onFocus?.(e);
							}}
							onBlur={(e) => {
								(borderElemRef.current as HTMLDivElement).style.background = error
									? "var(--color-error)"
									: "var(--gradient-stroke)";
								onBlur?.(e);
							}}
							className="placeholder:text-input-light-gray duration-200 py-[1.7rem] max-xl:py-[1.5rem] max-lg:py-[1.3rem] max-md:py-[1rem] max-sm:py-[0.8rem] max-xs:py-[0.7rem] text-typo-light-white caret-btn-purple rounded-[0.8rem] w-full font-normal outline-none max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]"
							required={required}
							{...props}
						/>
						{error && (
							<Error className="size-[1.8rem] max-lg:size-[1.5rem] max-md:size-[1.3rem] max-sm:size-[1.1rem] max-xs:size-[1rem] text-error shrink-0" />
						)}
						{type === "password" && (
							<button
								autoFocus={false}
								tabIndex={-1}
								className="cursor-pointer text-icon-blue shrink-0 *:size-[2.4rem] max-lg:*:size-[2.6rem] max-md:*:size-[2.2rem] max-sm:*:size-[1.9rem] max-xs:*:size-[1.5rem]"
								onFocus={(e) => e.target.blur()}
								onClick={() => setIsVisible((prev) => !prev)}
							>
								{isVisible ? <VisibilityOff /> : <Visibility />}
							</button>
						)}
					</div>
				</div>
			</label>
			{error && (
				<span className="text-error text-[1.2rem] max-lg:text-[1.1rem] max-md:text-[1rem] max-sm:text-[0.9rem] max-xs:text-[0.8rem] line-clamp-1 mt-[0.8rem] max-lg:mt-[0.65rem] max-md:mt-[0.5rem] max-sm:mt-[0.4rem] max-xs:mt-[0.3rem]">
					{error}
				</span>
			)}
		</div>
	);
}
