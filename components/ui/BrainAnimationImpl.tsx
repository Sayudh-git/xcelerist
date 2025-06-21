import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Tubes } from './brain-tubes';
import { BrainParticles } from './brain-particles';
import { data } from '@/lib/data';

function createBrainCurvesFromPaths(): THREE.CatmullRomCurve3[] {
  // Use 'economics' if available, otherwise fallback to 'biology'
  const paths = data.economics?.[0]?.paths || data.biology[0].paths;
  const brainCurves: THREE.CatmullRomCurve3[] = [];
  paths.forEach(path => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < path.length; i += 3) {
      points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
    }
    const tempCurve = new THREE.CatmullRomCurve3(points);
    brainCurves.push(tempCurve);
  });
  return brainCurves;
}

const curves = createBrainCurvesFromPaths();

const BrainAnimationImpl = () => {
  return (
    <div
      style={{ width: '100%', height: '100%', minHeight: 320 }}
      className="w-full h-full min-h-[320px] flex items-center justify-center"
    >
      <Canvas
        camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}
        className="!w-full !h-[320px] sm:!h-[400px] md:!h-[600px] lg:!h-[750px] xl:!h-[900px] 2xl:!h-[1000px]"
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tubes curves={curves} />
        <BrainParticles curves={curves} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default BrainAnimationImpl;
