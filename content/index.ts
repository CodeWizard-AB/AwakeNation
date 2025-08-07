import {
	Award,
	Calendar,
	Crown,
	MapPin,
	Trophy,
	Users,
	BadgeDollarSign,
	Route,
	ShieldCheck,
	Truck,
	Undo2,
	UserRoundCheck,
	TrendingUp,
	Zap,
} from "lucide-react";

export const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Event Details", href: "#event-details" },
	{ name: "Registration", href: "#registration" },
	{ name: "Team", href: "#team" },
	{ name: "Contact", href: "#contact" },
];

export const heroStats = [
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

export const aboutValues = [
	{
		icon: Zap,
		title: "Empowerment",
		description:
			"Empowering youth through sports and competitive activities to reach their full potential and become tomorrow's leaders.",
		gradient: "from-yellow-500 to-orange-500",
		bgGradient: "from-yellow-500/10 to-orange-500/10",
		borderColor: "border-yellow-500/30",
		iconBg: "bg-yellow-500/20",
		stats: "500+ Youth Empowered",
	},
	{
		icon: Users,
		title: "Unity",
		description:
			"Bringing diverse university communities together through shared passion for sports and collective growth.",
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-500/10 to-cyan-500/10",
		borderColor: "border-blue-500/30",
		iconBg: "bg-blue-500/20",
		stats: "15+ Universities United",
	},
	{
		icon: TrendingUp,
		title: "Growth",
		description:
			"Fostering personal and collective growth through competitive experiences and skill development programs.",
		gradient: "from-green-500 to-emerald-500",
		bgGradient: "from-green-500/10 to-emerald-500/10",
		borderColor: "border-green-500/30",
		iconBg: "bg-green-500/20",
		stats: "300% Growth Rate",
	},
	{
		icon: Trophy,
		title: "Excellence",
		description:
			"Promoting excellence in sports through professional tournaments and competitive spirit among university students.",
		gradient: "from-purple-500 to-pink-500",
		bgGradient: "from-purple-500/10 to-pink-500/10",
		borderColor: "border-purple-500/30",
		iconBg: "bg-purple-500/20",
		stats: "8+ Tournaments Organized",
	},
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

export const faq = [
	{
		icon: Undo2,
		question: "What is your return policy?",
		answer:
			"You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
	},
	{
		icon: Route,
		question: "How do I track my order?",
		answer:
			"Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
	},
	{
		icon: Truck,
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
	},
	{
		icon: BadgeDollarSign,
		question: "What payment methods do you accept?",
		answer:
			"We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
	},
	{
		icon: ShieldCheck,
		question: "What if I receive a damaged item?",
		answer:
			"Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
	},
	{
		icon: UserRoundCheck,
		question: "How can I contact customer support?",
		answer:
			"Reach out via email at support@example.com or call us at 1-800-123-4567 for assistance with any inquiries.",
	},
];
