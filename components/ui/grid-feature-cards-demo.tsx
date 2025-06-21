'use client';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Hyper-Targeted Lead Lists, On Demand.',
		icon: Zap,
		description: 'Leverage our advanced data intelligence to build precise lead lists for even the most niche markets. From property managers to medical professionals, we find the hard-to-reach contacts your competitors miss, ensuring your outreach is always relevant and impactful.',
	},
	{
		title: 'Automated Enrichment. Flawless Data.',
		icon: Cpu,
		description: 'Say goodbye to manual data entry and dirty CRM records. Our AI-driven engine automatically enriches your leads with comprehensive, up-to-date information from over 100 sources, ensuring every contact is complete and accurate.',
	},
	{
		title: 'Act on Intent. Close More Deals.',
		icon: Fingerprint,
		description: 'Gain a competitive edge with real-time intent data. We identify prospects actively showing buying signals – whether it\'s a recent job change, social media engagement, or specific online behavior – allowing you to engage at the perfect moment.',
	},
	{
		title: 'CRM Integration. Data That Flows.',
		icon: Pencil,
		description: 'Keep your CRM clean, current, and powerful. Our platform seamlessly integrates with your existing CRM, automatically updating records and ensuring your sales and marketing teams always have access to the freshest data.',
	},
	{
		title: 'Always Fresh. Always Relevant.',
		icon: Settings2,
		description: 'Data decays rapidly. We provide monthly updates and continuous refreshes to your lead lists, ensuring your outreach is always based on the most current information, minimizing bounce rates and maximizing deliverability.',
	},
	{
		title: 'Transparent Pricing. Tailored to You.',
		icon: Sparkles,
		description: 'No hidden fees, no surprises. Our transparent, pay-as-you-need model includes a one-time setup fee and a custom cost calculator, so you only pay for the data and services you truly need, optimized for your specific GTM strategy.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
						Features Engineered for Unstoppable Growth
					</h2>
					<p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
						Our features are designed to eliminate manual bottlenecks, maximize efficiency, and drive predictable revenue.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
