import dynamic from 'next/dynamic';

const BrainAnimation = dynamic(() => import('./BrainAnimationImpl'), { ssr: false });

export default BrainAnimation;
