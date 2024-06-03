import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopHeader from "@/components/Navigations/DesktopHeader";
import Footer from "@/components/Navigations/Footer";
import MobileNavbar from "@/components/Navigations/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tk Furnitures",
	description: "General Furniture Enterprise",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='overflow-x-hidden bg-black'>
				<DesktopHeader />
				<MobileNavbar />
				<div className='pt-20 md:pt-0'>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
