import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'outline-none text-xs md:text-[15px] data-[disabled=true]:cursor-not-allowed appearance-none group-[input]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  {
    variants: {
      variant: {
        default:
          'bg-light rounded-small md:rounded-medium caret-primary-100 text-primary-100 ring-1 ring-primary-100 placeholder:text-primary-100/40 hover:bg-light hover:ring-primary-600/50 focus:ring-1 focus:ring-primary-600/80 data-[disabled=true]:bg-gray-100/70 data-[disabled=true]:text-gray-200 data-[invalid=true]:ring-error-500/60',
        // TODO: add more variants
      },
      inputSize: {
        default: 'min-h-10 max-h-10 md:min-h-[50px] md:max-h-[50px] py-3.5 md:py-4 px-3 md:px-5',
        // TODO: add more sizes
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);
