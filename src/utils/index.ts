import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes and resolve conflicts
export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

/**
 * Formats a string to "XXXX ******** XXXX" pattern.
 *
 * @param input - The input string to mask.
 * @returns The formatted string.
 */
export const createMaskedString = (input: string, maskPattern?: string): string => {
  const firstPart = input.slice(0, 4);
  const lastPart = input.slice(-4);
  const maskedPart = maskPattern || '*********';

  return `${firstPart} ${maskedPart} ${lastPart}`;
};
