import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AwakeNation - The multipurpose event management company",
	description: "",
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
			</body>
		</html>
	);
}
