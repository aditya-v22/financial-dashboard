import { cva } from 'class-variance-authority';

export const paymentPlatformVariants = cva(
  'w-[50px] h-[50px] md:h-[55px] md:w-[55px] flex justify-center items-center rounded-full flex-shrink-0',
  {
    variants: {
      platformType: {
        card: 'bg-warning-50 text-warning-300',
        paypal: 'bg-primary-100 text-primary-600',
        other: 'bg-secondary-50 text-secondary-300',
      },
    },
    defaultVariants: {
      platformType: 'card',
    },
  }
);
