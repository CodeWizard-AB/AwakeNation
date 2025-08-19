import { faqs } from "@/content";

export default function Faq() {
	return (
		<section id="faq" className="flex items-center justify-center">
			<div className="container">
				<h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter text-center">
					Frequently Asked Questions
				</h2>
				<p className="mt-3 text-lg text-center text-muted-foreground">
					Quick answers to common questions about our upcoming event
				</p>

				<div className="mt-12 grid md:grid-cols-2 rounded-xl overflow-hidden outline outline-background outline-offset-[-1px]">
					{faqs.map(({ question, answer, icon: Icon }) => (
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
