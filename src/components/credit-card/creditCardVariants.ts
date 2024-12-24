import { cva } from 'class-variance-authority';

export const creditCardVariants = cva(
  [
    'w-[350px] h-[235px] rounded-large', // Root container
    '[&_.label]:text-xs [&_.label]:font-lato [&_.label]:leading-[14px]', // Label text
    '[&_.description]:font-semibold [&_.description]:text-[15px] [&_.description]:font-lato [&_.label]:leading-[18px]', // Description text
  ],
  {
    variants: {
      variant: {
        primary: [
          'border border-primary-100 bg-light', // Root container
          '[&_.label]:text-primary-100', // Label text
          '[&_.description]:text-primary-900', // Description text
        ],
        secondary: [
          'bg-credit-card', // Root container
          '[&_.label]:text-light', // Label text
          '[&_.description]:text-light', // Description text
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
