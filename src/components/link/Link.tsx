"use client";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface CustomLinkProps extends Omit<NextLinkProps, "className" | "children"> {
	className?: ((isActive: boolean) => string) | string;
	children?: ReactNode;
}

export default function Link({ className, children, href, ...props }: CustomLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	const resolvedClassName = typeof className === "function" ? className(isActive) : className;

	return (
		<NextLink href={href} className={resolvedClassName} {...props}>
			{children}
		</NextLink>
	);
}
