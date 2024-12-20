import React, { forwardRef } from 'react';
import { cn } from '../../../utils';

const LABEL_NAME = 'Label';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  requiredText?: string;
  requiredTextClassName?: HTMLLabelElement['className'];
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { children, required, className, requiredText, requiredTextClassName, ...labelProps } = props;

  return (
    <label
      className={cn('inline-flex items-center gap-2 text-gray-950', className)}
      {...labelProps}
      ref={ref}
    >
      {children}
      {(required || requiredText) && <span className={requiredTextClassName}>{requiredText || '*'}</span>}
    </label>
  );
});

Label.displayName = LABEL_NAME;

export { Label };
export type { LabelProps };
