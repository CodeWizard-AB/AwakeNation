import * as motion from "motion/react-client";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, DollarSign, Award, Crown, Timer } from "lucide-react";
import { eventInfo, tournamentStructure } from "@/content";

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
					University Football Tournament • 32 Elite Teams • Fun Games &
					Activities
				</p>
			</motion.div>

			{/* Tournament Overview */}
			<div className="mb-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Teams */}
					<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 shadow-xl">
						<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
							<Users className="h-10 w-10 text-white" />
						</div>
						<p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
							Total Teams
						</p>
						<p className="text-5xl font-bold text-blue-400 mb-3">32</p>
						<p className="text-lg text-gray-300 font-medium">
							University Teams
						</p>
					</div>

					{/* Registration Fee */}
					<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 shadow-xl">
						<div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
							<DollarSign className="h-10 w-10 text-white" />
						</div>
						<p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
							Registration Fee
						</p>
						<p className="text-5xl font-bold text-green-400 mb-3">6,999</p>
						<p className="text-lg text-gray-300 font-medium">BDT per team</p>
					</div>

					{/* Prize Pool */}
					<div className="text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 shadow-xl">
						<div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
							<Trophy className="h-10 w-10 text-white" />
						</div>
						<p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
							Total Prize Pool
						</p>
						<p className="text-5xl font-bold text-yellow-400 mb-3">200K</p>
						<p className="text-lg text-gray-300 font-medium">BDT Total</p>
					</div>
				</div>

				{/* Prize Distribution */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card>
						<div className="flex items-center justify-between px-8 py-4">
							<div className="flex items-center gap-6 space-x-6">
								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									className={`w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl relative z-10`}
								>
									<Crown className="h-10 w-10 text-white" />
								</motion.div>
								<div>
									<span className="text-white font-bold text-2xl">
										Champion
									</span>
									<span className="md:hidden block text-gray-300 font-bold text-2xl">
										1,50,000 BDT
									</span>
								</div>
							</div>
							<span className="hidden md:block text-gray-300 font-bold text-3xl">
								50,000 BDT
							</span>
						</div>
					</Card>

					<Card>
						<div className="flex items-center justify-between px-8 py-4">
							<div className="flex items-center gap-6 space-x-6">
								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									className={`w-20 h-20 bg-gradient-to-r from-gray-500 to-slate-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl relative z-10`}
								>
									<Award className="h-10 w-10 text-white" />
								</motion.div>
								<div>
									<span className="text-white font-bold text-2xl">
										Runner-Up
									</span>
									<span className="md:hidden block text-gray-300 font-bold text-2xl">
										50,000 BDT
									</span>
								</div>
							</div>
							<span className="hidden md:block text-gray-300 font-bold text-3xl">
								50,000 BDT
							</span>
						</div>
					</Card>
				</div>
			</div>

			{/* Event Information */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				{eventInfo.map((info, index) => (
					<Card
						key={index}
						className="text-center shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl overflow-hidden group border"
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

			{/* Tournament Structure */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{tournamentStructure.map((phase, index) => (
					<div key={index}>
						<Card className={`border`}>
							<CardContent className="p-8 text-center">
								<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								<motion.div
									whileHover={{ scale: 1.1, rotate: 5 }}
									className={`w-24 h-24 bg-gradient-to-r ${phase.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl relative z-10`}
								>
									<phase.icon className="h-12 w-12 text-white" />
								</motion.div>

								<h4 className="text-xl font-bold text-white mb-4">
									{phase.phase}
								</h4>
								<p className="text-gray-300 text-sm mb-4 leading-relaxed">
									{phase.description}
								</p>

								<div className="space-y-3">
									<div className="flex items-center justify-center space-x-2">
										<Timer className="h-4 w-4 text-blue-400" />
										<span className="text-blue-400 text-sm font-medium">
											{phase.duration}
										</span>
									</div>
									<div className="flex items-center justify-center space-x-2">
										<Trophy className="h-4 w-4 text-yellow-400" />
										<span className="text-yellow-400 text-sm font-medium">
											{phase.matches}
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</section>
	);
}
