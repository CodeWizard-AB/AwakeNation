import Logo from "@/components/logo";
import { navItems } from "@/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
	return (
		<header className="border-b">
			<nav className="flex justify-between items-center container py-4">
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
				<Button className="lg:block hidden">Register Now</Button>
				<Sheet>
					<SheetTrigger asChild className="lg:hidden block">
						<Button variant="outline" size="icon">
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
									<Link href={link.href}>{link.name}</Link>
								</li>
							))}
						</ul>
					</SheetContent>
				</Sheet>
			</nav>
		</header>
	);
}
