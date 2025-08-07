import { Award, Calendar, Crown, MapPin, Trophy, Users } from "lucide-react";

export const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Event Details", href: "#event-details" },
	{ name: "Registration", href: "#registration" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
];

export const eventInfo = [
	{
		icon: Calendar,
		title: "Event Date",
		primary: "20th September, 2025",
		secondary: "8:00 AM - 6:00 PM",
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

export const tournamentStructure = [
	{
		phase: "Group Stage",
		description: "32 teams divided into 8 groups",
		duration: "8:00 AM - 12:00 PM",
		matches: "48 matches",
		icon: Users,
		gradient: "from-cyan-500 to-sky-500",
	},
	{
		phase: "Round of 16",
		description: "Top 2 teams from each group advance",
		duration: "1:00 PM - 2:00 PM",
		matches: "8 matches",
		icon: Trophy,
		gradient: "from-yellow-500 to-amber-500",
	},
	{
		phase: "Quarter Finals",
		description: "Best 8 teams compete for semi-final spots",
		duration: "2:30 PM - 3:00 PM",
		matches: "4 matches",
		icon: Award,
		gradient: "from-pink-500 to-rose-500",
	},
	{
		phase: "Semi Finals & Final",
		description: "Last matches and prize ceremony",
		duration: "3:00 PM - 5:00 PM",
		matches: "3 matches",
		icon: Crown,
		gradient: "from-indigo-500 to-blue-500",
	},
];

export const teamMembers = [
	{
		name: "Shafin Zahid",
		title: "Chief Executive Officer",
		bio: "Visionary leader overseeing growth, strategy, and partnerships ",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/shafin.jpg?updatedAt=1751549076793",
	},
	{
		name: "Anuany Argha",
		title: "Director of Information Technology",
		bio: "Heads technical innovation, front-end architecture, and IT infrastructure.",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/argha.jpg?updatedAt=1751550090358",
	},
	{
		name: "Tazwar Kamal Dihan",
		title: "Director of Brand and Strategy",
		bio: "Leads brand identity, strategic direction, and market positioning.",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/dihan.jpg?updatedAt=1751549076720",
	},
	{
		name: "Ab John",
		title: "Director of Sports",
		bio: "Manages all sports initiatives, partnerships, and community engagement.",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/john.jpg?updatedAt=1751549076875",
	},
	{
		name: "Shaiyan Zahid",
		title: "Director of Operations",
		bio: "Oversees internal processes, logistics, and day-to-day operations.",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/shaiyan.jpg?updatedAt=1751549076817",
	},
	{
		name: "Zarif Olind",
		title: "Director of Marketing",
		bio: "Drives marketing campaigns, brand visibility, and user growth.",
		imageUrl:
			"https://ik.imagekit.io/xp2qigjdg/zarif.jpg?updatedAt=1751549076904",
	},
];
