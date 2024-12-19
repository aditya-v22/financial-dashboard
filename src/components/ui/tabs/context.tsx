import { createContext, useContext } from 'react';

interface TabsContextType {
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within a Tabs');
  }
  return context;
};
