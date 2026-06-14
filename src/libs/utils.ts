export const getMediaQuery = (breakpoint: string) =>
	parseInt(getComputedStyle(document.documentElement).getPropertyValue(`--breakpoint-${breakpoint}`));
