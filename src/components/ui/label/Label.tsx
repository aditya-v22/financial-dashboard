import React from 'react';
import { cn } from '../../../utils';

const LABEL_NAME = 'Label';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLLabelElement | null>;
  required?: boolean;
  /** custom required content */
  requiredContent?: React.ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
  const { children, required, className, requiredContent = <span>*</span>, ...labelProps } = props;

  return (
    <label
      className={cn('inline-flex items-center gap-1 text-gray-950', className)}
      {...labelProps}
    >
      {children}
      {required && requiredContent}
    </label>
  );
};

Label.displayName = LABEL_NAME;

export { Label };
export type { LabelProps };
