"use client";

import Logo from "@/components/logo";
import { navItems } from "@/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-150",
				isScrolled ? "bg-card/90 backdrop-blur-3xl border-b" : "bg-transparent"
			)}
		>
			<nav className="flex justify-between items-center container py-6">
				<Logo />
				<ul className="lg:flex gap-6 lg:gap-8 hidden">
					{navItems.map((link) => (
						<li
							key={link.href}
							className="hover:text-primary  transition-all duration-300 tranistion-ease-in-out"
						>
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
				</ul>
				<Button className="lg:block hidden cursor-pointer">Register Now</Button>
				<Sheet>
					<SheetTrigger asChild className="lg:hidden block">
						<Button
							variant="outline"
							size="icon"
							className="flex place-items-center"
						>
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="max-w-[400px] sm:max-w-[540px]">
						<SheetHeader>
							<SheetTitle>AwakeNation</SheetTitle>
						</SheetHeader>
						<ul className="flex flex-col gap-4 px-4">
							{navItems.map((link) => (
								<li
									key={link.href}
									className="hover:text-primary transition-all duration-300 tranistion-ease-in-out"
								>
									<SheetClose asChild>
										<Link href={link.href}>{link.name}</Link>
									</SheetClose>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
