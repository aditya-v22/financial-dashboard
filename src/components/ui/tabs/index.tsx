import { PropsWithChildren, useId, useMemo, useRef } from 'react';
import { useControllableState } from '../../../hooks/useControllableState';
import { TabsContext, useTabsContext } from './context';
import { cn } from '../../../utils';
import { RovingFocusProvider, useRovingFocus } from '../../roving-focus';
import { useMergedRefs } from '../../../hooks/useMergedRefs';
import { composeEventHandlers } from '../../../utils/eventUtils';
import { KEYS } from '../../../constants/keys';

/* -------------------------------------------------------------------------------------------------
 * Tabs
 * -----------------------------------------------------------------------------------------------*/

const TABS_NAME = 'Tabs';

interface TabsProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement | null>;
  /** The value for the selected tab, if controlled */
  value?: string;
  /** The value of the tab to select by default, if uncontrolled */
  defaultValue?: string;
  /** A function called when a new tab is selected */
  onValueChange?: (value: string) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultValue, onValueChange, value: valueProp, className, ...tabsProps } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const providerValue = useMemo(() => ({ value, onValueChange: setValue }), [setValue, value]);

  return (
    <TabsContext value={providerValue}>
      <div
        className={cn('w-full', className)}
        {...tabsProps}
      />
    </TabsContext>
  );
};

Tabs.displayName = TABS_NAME;

/* -------------------------------------------------------------------------------------------------
 * TabsList
 * -----------------------------------------------------------------------------------------------*/

const TAB_LIST_NAME = 'TabsList';

interface TabsListProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement | null>;
}

const TabsList: React.FC<TabsListProps> = (props) => {
  const { className, ...tabsListProps } = props;

  return (
    <RovingFocusProvider>
      <div
        role='tablist'
        className={cn(
          'w-full h-full overflow-x-auto overflow-y-hidden scrollbar flex gap-3 md:gap-10 border-b border-gray-100',
          className
        )}
        {...tabsListProps}
      />
    </RovingFocusProvider>
  );
};

TabsList.displayName = TAB_LIST_NAME;

/* -------------------------------------------------------------------------------------------------
 * TabsTrigger
 * -----------------------------------------------------------------------------------------------*/

const TABS_TRIGGER_NAME = 'TabsTrigger';

interface TabsTriggerProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  ref?: React.Ref<HTMLButtonElement | null>;
}

const TabsTrigger: React.FC<TabsTriggerProps> = (props) => {
  const { value, className, disabled, id, children, ...tabsTriggerProps } = props;

  const uniqueId = useId();
  const buttonId = id ?? `${uniqueId}-${value}-tab`;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const context = useTabsContext();
  const rovingFocusContext = useRovingFocus({ scope: 'TabsList' });
  const mergedRef = useMergedRefs(buttonRef, props?.ref, (node) => {
    rovingFocusContext.registerRef(buttonId, node);
  });

  const isSelected = context.value === value;

  return (
    <button
      type='button'
      role='tab'
      aria-selected={isSelected}
      aria-controls={`${uniqueId}-${value}-panel`}
      data-state={isSelected ? 'active' : 'inactive'}
      data-disabled={disabled ? '' : undefined}
      disabled={disabled}
      id={buttonId}
      className={cn(
        'group/tab flex-shrink-0 relative px-2 md:px-4 pb-2.5 text-[13px] md:text-base text-primary-100 font-medium transition-all hover:text-gray-950/70 focus-within:text-gray-950/70 focus-within:outline-none outline-none data-[state=active]:text-gray-950 data-[disabled]:text-gray-200 data-[disabled]:cursor-not-allowed',
        className
      )}
      {...tabsTriggerProps}
      ref={mergedRef}
      onMouseDown={composeEventHandlers(props.onMouseDown, (event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context?.onValueChange?.(value);
        } else {
          // prevent focus to avoid accidental activation
          event.preventDefault();
        }
      })}
      onKeyDown={composeEventHandlers(props.onKeyDown, (event) => {
        if (!disabled) {
          if ([KEYS.SPACE, KEYS.ENTER].includes(event.key)) context?.onValueChange?.(value);

          if ([KEYS.ARROW_LEFT, KEYS.ARROW_RIGHT].includes(event.key)) rovingFocusContext.handleKeyDown(event);
        }
      })}
      onFocus={composeEventHandlers(props.onFocus, () => {
        rovingFocusContext.setCurrentId(buttonId);
      })}
    >
      <div className='absolute hidden group-data-[state=active]/tab:block border-gray-950 w-full border-t-[3px] rounded-t-small left-0 -bottom-px' />

      {children}
    </button>
  );
};

TabsTrigger.displayName = TABS_TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * TabsContent
 * -----------------------------------------------------------------------------------------------*/

const TABS_CONTENT_NAME = 'TabsContent';

interface TabsContentProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement | null>;
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = (props) => {
  const { value, className, id, children, ...tabsContentProps } = props;
  const context = useTabsContext();
  const uniqueId = useId();
  const tabpanelId = id ?? `${uniqueId}-${value}-tabpanel`;
  const isSelected = context.value === value;

  return (
    <div
      role='tabpanel'
      id={tabpanelId}
      aria-labelledby={`${uniqueId}-${value}-tab`}
      data-state={isSelected ? 'active' : 'inactive'}
      className={cn('hidden data-[state=active]:block transition-all', className)}
      tabIndex={0}
      {...tabsContentProps}
    >
      {isSelected && children}
    </div>
  );
};

TabsContent.displayName = TABS_CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * Export
 * -----------------------------------------------------------------------------------------------*/

export { Tabs, TabsList, TabsTrigger, TabsContent };
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps };
