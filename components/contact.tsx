import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { contacts } from "@/content";

export default function Contact() {
	return (
		<section id="contact" className="flex items-center justify-center">
			<div className="container">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
						Contact Us
					</h2>
					<p className="mt-6 text-base sm:text-lg">
						Our friendly team is always here to chat.
					</p>
				</div>
				<div className="mt-14 md:mt-24 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{contacts.map((card) => (
						<Card key={card.title} className="border">
							<CardContent>
								<div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
									<card.icon />
								</div>
								<h3 className="mt-8 font-bold text-xl">{card.title}</h3>
								<p className="mt-2.5 mb-4 text-muted-foreground">
									{card.description}
								</p>
								<Link
									className="font-medium"
									href={card.link.href}
									target={card.link.target}
								>
									{card.link.label}
								</Link>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
