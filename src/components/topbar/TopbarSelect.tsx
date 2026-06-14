"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "../link/Link";
import "../accordion/Accordion.css";

interface TopbarSelectProps {
	items?: {
		label: string;
		href: string;
		icon: React.ReactNode;
	}[];
	children?: ReactNode;
}

export default function TopbarSelect({ items = [], children }: TopbarSelectProps) {
	const detailsRef = useRef<HTMLDetailsElement>(null);
	const { 1: setIsOpen } = useState(false);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (detailsRef.current && !detailsRef.current.contains(e.target as Node)) {
				detailsRef.current.open = false;
				setIsOpen(false);
			}
		};

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && detailsRef.current) {
				detailsRef.current.open = false;
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("click", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [setIsOpen]);

	const handleToggle = () => {
		if (detailsRef.current) {
			setIsOpen(detailsRef.current.open);
		}
	};

	return (
		<details ref={detailsRef} className="relative group" onToggle={handleToggle}>
			<summary
				className="list-none [&::-webkit-details-marker]:hidden cursor-pointer select-none outline-none"
				onFocus={(e) => e.target.blur()}
			>
				{children}
			</summary>
			{!!items.length && (
				<div className="absolute right-0 top-[calc(100%+0.8rem)] max-lg:top-[calc(100%+0.6rem)] max-md:top-[calc(100%+0.4rem)] max-sm:top-[calc(100%+0.3rem)] flex flex-col gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-5 py-16 max-xl:py-14 max-lg:py-12 max-md:py-10 max-sm:py-8 rounded-[1.2rem] max-lg:rounded-[1rem] max-md:rounded-[0.8rem] max-sm:rounded-[0.6rem] border-1 border-glass-stroke bg-glass-white backdrop-blur-[3rem] max-lg:backdrop-blur-[2rem] max-md:backdrop-blur-[1.5rem] min-w-[21.2rem] max-lg:min-w-[18rem] max-md:min-w-[15rem] max-sm:min-w-[13rem] z-50 shadow-[0_4px_24px_0] max-lg:shadow-[0_3px_18px_0] max-md:shadow-[0_2px_12px_0] shadow-background/4">
					{items.length > 0 ? (
						items.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="flex items-center gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-5 py-10 max-lg:py-9 max-md:py-8 max-sm:py-7 px-16 max-lg:px-14 max-md:px-12 max-sm:px-10 hover:bg-white/10 transition-colors duration-300 *:first:size-25 max-lg:*:first:size-22 max-md:*:first:size-20 max-sm:*:first:size-18 max-lg:text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem]"
							>
								{item.icon}
								{item.label}
							</Link>
						))
					) : (
						<></>
					)}
				</div>
			)}
		</details>
	);
}
