import { cva } from 'class-variance-authority';

export const creditCardVariants = cva(
  [
    'min-w-[265px] h-[170px] md:w-[350px] md:h-[235px] rounded-large', // Root container
    '[&_.label]:text-[10px] md:[&_.label]:text-xs [&_.label]:font-lato [&_.label]:leading-[14px]', // Label text
    '[&_.description]:font-semibold [&_.description]:text-[13px] md:[&_.description]:text-[15px] [&_.description]:font-lato [&_.label]:leading-[18px]', // Description text
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
