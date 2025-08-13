import { Marquee } from "./ui/marquee";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { aboutValues } from "@/content";
import { Card, CardContent } from "./ui/card";
import { imagekit } from "@/lib/imagekit";

export default async function About() {
	const files = await imagekit.listFiles({ path: "AwakeNation-Photos" });
	const images = files.map((file) => (file.type === "file" ? file.url : ""));
	const firstRow = images.slice(0, images.length / 2);
	const secondRow = images.slice(images.length / 2);

	return (
		<section id="about" className="container">
			<div className="text-center max-w-2xl mx-auto mb-16">
				<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
					About Us
				</h2>
				<p className="mt-6 text-base sm:text-lg">
					Get to know who we are, what we do, and why we do it.
				</p>
			</div>

			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
				<Marquee pauseOnHover className="[--duration:200s]">
					{firstRow.map((url, index) => (
						<figure
							className="relative aspect-video w-[300px] lg:w-[600px] rounded-2xl overflow-hidden"
							key={index}
						>
							<Image src={url} alt="" fill={true} className="object-cover" />
						</figure>
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:200s]">
					{secondRow.map((url, index) => (
						<figure
							className="relative aspect-video w-[300px] lg:w-[600px] rounded-2xl overflow-hidden"
							key={index}
						>
							<Image src={url} alt="" fill={true} className="object-cover" />
						</figure>
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-background"></div>
			</div>

			<div className="mt-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{aboutValues.map((value, index) => (
						<div key={index} className="group">
							<Card className="h-full border-0 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl overflow-hidden relative">
								<div
									className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient}`}
								/>
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />

								<CardContent className="p-8 text-center relative z-10">
									<div
										className={`w-20 h-20 bg-gradient-to-br ${value.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl`}
									>
										<value.icon className="h-10 w-10 text-white" />
									</div>

									<h4
										className="text-2xl font-bold text-white mb-4"
										style={{
											backgroundImage: `linear-gradient(135deg, ${
												value.gradient.split(" ")[1]
											}, ${value.gradient.split(" ")[3]})`,
										}}
									>
										{value.title}
									</h4>

									<p className="text-gray-300 leading-relaxed mb-6 text-sm">
										{value.description}
									</p>

									<Badge
										className={`bg-gradient-to-r ${value.gradient} text-white border-0 px-4 py-2 text-xs font-medium shadow-lg`}
									>
										{value.stats}
									</Badge>
								</CardContent>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
