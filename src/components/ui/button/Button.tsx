import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils';

const BUTTON_NAME = 'Button';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 outline-none ring-1 font-medium transition-all data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gray-950 text-light hover:bg-gray-950/80 hover:ring-gray-950/80 focus-visible:ring-2 focus-visible:ring-gray-950/80',
        ghost:
          'text-primary-900 bg-transparent ring-0 hover:ring-0 focus:ring-0 hover:bg-primary-100 active:bg-primary-100 focus-visible:ring-1 focus-visible:ring-red-500',
        // TODO: Update styles for below variants
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
      },
      size: {
        sm: 'px-3 py-1 text-sm rounded-md',
        md: 'px-4 py-2 text-base rounded-small',
        lg: 'min-h-10 max-h-10 md:max-h-[50px] md:min-h-[50px] px-[74px] py-3.5 text-[13px] md:text-lg rounded-medium',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const loadingVariants = cva('animate-spin rounded-full border-2 !border-t-transparent', {
  variants: {
    variant: {
      primary: 'border-light',
      // TODO: Update styles for below variants
      ghost: 'border-primary-900',
      secondary: 'border-gray-500',
      danger: 'border-red-500',
      outline: 'border-gray-300',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-4 w-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement | null>;
  loading?: boolean;
  loadingClassName?: HTMLElement['className'];
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    loadingClassName,
    variant,
    size,
    loading,
    children,
    disabled,
    'aria-label': ariaLabel,
    ...buttonProps
  } = props;

  return (
    <button
      type='button'
      role='button'
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-busy={loading}
      aria-disabled={loading || disabled}
      data-disabled={loading || disabled}
      disabled={loading || disabled}
      className={cn(buttonVariants({ variant, size }), className)}
      {...buttonProps}
    >
      {loading && (
        <span
          role='status'
          aria-hidden='true'
          className={cn(loadingVariants({ variant, size }), loadingClassName)}
        />
      )}
      {children}
    </button>
  );
};

Button.displayName = BUTTON_NAME;

export { Button };
export type { ButtonProps };
