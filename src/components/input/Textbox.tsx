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
			<label className={`font-semibold text-input-gray`}>
				{label}
				{required && "*"}
				<div ref={borderElemRef} className={`p-[0.1rem] rounded-[0.8rem] mt-[1.2rem] duration-200`}>
					<div className="flex items-center gap-[0.8rem] bg-input-dark w-full rounded-[0.8rem] px-[1.4rem]">
						<input
							type={isVisible ? "text" : "password"}
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
							className={`placeholder:text-input-light-gray duration-200 py-[1.7rem]  text-typo-light-white caret-btn-purple rounded-[0.8rem] w-full font-normal outline-none`}
							{...props}
						/>
						{error && <Error className="size-[1.8rem] text-error" />}
						{type === "password" && (
							<button
								autoFocus={false}
								tabIndex={-1}
								className="cursor-pointer text-icon-blue"
								onFocus={(e) => e.target.blur()}
								onClick={() => setIsVisible((prev) => !prev)}
							>
								{isVisible ? <VisibilityOff /> : <Visibility />}
							</button>
						)}
					</div>
				</div>
			</label>
			{error && <span className="text-error text-[1.2rem] line-clamp-1 mt-[0.8rem]">{error}</span>}
		</div>
	);
}
