import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Team from "@/components/team";
import Registration from "@/components/registration";
import EventDetails from "@/components/eventdetails";
import Contact from "@/components/contact";
import About from "@/components/about";

export default function Home() {
	return (
		<>
			<Header />
			<main className="space-y-32 mb-32">
				<Hero />
				<About />
				<EventDetails />
				<Registration />
				<Team />
				<Faq />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
