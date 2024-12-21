import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { PopoverContext, usePopoverContext } from './context';
import { useControllableState } from '../../../hooks/useControllableState';
import { Slot } from '../../slot';
import { useFloating, type Placement } from '@floating-ui/react-dom';
import { useEventListener } from '../../../hooks/useEventListener';
import { cn } from '../../../utils';
import { useMergedRefs } from '../../../hooks/useMergedRefs';
import { composeEventHandlers } from '../../../utils/eventUtils';
import { KEYS } from '../../../constanst/keys';

/* -------------------------------------------------------------------------------------------------
 * Popover
 * -----------------------------------------------------------------------------------------------*/

const POPOVER_NAME = 'Popover';

interface PopoverProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Popover: React.FC<PopoverProps> = (props) => {
  const { children, open, defaultOpen, onOpenChange } = props;
  const [triggerAnchorEl, setTriggerAnchorEl] = useState<HTMLElement | null>(null);

  const [isOpen, setOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const popoverProviderValues = useMemo(
    () => ({
      isOpen,
      triggerAnchorEl,
      setTriggerAnchorEl,
      open: () => setOpen(true),
      close: () => {
        setOpen(false);
        if (triggerAnchorEl) {
          setTriggerAnchorEl(null);
        }
      },
    }),
    [isOpen, setOpen, triggerAnchorEl]
  );

  return <PopoverContext.Provider value={popoverProviderValues}>{children}</PopoverContext.Provider>;
};

Popover.displayName = POPOVER_NAME;

/* -------------------------------------------------------------------------------------------------
 * PopoverTrigger
 * -----------------------------------------------------------------------------------------------*/

const POPOVER_TRIGGER_NAME = 'PopoverTrigger';

interface PopoverTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  asChild?: boolean;
  error?: boolean;
  className?: HTMLElement['className'];
  showActiveState?: boolean;
}

const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>((props, ref) => {
  const { children, disabled, asChild, className, error, showActiveState, ...triggerProps } = props;

  const Element = asChild ? Slot : 'button';

  const context = usePopoverContext();

  const toggle = useCallback(() => {
    if (context.isOpen) {
      context.close();
    } else {
      context.open();
    }
  }, [context.isOpen]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false) {
        toggle();
      } else {
        // prevent focus to avoid accidental activation
        event.preventDefault();
      }
    },
    [disabled, toggle]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!disabled) {
        if ([KEYS.SPACE, KEYS.ENTER].includes(event.key)) {
          toggle();
          return;
        }

        if (KEYS.ESCAPE === event.key) {
          context.close();
          return;
        }
      }
    },
    [context, disabled, toggle]
  );

  const handleBlur = useCallback(() => {
    if (!context.isOpen) {
      context?.setFocused?.(false);
      context.close();
    }
  }, [context]);

  const handleFocus = useCallback(() => {
    if (context.focused === false) {
      context?.setFocused?.(true);
    }
  }, [context]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      context.setTriggerAnchorEl(context.triggerAnchorEl ? null : event.currentTarget);
    },
    [context]
  );

  return (
    <Element
      role='button'
      aria-haspopup='true'
      aria-expanded={context.isOpen}
      aria-disabled={disabled}
      aria-invalid={error}
      data-disabled={disabled}
      data-invalid={error}
      data-active={showActiveState && context.isOpen}
      tabIndex={0}
      className={cn('data-[active=true]:ring-primary-600/80', className)}
      disabled={disabled}
      {...triggerProps}
      onClick={composeEventHandlers(props?.onClick, handleClick)}
      onMouseDown={composeEventHandlers(props?.onMouseDown, handleMouseDown)}
      onKeyDown={composeEventHandlers(props?.onKeyDown, handleKeyDown)}
      onFocus={composeEventHandlers(props?.onFocus, handleFocus)}
      onBlur={composeEventHandlers(props?.onBlur, handleBlur)}
      ref={ref}
    >
      {children}
    </Element>
  );
});

PopoverTrigger.displayName = POPOVER_TRIGGER_NAME;

/* -------------------------------------------------------------------------------------------------
 * PopoverContent
 * -----------------------------------------------------------------------------------------------*/

const POPOVER_CONTENT_NAME = 'PopoverContent';

interface PopoverContentProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: HTMLElement['className'];
  side?: Placement;
  sideOffset?: number;
  alignOffset?: number;
}

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
  const { children, asChild, className, side, alignOffset, sideOffset, ...contentProps } = props;
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const mergedRef = useMergedRefs(popoverRef, ref);
  const { isOpen, close, triggerAnchorEl } = usePopoverContext();
  const Element = asChild ? Slot : 'div';

  const { floatingStyles, isPositioned } = useFloating({
    open: isOpen,
    elements: {
      reference: triggerAnchorEl,
      floating: popoverRef.current,
    },
    placement: side ?? 'bottom',
    middleware: [
      {
        name: 'offsets',
        fn(state) {
          state.x += alignOffset ?? 0;
          state.y += sideOffset ?? 10;
          return state;
        },
      },
    ],
  });

  // Close the popover when clicking outside
  const closePopover = useCallback(
    (event: Event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerAnchorEl?.contains(event.target as Node)
      ) {
        close();
      }
    },
    [triggerAnchorEl]
  );

  useEventListener('click', closePopover);

  if (!isOpen) {
    return;
  }

  return ReactDOM.createPortal(
    <Element
      role='dialog'
      aria-modal='true'
      aria-hidden={!isOpen}
      style={{ ...floatingStyles, width: triggerAnchorEl?.clientWidth }}
      className={cn('absolute z-10 p-4 bg-white shadow-lg rounded-lg border border-gray-300', className, {
        'opacity-0 pointer-events-none': !isPositioned,
      })}
      {...contentProps}
      ref={mergedRef}
    >
      {children}
    </Element>,
    document.body
  );
});

PopoverContent.displayName = POPOVER_CONTENT_NAME;

/* -------------------------------------------------------------------------------------------------
 * Export
 * -----------------------------------------------------------------------------------------------*/

export { Popover, PopoverTrigger, PopoverContent };
export type { PopoverProps, PopoverTriggerProps, PopoverContentProps };
