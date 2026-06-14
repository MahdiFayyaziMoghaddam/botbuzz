import { useCallback, useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const FALLBACKS: Record<Breakpoint, number> = {
	xs: 350,
	sm: 480,
	md: 768,
	lg: 1024,
	xl: 1280
};

interface MediaQueryResult {
	width: number;
	isBelow: boolean;
	isOver: boolean;
}

export default function useBreakpoint(breakpoint: Breakpoint): MediaQueryResult {
	const [result, setResult] = useState<MediaQueryResult>({ width: 0, isBelow: false, isOver: false });

	const check = useCallback(() => {
		const value = getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${breakpoint}`).trim();

		const width = parseInt(value) || FALLBACKS[breakpoint];
		const isBelow = window.innerWidth <= width;
		const isOver = window.innerWidth > width;

		setResult({ width, isBelow, isOver });
	}, [breakpoint]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, [check]);

	return result;
}
