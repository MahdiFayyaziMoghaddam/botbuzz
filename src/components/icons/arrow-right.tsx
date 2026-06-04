import { IconProps } from "@/types/icon";

export default function ArrowRight(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<mask
				id="mask0_262_1905"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="24"
				height="24"
			>
				<rect width="24" height="24" fill="currentColor" />
			</mask>
			<g mask="url(#mask0_262_1905)">
				<path d="M14 18L12.6 16.55L16.15 13H4V11H16.15L12.6 7.45L14 6L20 12L14 18Z" fill="currentColor" />
			</g>
		</svg>
	);
}
