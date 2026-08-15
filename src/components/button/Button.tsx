"use client";
import { ButtonHTMLAttributes, Ref, useCallback } from "react";
import Loader from "../loader/Loader";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "gradient" | "solid" | "outline" | "ghost";
	isLoading?: boolean;
	ref?: Ref<HTMLButtonElement>;
}

export default function Button({
	variant = "gradient",
	isLoading = false,
	onClick,
	className,
	children,
	...props
}: Button) {
	const generateVariant = useCallback(() => {
		let className;
		switch (variant) {
			case "gradient": {
				className = `
					flex items-center justify-center gap-[0.8rem] 
					max-lg:gap-[0.65rem] max-md:gap-[0.5rem] max-sm:gap-[0.4rem] max-xs:gap-[0.3rem] 
					text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] 
					py-[1em] max-lg:py-[0.88em] max-md:py-[0.72em] max-sm:py-[0.65em] max-xs:py-[0.6em] 
					px-[1.75em] max-lg:px-[1.5em] max-md:px-[1.25em] max-sm:px-[1em] max-xs:px-[0.9em] 
					text-btn-black font-semibold 
					[background:var(--gradient-text)] 
					rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] 
					disabled:[background:transparent] disabled:border-glass-stroke disabled:border-1 
					disabled:text-input-light-gray disabled:focus:outline-none 
					disabled:hover:brightness-100 disabled:active:brightness-100 
					${isLoading ? "cursor-not-allowed active:brightness-100 hover:brightness-100 focus:outline-none" : "cursor-pointer active:brightness-80 hover:brightness-125 focus:brightness-125 focus:outline-btn-purple focus:outline-2"}"}`;
				break;
			}
			case "solid": {
				className = `
					flex items-center justify-center gap-[0.8rem] 
					max-lg:gap-[0.65rem] max-md:gap-[0.5rem] max-sm:gap-[0.4rem] max-xs:gap-[0.3rem] 
					text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem] 
					py-[1em] max-lg:py-[0.88em] max-md:py-[0.72em] max-sm:py-[0.65em] max-xs:py-[0.6em] 
					px-[1.75em] max-lg:px-[1.5em] max-md:px-[1.25em] max-sm:px-[1em] max-xs:px-[0.9em] 
					text-btn-black 
					bg-btn-purple
					rounded-[0.8rem] max-lg:rounded-[0.65rem] max-md:rounded-[0.45rem] max-sm:rounded-[0.35rem] max-xs:rounded-[0.25rem] 
					disabled:[background:transparent] disabled:border-glass-stroke disabled:border-1 
					disabled:text-input-light-gray disabled:focus:outline-none 
					disabled:hover:brightness-100 disabled:active:brightness-100 
					${isLoading ? "cursor-not-allowed active:brightness-100 hover:brightness-100 focus:outline-none" : "cursor-pointer active:brightness-80 hover:brightness-125 focus:brightness-125 focus:outline-btn-purple focus:outline-2"}"}`;
				break;
			}
			case "outline": {
				className = `
					cursor-pointer text-sm text-btn-white font-normal 
					rounded-[1rem] max-lg:rounded-[0.8rem] max-md:rounded-[0.6rem] max-sm:rounded-[0.4rem] 
					border-1 border-btn-white 
					py-[0.8rem] max-lg:py-[0.7rem] max-md:py-[0.6rem] max-sm:py-[0.5rem] 
					px-[2.4rem] max-lg:px-[2rem] max-md:px-[1.5rem] max-sm:px-[1rem] 
					disabled:text-input-light-gray disabled:border-glass-stroke`;
				break;
			}
			case "ghost": {
				className = `
					cursor-pointer text-btn-white hover:text-icon-blue focus:text-icon-blue active:text-icon-blue 
					disabled:text-typo-dark-gray focus:outline-none 
					font-semibold bg-inherit
					py-[1.5rem] max-lg:py-[1.2rem] max-md:py-[1rem] max-sm:py-[0.8rem] max-xs:py-[0.6rem]
					px-[5.4rem] max-lg:px-[4rem] max-md:px-[3rem] max-sm:px-[2rem] max-xs:px-[1.5rem]
					text-[1.6rem] max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] max-xs:text-[0.9rem]
					gap-[0.8rem] max-lg:gap-[0.65rem] max-md:gap-[0.5rem] max-sm:gap-[0.4rem] max-xs:gap-[0.3rem]`;
				break;
			}
		}
		return className;
	}, [isLoading, variant]);

	return (
		<button
			className={`select-none disabled:cursor-not-allowed duration-200 ${generateVariant()} ${className}`}
			onClick={(e) => {
				if (!isLoading) {
					onClick?.(e);
				}
				e.currentTarget.blur();
			}}
			{...props}
		>
			{isLoading ? <Loader /> : children}
		</button>
	);
}
