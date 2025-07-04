import { Button } from "@/components/ui/button";
import { teamMembers } from "@/content";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Team() {
	return (
		<section id="team" className="flex flex-col justify-center container py-16">
			<div className="text-center max-w-2xl mx-auto mb-16">
				<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
					Meet Our Team
				</h2>
				<p className="mt-6 text-base sm:text-lg">
					Our philosophy is simple — hire a team of diverse, passionate people
					and foster a culture that empowers you to do your best work.
				</p>
			</div>

			<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
				{teamMembers.map((member) => (
					<div key={member.name}>
						<Image
							src={member.imageUrl}
							alt={member.name}
							className="w-full object-top aspect-square rounded-lg object-cover bg-secondary"
							width={600}
							height={600}
						/>
						<h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
						<p className="text-muted-foreground text-sm">{member.title}</p>
						<p className="mt-3">{member.bio}</p>
						<div className="mt-4 flex items-center gap-2.5">
							<Button
								className="bg-accent hover:bg-accent text-muted-foreground shadow-none"
								size="icon"
								asChild
							>
								<Link href="#" target="_blank">
									<FaLinkedin className="stroke-muted-foreground" />
								</Link>
							</Button>
							<Button
								className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
								size="icon"
								asChild
							>
								<Link href="#" target="_blank">
									<FaFacebook className="stroke-muted-foreground" />
								</Link>
							</Button>
							<Button
								className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
								size="icon"
								asChild
							>
								<Link href="#" target="_blank">
									<FaInstagram className="stroke-muted-foreground" />
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
