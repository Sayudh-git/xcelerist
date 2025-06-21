import React from 'react';
import Component from '@/components/ui/stacking-card';

const projects = [
  {
    title: '100+ Sources. 98% Accuracy. Unbeatable Coverage.',
    description:
      'Forget spotty data. We tap into over 100 premium data sources, meticulously cross-referencing and AI-checking every lead. Our human-in-the-loop quality control ensures a staggering 98% accuracy, so your outreach always hits the mark.',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd',
  },
  {
    title: 'Hours, Not Days: Rapid Data Enrichment.',
    description:
      'Manual enrichment is a relic of the past. Our automated AI workflows deliver enriched data in hours, not days. This lightning-fast turnaround means you can act on insights immediately, accelerating your sales cycle and boosting efficiency.',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#8f89ff',
  },
  {
    title: 'Capture Intent. Convert Faster. Grow Smarter.',
    description:
      'Go beyond static lists. We provide dynamic data based on real-time intent signals and triggers – from job postings to social media engagement. Target prospects when they\'re most receptive, ensuring your message resonates and converts.',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#13006c',
  },
  {
    title: 'CRM Ready. Cost Transparent. Growth Optimized.',
    description:
      'Our solution integrates seamlessly with your existing CRM, ensuring your data is always current and actionable. With a clear, pay-as-you-need model and a one-time setup, you get predictable costs and unparalleled value, built for your specific needs.',
    link: 'https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60',
    color: '#ed649e',
  },
  {
    title: 'Mark Rammers',
    description:
      'Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.',
    link: 'https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
];

function ComponentDemo() {
  return (
    <Component projects={projects} />
  );
}

export { ComponentDemo as DemoOne };
