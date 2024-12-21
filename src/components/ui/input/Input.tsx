import React, { useId } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils';
import { inputVariants } from './inputVariants';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  ref?: React.Ref<HTMLInputElement | null>;
  error?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { error, className, variant, inputSize, disabled, id, ...inputProps } = props;
  const uniqueId = useId();
  const inputId = id ? id : `${uniqueId}-input`;

  return (
    <input
      id={inputId}
      aria-invalid={error}
      aria-describedby={error ? `${inputId}-error` : undefined}
      aria-required={inputProps.required}
      data-disabled={disabled}
      data-invalid={error}
      disabled={disabled}
      // disable default browser behaviour of showing built-in error message on hover
      title=''
      className={cn(inputVariants({ variant, inputSize }), className)}
      {...inputProps}
    />
  );
};

Input.displayName = 'Input';

export { Input };
export type { InputProps };
