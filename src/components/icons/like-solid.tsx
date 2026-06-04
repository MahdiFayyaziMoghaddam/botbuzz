import { IconProps } from "@/types/icon";

export default function LikeSolid(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M4 24V10H0V24H4Z" fill="currentColor" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 0H11C12.6569 0 14 1.34315 14 3V8H21C22.6569 8 24 9.34315 24 11V16L20 24H6V10L8 6V0Z"
				fill="currentColor"
			/>
		</svg>
	);
}
