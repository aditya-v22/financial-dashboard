import { useCallback } from 'react';

type Ref<T> = React.Ref<T>;

/**
 * A hook to merge multiple refs into one.
 * It ensures all refs are updated whenever the node changes.
 *
 * @param refs - An array of refs to be merged.
 * @returns A callback ref that updates all the provided refs.
 */
function useMergedRefs<T>(...refs: Ref<T>[]): (node: T | null) => void {
  return useCallback(
    (node: T | null) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === 'function') {
          ref(node);
        } else {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    },
    [refs]
  );
}

export { useMergedRefs };
