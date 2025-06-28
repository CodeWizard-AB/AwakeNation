import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Team from "@/components/team";
import Features from "@/components/features";
import Registration from "@/components/registration";

export default function Home() {
	return (
		<>
			<Header />
			<main className="space-y-32 mb-32">
				<HeroSection />
				<Registration />
				<Team />
				<Features />
				<Faq />
			</main>
			<Footer />
		</>
	);
}
