import { IconProps } from "@/types/icon";

export default function Layout(props: IconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<mask
				id="mask0_507_1695"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="24"
				height="24"
			>
				<rect width="24" height="24" fill="currentColor" />
			</mask>
			<g mask="url(#mask0_507_1695)">
				<path
					d="M4.00195 20C3.45195 20 2.98112 19.8042 2.58945 19.4125C2.19779 19.0208 2.00195 18.55 2.00195 18V6C2.00195 5.45 2.19779 4.97917 2.58945 4.5875C2.98112 4.19583 3.45195 4 4.00195 4H20.002C20.552 4 21.0228 4.19583 21.4145 4.5875C21.8061 4.97917 22.002 5.45 22.002 6V18C22.002 18.55 21.8061 19.0208 21.4145 19.4125C21.0228 19.8042 20.552 20 20.002 20H4.00195ZM4.00195 18H14.502V14.5H4.00195V18ZM16.502 18H20.002V9H16.502V18ZM4.00195 12.5H14.502V9H4.00195V12.5Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}
