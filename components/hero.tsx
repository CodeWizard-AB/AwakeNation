import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/counter";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import StatsCarousel from "@/components/statscarousel";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
		>
			<div className="hidden sm:block">
				<Spotlight width={720} height={1600} smallWidth={320} />
			</div>
			<div className="sm:hidden">
				<Spotlight />
			</div>
			<div className="relative z-10 container text-center">
				{/* Badge */}
				<div className="inline-flex items-center px-6 py-3 rounded-xl backdrop-blur-sm border border-primary/50 mb-8 shadow-2xl">
					<div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse shadow-lg shadow-red-500/50" />
					<span className="text-sm font-medium text-white/90">
						Awaken the Nation, Unite the Spirit
					</span>
				</div>

				{/* Main Heading */}
				<div className="mb-8">
					<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight">
						<span className="text-white drop-shadow-2xl">Awake</span>

						<span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
							Nation
						</span>
					</h1>

					<div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white/80 tracking-wide">
						<Cover>Sports Fest 2025</Cover>
					</div>
				</div>

				{/* Description */}
				<p className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-5xl mx-auto text-white/90 leading-relaxed font-light tracking-wide">
					The biggest youth sports & culture celebration bringing together
					<span className="text-primary font-semibold">
						{" "}
						32 university teams
					</span>
					,<span className="text-primary font-semibold"> 16 college teams</span>
					,
					<span className="text-primary font-semibold">
						{" "}
						live music concert
					</span>
					, and <span className="text-primary font-semibold"> fun games</span> —
					building unity like never before.
				</p>

				{/* Stats Grid */}
				<StatsCarousel />

				{/* Countdown Component */}
				<Counter />

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button size={"lg"} className="text-xl cursor-pointer py-6">
						Register Now <ArrowRight />
					</Button>
					<Button
						variant={"outline"}
						size={"lg"}
						className="text-xl cursor-pointer py-6"
					>
						Explore Event
					</Button>
				</div>
			</div>
		</section>
	);
}
