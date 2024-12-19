import { forwardRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils';

const inputVariants = cva(
  'outline-none text-[15px] data-[disabled=true]:cursor-not-allowed appearance-none group-[input]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
  {
    variants: {
      variant: {
        default:
          'bg-light rounded-medium caret-primary-100 text-primary-100 ring-1 ring-primary-100 placeholder:text-primary-100/40 focus:ring-primary-600/80 data-[disabled=true]:bg-gray-100/70 data-[disabled=true]:text-gray-200 data-[invalid=true]:ring-error-500/60',
        // TODO: add more variants
      },
      inputSize: {
        default: 'h-[50px] max-h-[50px] py-4 px-5',
        // TODO: add more sizes
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, className, variant, inputSize, disabled, id, ...inputProps } = props;
  const uniqueId = useId();
  const inputId = id ? id : `${uniqueId}-input`;

  return (
    <input
      id={inputId}
      aria-invalid={!!error}
      aria-describedby={error ? `${props.id}-error` : undefined}
      data-disabled={disabled}
      data-invalid={!!error}
      disabled={disabled}
      // disable default browser behaviour of showing built-in error message on hover
      title=''
      className={cn(inputVariants({ variant, inputSize, className }))}
      {...inputProps}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';

export { Input };
export type { InputProps };
