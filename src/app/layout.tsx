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
			path: "./../fonts/Poppins-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic"
		}
	],
	variable: "--font-poppins",
	preload: true,
	display: "swap",
	adjustFontFallback: "Arial"
});

export const metadata: Metadata = {
	title: "BotBuzz",
	description: "ai chat app by MFM",
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
		<html lang="en" className={`antialiased text-[62.5%] ${poppinsFont.variable}`}>
			<body className="min-h-dvh text-[1.6rem] font-poppins font-normal bg-background">{children}</body>
		</html>
	);
}
