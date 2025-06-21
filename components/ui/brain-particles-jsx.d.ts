// TypeScript declaration for custom BrainParticleMaterial in JSX
import { ShaderMaterial } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      BrainParticleMaterial: React.DetailedHTMLProps<React.HTMLAttributes<ShaderMaterial>, ShaderMaterial> & {
        attach?: string;
        depthTest?: boolean;
        depthWrite?: boolean;
        transparent?: boolean;
        blending?: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
      };
    }
  }
}
export {};
