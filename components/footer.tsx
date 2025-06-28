import { Separator } from "@/components/ui/separator";
import {
	DribbbleIcon,
	GithubIcon,
	TwitchIcon,
	TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { navItems } from "@/content";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function Footer() {
	return (
		<footer className="flex flex-col container">
			<div className="pb-12 flex flex-col justify-start items-center">
				{/* Logo */}
				<TextHoverEffect text="AwakeNation" />

				<ul className="mt-6 flex items-center gap-4 flex-wrap">
					{navItems.map(({ name, href }) => (
						<li key={name}>
							<Link
								href={href}
								className="text-muted-foreground hover:text-foreground font-medium"
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<Separator />
			<div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
				{/* Copyright */}
				<span className="text-muted-foreground">
					&copy; {new Date().getFullYear()}{" "}
					<Link href="/" target="_blank">
						AwakeNation
					</Link>
					. All rights reserved.
				</span>

				<div className="flex items-center gap-5 text-muted-foreground">
					<Link href="#" target="_blank">
						<TwitterIcon className="h-5 w-5" />
					</Link>
					<Link href="#" target="_blank">
						<DribbbleIcon className="h-5 w-5" />
					</Link>
					<Link href="#" target="_blank">
						<TwitchIcon className="h-5 w-5" />
					</Link>
					<Link href="#" target="_blank">
						<GithubIcon className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
