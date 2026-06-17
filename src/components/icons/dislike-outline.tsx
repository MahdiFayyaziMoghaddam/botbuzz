import { IconProps } from "@/types/icon";

export default function DislikeOutline(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M20 0V14H24V0H20Z" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14 17.5279L16 13.5279V2H5.23607L2 8.47214V13C2 13.5523 2.44771 14 3 14H12V21C12 21.5523 12.4477 22 13 22H14V17.5279ZM16 24H13C11.3431 24 10 22.6569 10 21V16H3C1.34315 16 0 14.6569 0 13V8L4 0H18V14L16 18V24Z"
				fill="currentColor"
			/>
		</svg>
	);
}
