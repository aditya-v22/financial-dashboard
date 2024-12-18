import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes and resolve conflicts
export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
