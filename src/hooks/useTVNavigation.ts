import { useEffect, useRef } from "react";

const NAV_KEYS = new Set([
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "Enter",
  " ",
]);

/**
 * Window-level keyboard / D-pad handling for the carousel.
 *
 * @remarks
 * The keydown listener uses an intentionally empty dependency array: fresh values are read from
 * {@link stateRef} on each event so the handler identity stays stable and is not re-bound every slide.
 */
export function useTVNavigation(
  itemCount: number,
  activeIndex: number,
  setIndex: (index: number) => void,
  onEnter?: () => void,
  onSpace?: () => void,
): void {
  const stateRef = useRef({
    activeIndex,
    itemCount,
    setIndex,
    onEnter,
    onSpace,
  });

  useEffect(() => {
    stateRef.current = { activeIndex, itemCount, setIndex, onEnter, onSpace };
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (!NAV_KEYS.has(e.key)) return;

      e.preventDefault();

      const {
        activeIndex: idx,
        itemCount: count,
        setIndex: go,
        onEnter: enter,
        onSpace: space,
      } = stateRef.current;

      switch (e.key) {
        case "ArrowLeft":
          if (idx > 0) go(idx - 1);
          break;
        case "ArrowRight":
          if (idx < count - 1) go(idx + 1);
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(count - 1);
          break;
        case "Enter":
          enter?.();
          break;
        case " ":
          space?.();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
