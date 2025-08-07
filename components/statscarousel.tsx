import { Card, CardContent } from "@/components/ui/card";
import { heroStats } from "@/content";

export default function StatsCarousel() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
			{heroStats.map((stat, index) => (
				<Card key={index} className="border py-10">
					<CardContent>
						<stat.icon
							className={`h-12 w-12 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
						/>
						<div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
							{stat.value}
						</div>
						<div className="text-sm text-white/70 uppercase tracking-wider">
							{stat.label}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
