import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts/fonts";
import { GlobalStateProvider } from "@/context/GlobalStateContext";
import LetsVibe from "@/components/layout/LetsVibe";
import Nav from "@/components/layout/Nav";
import ScrollHandler from "@/handlers/scrollhandler";
export const metadata: Metadata = {
	title: "Caffeinated Byte | Vedant Kamble",
	description: "Portfolio Website for Vedant Kamble",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<GlobalStateProvider>
				<body
					className={`${montserrat.className} text-white select-none overflow-hidden`}>
					<Nav />
					<ScrollHandler />
					{children}
					<LetsVibe />
				</body>
			</GlobalStateProvider>
		</html>
	);
}
