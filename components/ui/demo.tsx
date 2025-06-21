"use client";

import { FaqSection } from "./faq-section";

const DEMO_FAQS = [
	{
		question: "How do you ensure data accuracy and quality?",
		answer: "We combine AI-powered data enrichment with a human-in-the-loop quality control process. We pull from over 100 diverse data sources and meticulously verify each lead, achieving a 98% accuracy rate. This multi-layered approach ensures you receive only the cleanest, most reliable data.",
	},
	{
		question: "How quickly can I get enriched data?",
		answer: "Our automated AI workflows deliver enriched data in hours, not days. This rapid turnaround is a significant advantage over manual processes, allowing your team to act on fresh insights almost immediately and accelerate your sales cycle.",
	},
	{
		question: "Can you find contacts in niche or hard-to-reach industries?",
		answer: "Absolutely. Our expertise lies in sourcing contacts in traditionally difficult-to-find niches, such as property managers, medical professionals, specialized contractors, and more. We leverage our extensive network of data providers and advanced scraping techniques to uncover these elusive leads.",
	},
	{
		question: "What kind of integrations do you support?",
		answer: "We offer seamless integrations with leading GTM tools, including CRMs like HubSpot and Salesforce, automation platforms like Zapier, and sales intelligence tools like Apollo.io and ZoomInfo. Our goal is to fit effortlessly into your existing tech stack.",
	},
	{
		question: "How does your pricing work? Are there any hidden fees?",
		answer: "We believe in transparent, pay-as-you-need pricing. There's a one-time installation cost of $4,999 to set up your custom workflows and integrations. Beyond that, you only pay for the data and services you consume, with a custom cost calculator to ensure clarity and predictability. No hidden fees, ever.",
	},
	{
		question: "What is intent-based data, and how can it help my GTM strategy?",
		answer: "Intent-based data identifies prospects who are actively showing signals of buying interest, such as researching specific solutions, engaging with relevant content, or posting job openings. By targeting these prospects, you can engage them at the perfect moment, leading to higher conversion rates and a more efficient sales cycle.",
	},
	{
		question: "Do you offer ongoing support and updates?",
		answer: "Yes, we provide continuous support and monthly updates to ensure your data remains fresh and your workflows are optimized. Our team is dedicated to your long-term success and is always available to assist with any questions or adjustments.",
	},
];

export function FaqSectionDemo() {
	return (
		<FaqSection
			title="Your Questions, Answered."
			description="Still curious? We've compiled answers to the most common questions about our platform"
			items={DEMO_FAQS}
		/>
	);
}