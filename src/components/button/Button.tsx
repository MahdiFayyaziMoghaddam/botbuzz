import { ButtonHTMLAttributes, useCallback } from "react";
import Loader from "../loader/Loader";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	variants?: "primary" | "outline" | "ghost";
	isLoading?: boolean;
}

export default function Button({
	variants = "primary",
	isLoading = false,
	onClick,
	className,
	children,
	...props
}: Button) {
	const generateVariant = useCallback(() => {
		let className;
		switch (variants) {
			case "primary": {
				className = `flex items-center gap-[0.8rem] text-[1.6rem] py-[1em] px-[1.75em] max-lg:px-[1.3em] max-lg:py-[0.4em] text-btn-black font-semibold [background:var(--gradient-text)] rounded-lg disabled:[background:transparent] disabled:border-glass-stroke disabled:border-1 disabled:text-input-light-gray disabled:focus:outline-none disabled:hover:brightness-100 disabled:active:brightness-100 ${isLoading ? "cursor-not-allowed active:brightness-100 hover:brightness-100 focus:outline-none" : "cursor-pointer active:brightness-80 hover:brightness-125 focus:brightness-125 focus:outline-btn-purple focus:outline-2"}`;
				break;
			}
			case "outline": {
				className =
					"cursor-pointer text-sm text-btn-white font-normal rounded-[1rem] border-1 border-btn-white py-[0.8rem] px-[2.4rem] disabled:text-input-light-gray disabled:border-glass-stroke";
				break;
			}
			case "ghost": {
				className =
					"cursor-pointer text-btn-white hover:text-icon-blue focus:text-icon-blue active:text-icon-blue disabled:text-typo-dark-gray focus:outline-none py-[1.5rem] px-[5.4rem] font-semibold bg-inherit";
				break;
			}
		}
		return className;
	}, [isLoading, variants]);

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
