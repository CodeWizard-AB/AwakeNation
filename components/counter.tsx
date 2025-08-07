"use client";

import { useEffect, useState } from "react";

export default function Counter() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date("2025-09-01T09:00:00").getTime();

		const updateCountdown = () => {
			const now = new Date().getTime();
			const difference = targetDate - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				});
			}
		};

		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="mb-16 px-4 sm:px-6">
			<h3 className="text-xl sm:text-2xl mb-6 sm:mb-8 font-light text-white/90 text-center">
				Registration Countdown
			</h3>
			<div className="grid grid-cols-2 sm:flex sm:justify-center sm:space-x-6 gap-4 sm:gap-0">
				{Object.entries(timeLeft).map(([unit, value]) => (
					<div key={unit} className="text-center">
						<div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 min-w-[100px] sm:min-w-[120px] border border-white/10 hover:border-red-500/30 transition-all duration-300 shadow-2xl">
							<div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
								{value}
							</div>
							<div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">
								{unit}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
