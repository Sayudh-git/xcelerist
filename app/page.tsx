import { Navbar } from "@/components/navbar";
import { DemoOne } from "@/components/ui/sticky-footer-demo";

import { HeroSection } from "@/components/ui/hero-section-4";
import { FaqSectionDemo } from "@/components/ui/demo";
import { Testimonials as TestimonialsSection } from "@/components/ui/testimonials";
import { DemoOne as ComponentDemo } from "@/components/ui/stacking-card-demo";
import GridFeatureCardsDemo from "@/components/ui/grid-feature-cards-demo";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Anurag Mishra",
    desc: "Driven, innovative, visionary",
    url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Forest Path",
    desc: "Mystical forest trail",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Falling Leaves",
    desc: "Autumn scenery",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Bird Parrot",
    desc: "Vibrant feathered charm",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "Beach Paradise",
    desc: "Sunny tropical beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "video",
    title: "Shiva Temple",
    desc: "Peaceful Shiva sanctuary.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
]


export default function Home() {
  const testimonials = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'The endless hours spent manually enriching data feel like a cruel joke. Copy-pasting, cross-referencing, and still, the data is incomplete or inaccurate. ',
      name: 'Alice Johnson',
      username: '@alicejohnson',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'Every minute spent waiting for data to be processed or enriched is a minute lost in the race to market. The lag between identifying a need and acting.',
      name: 'David Smith',
      username: '@davidsmith',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/kaDy9hV.jpeg',
      text: 'Inefficient data workflows lead to wasted effort, missed connections, and a general sense of operational chaos. When your team is bogged down by clunky processes.',
      name: 'Emma Brown',
      username: '@emmabrown',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/cRwFxtE.png',
      text: 'Poor data quality is a silent killer of GTM campaigns. Inaccurate contact information, outdated company details, or missing fields mean your outreach efforts.',
      name: 'James Wilson',
      username: '@jameswilson',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/TQIqsob.png',
      text: 'Reaching niche markets like property managers, medical professionals, or specialized contractors is notoriously difficult. Generic data sources fall short.',
      name: 'Sophia Lee',
      username: '@sophialee',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/3ROmJ0S.png',
      text: 'Using this library has been a game-changer for our product development.',
      name: 'Michael Davis',
      username: '@michaeldavis',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/6fKCuVC.png',
      text: 'The components are highly responsive and work seamlessly across different devices and screen sizes.',
      name: 'Emily Chen',
      username: '@emilychen',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/Jjqe7St.png',
      text: 'I love how easy it is to customize the components  to fit our brand\'s style. The design is clean and modern.',
      name: 'Robert Lee',
      username: '@robertlee',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/bG88vHI.png',
      text: 'This library has saved us a significant amount of time and effort. The components are well-documented and easy to integrate.',
      name: 'Sarah Taylor',
      username: '@sarahtaylor',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/tjmS77j.png',
      text: 'I appreciate the attention to detail in the design. The components are visually appealing and professional.',
      name: 'Kevin White',
      username: '@kevinwhite',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/yTsomza.png',
      text: 'The components are highly customizable and can be easily integrated with our existing UI framework.',
      name: 'Rachel Patel',
      username: '@rachelpatel',
      social: 'https://i.imgur.com/VRtqhGC.png'
    },
    {
      image: 'https://i.imgur.com/pnsLqpq.png',
      text: 'I love how the components are designed to be highly responsive and work well across different screen sizes.',
      name: 'Brian Kim',
      username: '@briankim',
      social: 'https://i.imgur.com/VRtqhGC.png'
    }
  ];
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        
        <HeroSection />
        <TestimonialsSection testimonials={testimonials} />
        
        <ComponentDemo />
        <GridFeatureCardsDemo />
        <InteractiveBentoGallery mediaItems={mediaItems} title="Case Studies" description="Explore our recent case studies" />
        

 
        <FaqSectionDemo />
  
        
        
        <DemoOne />
      </main>
    </>
  );
}
