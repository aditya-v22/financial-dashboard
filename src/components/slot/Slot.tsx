import React, { forwardRef } from 'react';

const SLOT_NAME = 'Slot';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Slot = forwardRef<HTMLElement, SlotProps>(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { ...props, ref });
  }

  return null;
});

Slot.displayName = SLOT_NAME;

export { Slot };
export type { SlotProps };
