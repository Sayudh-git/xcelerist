import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility for random range, used by brain-particles
export const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
