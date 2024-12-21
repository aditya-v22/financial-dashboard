import { createContext, useContext } from 'react';

interface RovingFocusContextValue {
  registerRef: (id: string, ref: HTMLElement | null) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  currentId: string | null;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>;
}

const RovingFocusContext = createContext<RovingFocusContextValue | undefined>(undefined);

/* -------------------------------------------------------------------------------------------------
 * useRovingFocus
 * -----------------------------------------------------------------------------------------------*/

interface RovingFocusContextArgs {
  scope?: string;
}

const useRovingFocus = ({ scope }: RovingFocusContextArgs): RovingFocusContextValue => {
  const context = useContext(RovingFocusContext);
  if (!context) {
    throw new Error(`Items should be used within a ${scope ?? 'RovingFocusProvider'}`);
  }
  return context;
};

export { RovingFocusContext, useRovingFocus };
export type { RovingFocusContextValue };
