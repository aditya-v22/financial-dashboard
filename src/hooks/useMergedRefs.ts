import { useCallback } from 'react';

type Ref<T> = React.Ref<T>;

/**
 * A hook to merge multiple refs into one.
 * It ensures all refs are updated whenever the node changes.
 *
 * @param refs - An array of refs to be merged.
 * @returns A callback ref that updates all the provided refs.
 */
function useMergedRefs<T>(...refs: (Ref<T> | null | undefined)[]): (node: T | null) => void {
  return useCallback(
    (node) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === 'function') {
          ref(node);
        } else {
          ref.current = node;
        }
      });

      return () => {
        // Clear all refs when the component unmounts
        refs.forEach((ref) => {
          if (!ref) return;

          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        });
      };
    },
    [refs]
  );
}

export { useMergedRefs };
