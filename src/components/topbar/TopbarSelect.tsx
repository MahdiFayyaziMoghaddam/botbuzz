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
				<div className="absolute right-0 top-[calc(100%+0.8rem)] flex flex-col gap-8 py-16 rounded-[1.2rem] border-1 border-glass-stroke bg-glass-white backdrop-blur-[3rem] min-w-[21.2rem] z-50 shadow-[0_4px_24px_0] shadow-background/4">
					{items.length > 0 ? (
						items.map((item, i) => (
							<Link
								key={i}
								href={item.href}
								className="flex items-center gap-8 py-10 px-16 hover:bg-white/10 transition-colors duration-300 *:first:size-25"
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
