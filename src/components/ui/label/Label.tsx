import React, { forwardRef } from 'react';
import { cn } from '../../../utils';

const LABEL_NAME = 'Label';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  /** custom required content */
  requiredContent?: React.ReactNode;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { children, required, className, requiredContent = <span>*</span>, ...labelProps } = props;

  return (
    <label
      className={cn('inline-flex items-center gap-1 text-gray-950', className)}
      {...labelProps}
      ref={ref}
    >
      {children}
      {required && requiredContent}
    </label>
  );
});

Label.displayName = LABEL_NAME;

export { Label };
export type { LabelProps };
