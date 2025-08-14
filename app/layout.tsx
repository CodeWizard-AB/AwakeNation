import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AwakeNation - The Multipurpose Event Management Company",
	description:
		"AwakeNation specializes in organizing and managing events, from sports tournaments to social celebrations. We create unforgettable experiences tailored to your needs.",
	keywords: [
		"event management",
		"AwakeNation",
		"sports tournaments",
		"social celebrations",
		"event planning",
		"professional events",
	],
	authors: [{ name: "AwakeNation Team" }],
	openGraph: {
		title: "AwakeNation - The Multipurpose Event Management Company",
		description:
			"AwakeNation specializes in organizing and managing events, from sports tournaments to social celebrations. We create unforgettable experiences tailored to your needs.",
		images: [
			{
				url: "https://awakenationbd.com/og-image.png",
				alt: "AwakeNation - The Multipurpose Event Management Company",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${interFont.className} antialiased dark`}
				cz-shortcut-listen="true"
			>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
