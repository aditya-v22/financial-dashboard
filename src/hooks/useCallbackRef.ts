/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useRef } from 'react';

/**
 * This hook prevents re-renders when the callback is passed as a prop
 * and avoids re-executing effects when used as a dependency.
 */
function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
}

export { useCallbackRef };
