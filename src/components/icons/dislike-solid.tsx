import { IconProps } from "@/types/icon";

export default function DislikeSolid(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M20 0V14H24V0H20Z" fill="currentColor" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M16 24H13C11.3431 24 10 22.6569 10 21V16H3C1.34315 16 0 14.6569 0 13V8L4 0H18V14L16 18V24Z"
				fill="currentColor"
			/>
		</svg>
	);
}
