/**
 * Combines two event handlers, ensuring both are called.
 *
 * @param {Function} [originalEventHandler] - The first event handler.
 * @param {Function} [ourEventHandler] - The second event handler.
 * @param {Object} [options] - Options for event handling.
 * @param {boolean} [options.checkForDefaultPrevented=true] - If true, skips `ourEventHandler` if the event's default action is prevented.
 *
 * @returns {Function} A handler that calls both event handlers.
 */
function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

export { composeEventHandlers };
