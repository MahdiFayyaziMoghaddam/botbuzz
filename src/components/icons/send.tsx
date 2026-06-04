import { IconProps } from "@/types/icon";

export default function Send(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<mask
				id="mask0_262_1901"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="24"
				height="24"
			>
				<rect width="24" height="24" fill="currentColor" />
			</mask>
			<g mask="url(#mask0_262_1901)">
				<path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="currentColor" />
			</g>
		</svg>
	);
}
