import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
	{
		icon: Users,
		label: "Teams",
		value: "32",
		color: "text-blue-400",
	},
	{
		icon: Trophy,
		label: "Prize Pool",
		value: "200K",
		color: "text-yellow-400",
	},
	{
		icon: Calendar,
		label: "Event Date",
		value: "Sep 20",
		color: "text-green-400",
	},
	{
		icon: MapPin,
		label: "Venue",
		value: "DIU",
		color: "text-purple-400",
	},
];

export default function StatsCarousel() {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
			{stats.map((stat, index) => (
				<Card key={index} className="border">
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
