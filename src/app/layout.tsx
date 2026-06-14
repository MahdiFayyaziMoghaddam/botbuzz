import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsFont = localFont({
	src: [
		{
			path: "./../fonts/Poppins-Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "./../fonts/Poppins-SemiBold.ttf",
			weight: "600",
			style: "normal"
		},
		{
			path: "./../fonts/Poppins-Bold.ttf",
			weight: "700",
			style: "normal"
		}
	],
	variable: "--font-poppins",
	preload: true,
	display: "swap",
	adjustFontFallback: "Arial"
});

export const metadata: Metadata = {
	title: "BotBuzz",
	description: "Ai chat app by @mhdifyyzi",
	icons: "/images/favicon.png"
};

export const viewport: Viewport = {
	initialScale: 1,
	colorScheme: "dark",
	userScalable: false
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html data-scroll-behavior="smooth" lang="en" className={`antialiased ${poppinsFont.variable}`}>
			<body className="min-h-dvh text-[1.6rem] font-poppins font-normal text-typo-light-white bg-background">
				{children}
			</body>
		</html>
	);
}
