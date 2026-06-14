import { IconProps } from "@/types/icon";

export default function Menu(props: IconProps) {
	return (
		<svg width="20" height="16" viewBox="0 0 20 16" fill="none" {...props}>
			<rect width="20" height="2" rx="1" fill="currentColor" />
			<rect y="7" width="20" height="2" rx="1" fill="currentColor" />
			<rect y="14" width="20" height="2" rx="1" fill="currentColor" />
		</svg>
	);
}
