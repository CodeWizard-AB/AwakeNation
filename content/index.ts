import {
	Award,
	Calendar,
	Crown,
	MapPin,
	Trophy,
	Users,
	TrendingUp,
	Zap,
	Shield,
	CreditCard,
	Building,
	FileText,
	UserCheck,
	FileCheck,
	Flag,
	Gift,
	Camera,
	Gavel,
	MessageCircle,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	ShieldCheck,
} from "lucide-react";

export const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Event Details", href: "#event-details" },
	{ name: "Registration", href: "#registration" },
	{ name: "Team", href: "#team" },
	{ name: "Faq", href: "#faq" },
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

export const steps = [
	{
		id: 1,
		title: "Details",
		icon: Building,
		description: "Team & Institution Details",
		color: "from-blue-600 to-blue-700",
	},
	{
		id: 2,
		title: "Players",
		icon: Users,
		description: "Add Your Players",
		color: "from-purple-600 to-purple-700",
	},
	{
		id: 3,
		title: "Payment",
		icon: CreditCard,
		description: "Complete Registration",
		color: "from-green-600 to-green-700",
	},
	{
		id: 4,
		title: "Review",
		icon: Shield,
		description: "Final Confirmation",
		color: "from-orange-600 to-orange-700",
	},
];

export const workflowSteps = [
	{
		id: 1,
		title: "Form Submission",
		description: "Complete registration form with team details",
		icon: FileText,
		color: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
	{
		id: 2,
		title: "Payment Verification",
		description: "Manual verification of payment receipt",
		icon: CreditCard,
		color: "text-green-500",
		bgColor: "bg-green-500/10",
	},
	{
		id: 3,
		title: "Player Verification",
		description: "Validate student IDs and eligibility",
		icon: UserCheck,
		color: "text-purple-500",
		bgColor: "bg-purple-500/10",
	},
	{
		id: 4,
		title: "Document Review",
		description: "Final review of all submitted documents",
		icon: FileCheck,
		color: "text-orange-500",
		bgColor: "bg-orange-500/10",
	},
	{
		id: 5,
		title: "Final Approval",
		description: "Official registration confirmation",
		icon: Award,
		color: "text-yellow-500",
		bgColor: "bg-yellow-500/10",
	},
	{
		id: 6,
		title: "Event Ready",
		description: "Team confirmed for tournament",
		icon: Trophy,
		color: "text-red-500",
		bgColor: "bg-red-500/10",
	},
];

export const faqs = [
	{
		icon: Flag,
		question: "How will the tournament format work?",
		answer:
			"The tournament begins with group stage matches, where teams earn points. Top teams qualify for the knockout rounds, progressing until the grand final.",
	},
	{
		icon: Users,
		question: "How many players can be registered in a team?",
		answer:
			"Each university team may register 10 players in total, consisting of 6 active players on the field and 4 substitutes only.",
	},
	{
		icon: Gavel,
		question: "Who will referee the matches?",
		answer:
			"All matches will be managed by officially licensed referees to ensure transparency, fairness, and full compliance with international futsal rules.",
	},
	{
		icon: ShieldCheck,
		question: "What happens if a match ends in a draw?",
		answer:
			"In the group stage, matches may end as draws. During knockout matches, tied games proceed directly to a penalty shootout for results.",
	},
	{
		icon: Gift,
		question: "Are there awards beyond Champion and Runner-up?",
		answer:
			"Yes, awards include Best Player, Best Goalkeeper, Top Scorer, and Fair Play Team, recognizing individuals and teams for outstanding performances.",
	},
	{
		icon: Camera,
		question: "Will the tournament have media coverage?",
		answer:
			"Yes, all matches feature professional photography, highlight reels, and selective live streaming, ensuring strong digital exposure for teams and players.",
	},
];

export const contacts = [
	{
		icon: MailIcon,
		title: "Email",
		description: "Our friendly team is here to help.",
		link: {
			href: "mailto:awakenationbd@gmail.com",
			label: "awakenationbd@gmail.com",
			target: undefined,
		},
	},
	{
		icon: MessageCircle,
		title: "Live chat",
		description: "Our friendly team is here to help.",
		link: {
			href: "https://wa.me/+8801772432706",
			label: "Start new chat",
			target: "_blank",
		},
	},
	{
		icon: MapPinIcon,
		title: "Office",
		description: "Come say hello at our office HQ.",
		link: {
			href: "https://map.google.com",
			label: "23 Diluroad, Dhaka, Bangladesh",
			target: "_blank",
		},
	},
	{
		icon: PhoneIcon,
		title: "Phone",
		description: "Mon-Fri from 8am to 5pm.",
		link: {
			href: "tel:+8801772432706",
			label: "+880 1772-432706",
			target: undefined,
		},
	},
];
