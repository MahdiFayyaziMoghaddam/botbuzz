"use client";
import { useEffect, useRef, useCallback } from "react";

interface ModalProps {
	open?: boolean;
	children?: React.ReactNode;
	onClose?: () => void;
}

const FOCUSABLE =
	'button:not([disabled]), [href]:not([tabindex="-1"]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({ open = false, children, onClose }: ModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const previousFocus = useRef<HTMLElement | null>(null);
	const scrollY = useRef(0);

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

			dialog.addEventListener("keydown", trap);
			return () => {
				dialog.removeEventListener("keydown", trap);
			};
		} else {
			document.body.style.overflow = "";
			document.body.style.position = "";
			document.body.style.top = "";
			document.body.style.width = "";

			window.scrollTo(0, scrollY.current);

			dialog.close();

			previousFocus.current?.focus();
		}
	}, [open, close]);

	return (
		<dialog
			ref={dialogRef}
			onClick={(e) => e.target === dialogRef.current && close()}
			onCancel={(e) => {
				e.preventDefault();
				close();
			}}
			className="backdrop:bg-black/50 backdrop:backdrop-blur-[3px] 
				bg-transparent p-0 m-auto
				open:flex open:items-center open:justify-center
				max-w-[calc(100%-2.4rem)] max-h-[85vh]
				rounded-[1.2rem] overflow-visible
				transition-[opacity,transform] duration-300
				opacity-0 scale-95
				open:opacity-100 open:scale-100"
		>
			{children}
		</dialog>
	);
}
