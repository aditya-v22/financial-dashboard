import { useCallback, useRef, useState } from 'react';
import { KEYS } from '../../constants/keys';
import { RovingFocusContext } from './context';

/* -------------------------------------------------------------------------------------------------
 * RovingFocusProvider
 * -----------------------------------------------------------------------------------------------*/

const PROVIDER_NAME = 'RovingFocusProvider';

const RovingFocusProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const refs = useRef<Map<string, HTMLElement | HTMLButtonElement | null>>(new Map());
  const [currentId, setCurrentId] = useState<string | null>(null);

  const registerRef = (id: string, ref: HTMLElement | null) => {
    if (!id) {
      throw new Error('registerRef: id must be a non-empty string');
    }

    if (refs.current.has(id)) {
      return;
    }

    if (!ref) {
      console.warn(`registerRef: ref for id "${id}" is null or undefined.`);
      return;
    }

    refs.current.set(id, ref);
  };

  /**
   * Currently it handles only ARROW_LEFT and ARROW_RIGHT keys
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (!refs.current.size || ![KEYS.ARROW_LEFT, KEYS.ARROW_RIGHT].includes(event.key)) return;

      const ids = Array.from(refs.current.keys());
      const currentIndex = ids.indexOf(currentId ?? '');

      let nextIndex = currentIndex;
      if (event.key === KEYS.ARROW_RIGHT) {
        nextIndex = (currentIndex + 1) % ids.length;
      } else if (event.key === KEYS.ARROW_LEFT) {
        nextIndex = (currentIndex - 1 + ids.length) % ids.length;
      }

      // Loop to find the next/previous enabled item in the correct direction
      let attemptCount = 0;
      const direction = event.key === KEYS.ARROW_RIGHT ? 1 : -1;

      while (attemptCount < ids.length) {
        const nextId = ids[nextIndex];
        const nextButton = refs.current.get(nextId);

        // Check if the next item is enabled (not disabled)
        if (nextButton && !(nextButton as HTMLButtonElement)?.disabled) {
          setCurrentId(nextId);
          nextButton.focus();
          return;
        }

        // Adjust nextIndex based on the direction (right or left)
        nextIndex = (nextIndex + direction + ids.length) % ids.length;
        attemptCount++;
      }
    },
    [currentId]
  );

  return (
    <RovingFocusContext value={{ registerRef, handleKeyDown, currentId, setCurrentId }}>{children}</RovingFocusContext>
  );
};

RovingFocusProvider.displayName = PROVIDER_NAME;

/* -------------------------------------------------------------------------------------------------
 * Export
 * -----------------------------------------------------------------------------------------------*/

export { RovingFocusProvider };
