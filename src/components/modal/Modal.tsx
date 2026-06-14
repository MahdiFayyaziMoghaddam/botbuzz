"use client";
import { ModalProps } from "@/types/modal";
import { useEffect, useRef, useCallback, useState } from "react";

interface Modal extends ModalProps {
	children?: React.ReactNode;
}

const FOCUSABLE =
	'button:not([disabled]), [href]:not([tabindex="-1"]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({ open = false, children, onClose }: Modal) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const previousFocus = useRef<HTMLElement | null>(null);
	const scrollY = useRef(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const close = useCallback(() => onClose?.(), [onClose]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open) {
			previousFocus.current = document.activeElement as HTMLElement;
			scrollY.current = window.scrollY;

			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
			document.body.style.top = `-${scrollY.current}px`;
			document.body.style.width = "100%";

			dialog.showModal();

			requestAnimationFrame(() => {
				setIsAnimating(true);
			});

			dialog.querySelector<HTMLElement>(FOCUSABLE)?.focus();

			const trap = (e: KeyboardEvent) => {
				if (e.key !== "Tab") return;
				const items = dialog.querySelectorAll<HTMLElement>(FOCUSABLE);
				if (!items.length) return;

				const first = items[0];
				const last = items[items.length - 1];

				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			};

			const handleEscape = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					e.preventDefault();
					close();
				}
			};

			dialog.addEventListener("keydown", trap);
			window.addEventListener("keydown", handleEscape, true);
			return () => {
				dialog.removeEventListener("keydown", trap);
				window.removeEventListener("keydown", handleEscape, true);
			};
		} else {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setIsAnimating(false);

			const dialogElement = dialog;
			const handleTransitionEnd = () => {
				dialogElement.removeEventListener("transitionend", handleTransitionEnd);

				document.body.style.overflow = "";
				document.body.style.position = "";
				document.body.style.top = "";
				document.body.style.width = "";

				window.scrollTo(0, scrollY.current);

				dialogElement.close();
				previousFocus.current?.focus();
			};

			dialogElement.addEventListener("transitionend", handleTransitionEnd);

			return () => {
				dialogElement.removeEventListener("transitionend", handleTransitionEnd);
			};
		}
	}, [open, close]);

	return (
		<dialog
			ref={dialogRef}
			onClick={(e) => e.target === dialogRef.current && close()}
			className={`backdrop:bg-black/50 backdrop:backdrop-blur-[3px] 
				bg-transparent p-0 m-auto
				flex items-center justify-center
				max-w-[calc(100%-2.4rem)] max-h-[85vh]
				rounded-[1.2rem] overflow-visible
				transition-[opacity,transform] duration-300 ease-out
				${isAnimating ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
		>
			<div
				className={`transition-[opacity,transform] duration-300 ease-out delay-75 ${
					isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
				}`}
			>
				{children}
			</div>
		</dialog>
	);
}
