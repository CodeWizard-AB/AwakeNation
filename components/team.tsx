import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity";
import { Member } from "@/lib/types";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Team() {
	const teamMembers = await client.fetch(
		`*[_type == "team"] | order(fullName asc) { fullName, email, role, bio, phone, "imageUrl": photo.asset->url}`
	);

	return (
		<section id="team" className="flex flex-col justify-center container">
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
				{teamMembers.map((member: Member, index: number) => (
					<div key={index}>
						<Image
							src={member.imageUrl}
							alt={member.fullName}
							className="w-full object-top aspect-square rounded-lg object-cover bg-secondary"
							width={600}
							height={600}
						/>
						<h3 className="mt-4 text-lg font-semibold">{member.fullName}</h3>
						<p className="text-muted-foreground text-sm">{member.role}</p>
						<p className="mt-3">{member.bio}</p>
						<div className="mt-4 flex items-center gap-2.5">
							<Button
								className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
								size="icon"
								asChild
							>
								<Link href={`tel:${member.phone}`}>
									<Phone className="stroke-muted-foreground" />
								</Link>
							</Button>
							<Button
								className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
								size="icon"
								asChild
							>
								<Link href={`mailto:${member.email}`}>
									<Mail className="stroke-muted-foreground" />
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
