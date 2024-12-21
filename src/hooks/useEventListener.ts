import { useEffect } from 'react';

/**
 * Adds a `document` event listener for the specified event.
 * Auto-cleans on component unmount.
 *
 * @param eventName Event to listen for.
 * @param handler Function to execute on event trigger.
 */
function useEventListener(eventName: string, handler: EventListener) {
  useEffect(() => {
    document.addEventListener(eventName, handler);

    return () => {
      document.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
}

export { useEventListener };
