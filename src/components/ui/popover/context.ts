import { createContext, useContext } from 'react';

interface PopoverContextType {
  isOpen?: boolean;
  open: () => void;
  close: () => void;
  triggerAnchorEl: HTMLElement | null;
  setTriggerAnchorEl: (anchorEl: HTMLElement | null) => void;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover components must be used within a Popover');
  }
  return context;
};

export { usePopoverContext, PopoverContext };
export type { PopoverContextType };
