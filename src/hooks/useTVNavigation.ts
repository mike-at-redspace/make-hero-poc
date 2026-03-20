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
 * Global keyboard / D-pad navigation for the carousel.
 * Uses a ref for activeIndex to avoid re-attaching the listener on every
 * index change — the handler closure stays stable across renders.
 */
export const useTVNavigation = (
  itemCount: number,
  activeIndex: number,
  setIndex: (index: number) => void,
  onEnter?: () => void,
  onSpace?: () => void,
) => {
  // Stable ref so the event listener never needs to be replaced for index changes
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
      // Don't hijack keystrokes inside form controls
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
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
  }, []); // intentionally empty — state is accessed via ref
};
