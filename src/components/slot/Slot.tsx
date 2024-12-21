import React from 'react';

const SLOT_NAME = 'Slot';

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLElement | null>;
}

const Slot: React.FC<SlotProps> = ({ children, ...props }) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { ...props });
  }

  return null;
};

Slot.displayName = SLOT_NAME;

export { Slot };
export type { SlotProps };
