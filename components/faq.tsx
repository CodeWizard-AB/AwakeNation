import {
	BadgeDollarSign,
	Route,
	ShieldCheck,
	Truck,
	Undo2,
	UserRoundCheck,
} from "lucide-react";

const faq = [
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

export default function Faq() {
	return (
		<section className="flex items-center justify-center">
			<div className="container">
				<h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter text-center">
					Frequently Asked Questions
				</h2>
				<p className="mt-3 text-lg text-center text-muted-foreground">
					Quick answers to common questions about our upcoming event 
				</p>

				<div className="mt-12 grid md:grid-cols-2 rounded-xl overflow-hidden outline outline-background outline-offset-[-1px]">
					{faq.map(({ question, answer, icon: Icon }) => (
						<div key={question} className="border p-6 -mt-px -ml-px">
							<div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent">
								<Icon />
							</div>
							<div className="mt-3 mb-2 flex items-start gap-2 text-[1.35rem] font-semibold tracking-tight">
								<span>{question}</span>
							</div>
							<p>{answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
