// stacking-card.tsx
'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import Image from 'next/image';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col md:flex-row relative -top-[25%] h-auto md:h-[450px] w-full md:w-[70%] rounded-xl p-4 md:p-10 origin-top
  bg-neutral-950 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950
  border border-neutral-700
  shadow-[inset_0_4px_8px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.04),0_0_2px_rgba(255,255,255,0.07)]`}
      >
        <div className="relative w-full md:w-[48%] h-48 md:h-full rounded-lg overflow-hidden order-1 md:order-2 mb-4 md:mb-0">
          <motion.div
            className="w-full h-full"
            style={{ scale: imageScale }}
          >
            <Image src={url} alt="image" className="w-full h-full object-cover" width={600} height={400} />
          </motion.div>
        </div>
        <div className="w-full md:w-[52%] relative top-0 md:top-[10%] order-2 md:order-1 flex flex-col justify-center items-start md:pr-6">
          <h2 className='text-2xl font-semibold text-left w-full'>{title}</h2>
          <p className='text-sm mt-2 text-left w-full'>{description}</p>
          <span className='flex items-center gap-2 pt-2 justify-start'>
            <a
              href={'#'}
              target='_blank'
              className='underline cursor-pointer'
            >
              See more
            </a>
            <svg
              width='22'
              height='12'
              viewBox='0 0 22 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                fill='black'
              />
            </svg>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

interface ComponentRootProps {
  projects: ProjectData[];
}

const Component = forwardRef<HTMLElement, ComponentRootProps>(({ projects }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='bg-black' ref={container}>
        <>
          <section className='text-white w-full bg-background grid place-content-center pt-24 pb-2 md:pt-32 md:pb-4 relative'>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl font-semibold text-center tracking-tight leading-[120%] relative z-10'>
              Real Solutions for Real GTM Challenges
            </h1>
          </section>
        </>

        <section className='text-white w-full' style={{ backgroundColor: '#121212' }}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';

export default Component;
