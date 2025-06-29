import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Trophy,
	Users,
	DollarSign,
	Calendar,
	MapPin,
	Music,
	Gamepad2,
	Clock,
	Award,
	Zap,
	Target,
	Gift,
	Crown,
	Medal,
} from "lucide-react";
import { tournaments } from "@/content";

const eventInfo = [
	{
		icon: Calendar,
		title: "Event Date",
		primary: "9th August, 2025",
		secondary: "9:00 AM - 5:00 PM",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
		gradient: "from-emerald-500 to-teal-500",
	},
	{
		icon: MapPin,
		title: "Venue",
		primary: "Daffodil International University",
		secondary: "Ashulia Campus, Dhaka",
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
		gradient: "from-purple-500 to-violet-500",
	},
	{
		icon: Users,
		title: "Match Format",
		primary: "6-A-Side Football",
		secondary: "Professional Referees",
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
		gradient: "from-orange-500 to-red-500",
	},
];
const features = [
	{
		icon: Music,
		title: "Live Concert",
		description:
			"Top bands and artists performing live throughout the event with state-of-the-art sound systems",
		badge: "Free Entry",
		gradient: "from-purple-600 via-violet-700 to-purple-800",
		iconColor: "text-purple-400",
		highlights: ["3 Live Bands", "DJ Sets", "Sound System"],
	},
	{
		icon: Gamepad2,
		title: "Gaming Zone",
		description:
			"Interactive gaming stations with FIFA tournaments, mobile gaming, and retro arcade games",
		badge: "Interactive Games",
		gradient: "from-cyan-600 via-blue-700 to-indigo-800",
		iconColor: "text-cyan-400",
		highlights: ["FIFA Tournament", "Mobile Games", "Arcade Zone"],
	},
	{
		icon: Gift,
		title: "Prize Giveaways",
		description:
			"Hourly prize distributions, lucky draws, and surprise giveaways for all attendees",
		badge: "Surprise Gifts",
		gradient: "from-yellow-600 via-amber-700 to-orange-800",
		iconColor: "text-yellow-400",
		highlights: ["Hourly Draws", "Tech Gadgets", "Gift Vouchers"],
	},
	{
		icon: Target,
		title: "Skills Challenge",
		description:
			"Individual football skill competitions including penalty shootouts and freestyle contests",
		badge: "Special Awards",
		gradient: "from-red-600 via-rose-700 to-pink-800",
		iconColor: "text-red-400",
		highlights: ["Penalty Shootout", "Freestyle", "Speed Challenge"],
	},
];
const stats = [
	{
		icon: Users,
		label: "Total Teams",
		value: "48",
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
		description: "Elite teams competing",
	},
	{
		icon: Trophy,
		label: "Prize Pool",
		value: "170K",
		color: "text-yellow-500",
		bgColor: "bg-yellow-500/10",
		description: "Total prize money",
	},
	{
		icon: Clock,
		label: "Event Duration",
		value: "8",
		color: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
		description: "Hours of excitement",
	},
	{
		icon: Music,
		label: "Live Shows",
		value: "6",
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
		description: "Musical performances",
	},
];

export default function EventDetails() {
	return (
		<section id="event-details" className="container">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center max-w-2xl mx-auto mb-16"
			>
				<h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
					Event Details
				</h2>
				<p className="mt-6 text-base sm:text-lg">
					One epic sports fest • Two thrilling tournaments • 48 elite teams •
					Endless entertainment
				</p>
			</motion.div>

			{/* Tournament Cards */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				{tournaments.map((tournament, index) => (
					<motion.div
						key={tournament.id}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2, duration: 0.6 }}
						className="group"
					>
						<Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl pt-0">
							{/* Premium Badge */}
							{tournament.isPremium && (
								<div className="absolute top-6 right-6 z-20">
									<Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold px-4 py-2 shadow-lg">
										<Crown className="h-4 w-4 mr-1" />
										Premium
									</Badge>
								</div>
							)}

							{/* Header with Gradient */}
							<CardHeader
								className={`bg-gradient-to-r ${tournament.gradient} text-white relative overflow-hidden p-8`}
							>
								<div className="absolute inset-0 bg-black/10" />
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

								<div className="relative z-10">
									<CardTitle className="text-4xl font-bold mb-3 flex items-center">
										<Trophy className="h-8 w-8 mr-3" />
										{tournament.title}
									</CardTitle>
									<p className="text-xl opacity-90 font-medium">
										{tournament.subtitle}
									</p>
								</div>
							</CardHeader>

							<CardContent className="p-8 space-y-8">
								{/* Key Stats */}
								<div className="grid grid-cols-2 gap-6">
									<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50">
										<div
											className={`w-16 h-16 ${tournament.bgGradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
										>
											<Users className={`h-8 w-8 ${tournament.textColor}`} />
										</div>
										<p className="text-sm text-muted-foreground mb-2 font-medium">
											Teams
										</p>
										<p className={`text-4xl font-bold ${tournament.textColor}`}>
											{tournament.teams}
										</p>
									</div>

									<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-background to-muted/20 border border-border/50">
										<div
											className={`w-16 h-16 ${tournament.bgGradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
										>
											<DollarSign
												className={`h-8 w-8 ${tournament.textColor}`}
											/>
										</div>
										<p className="text-sm text-muted-foreground mb-2 font-medium">
											Registration
										</p>
										<p className={`text-2xl font-bold ${tournament.textColor}`}>
											{tournament.registration}
										</p>
									</div>
								</div>

								{/* Prize Pool */}
								<div className="space-y-4">
									<h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
										<Medal className="h-5 w-5 mr-2 text-yellow-500" />
										Prize Distribution
									</h4>

									<div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-2xl border border-yellow-500/20 shadow-lg">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
												<Crown className="h-6 w-6 text-white" />
											</div>
											<span className="text-foreground font-semibold text-lg">
												Champion
											</span>
										</div>
										<span className="text-yellow-500 font-bold text-2xl">
											{tournament.champion}
										</span>
									</div>

									<div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-2xl border border-gray-500/20 shadow-lg">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-500 rounded-xl flex items-center justify-center shadow-lg">
												<Award className="h-6 w-6 text-white" />
											</div>
											<span className="text-foreground font-semibold text-lg">
												Runner-Up
											</span>
										</div>
										<span className="text-muted-foreground font-bold text-2xl">
											{tournament.runnerUp}
										</span>
									</div>
								</div>

								{/* Tournament Highlights */}
								<div className="space-y-3">
									<h4 className="text-lg font-semibold text-foreground flex items-center">
										<Zap className="h-5 w-5 mr-2 text-blue-500" />
										Tournament Features
									</h4>
									<div className="grid grid-cols-2 gap-3">
										{tournament.highlights.map((highlight, idx) => (
											<motion.div
												key={idx}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.1 * idx }}
												className="flex items-center space-x-2 p-3 rounded-xl bg-muted/30 border border-border/50"
											>
												<div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
												<span className="text-sm text-muted-foreground font-medium">
													{highlight}
												</span>
											</motion.div>
										))}
									</div>
								</div>

								{/* Format Badge */}
								<div className="text-center pt-4">
									<Badge
										variant="outline"
										className={`${tournament.borderColor} ${tournament.textColor} text-lg px-8 py-3 font-semibold shadow-lg`}
									>
										{tournament.format}
									</Badge>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>

			{/* Event Information */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				{eventInfo.map((info, index) => (
					<Card
						key={index}
						className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden group"
					>
						<CardContent className="p-8 relative">
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								className={`w-24 h-24 bg-gradient-to-r ${info.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10`}
							>
								<info.icon className="h-12 w-12 text-white" />
							</motion.div>

							<h4 className="text-2xl font-bold text-foreground mb-4 relative z-10">
								{info.title}
							</h4>
							<p className="text-2xl font-bold text-foreground mb-3 relative z-10">
								{info.primary}
							</p>
							<p className="text-lg text-muted-foreground relative z-10">
								{info.secondary}
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Event Features */}

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 + index * 0.1 }}
						whileHover={{ y: -8, scale: 1.02 }}
					>
						<Card
							className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br ${feature.gradient} text-white overflow-hidden group relative`}
						>
							<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

							<CardContent className="p-8 text-center relative z-10">
								<motion.div
									whileHover={{ scale: 1.2, rotate: 10 }}
									className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl backdrop-blur-sm"
								>
									<feature.icon className="h-10 w-10 text-white" />
								</motion.div>

								<h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
								<p className="text-sm opacity-90 mb-6 leading-relaxed">
									{feature.description}
								</p>

								<div className="space-y-3 mb-6">
									{feature.highlights.map((highlight, idx) => (
										<div
											key={idx}
											className="flex items-center justify-center space-x-2"
										>
											<div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
											<span className="text-xs text-white/80">{highlight}</span>
										</div>
									))}
								</div>

								<Badge className="bg-white/20 text-white border-0 px-6 py-2 hover:bg-white/30 transition-colors shadow-lg">
									{feature.badge}
								</Badge>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>

			{/* Event Summary Stats */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.6 }}
			>
				<Card className="border-0 shadow-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden">
					<CardContent className="p-12">
						<div className="text-center mb-12">
							<h3 className="text-4xl font-bold text-foreground mb-4">
								Event at a Glance
							</h3>
							<p className="text-xl text-muted-foreground">
								The numbers that make this event extraordinary
							</p>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.4 + index * 0.1 }}
									whileHover={{ scale: 1.05 }}
									className="text-center group"
								>
									<div
										className={`w-20 h-20 bg-gradient-to-br ${stat.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-border/20`}
									>
										<stat.icon className={`h-10 w-10 ${stat.color}`} />
									</div>
									<p className="text-5xl font-bold text-foreground mb-2">
										{stat.value}
									</p>
									<p className="text-lg font-semibold text-foreground mb-1">
										{stat.label}
									</p>
									<p className="text-sm text-muted-foreground">
										{stat.description}
									</p>
								</motion.div>
							))}
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</section>
	);
}
