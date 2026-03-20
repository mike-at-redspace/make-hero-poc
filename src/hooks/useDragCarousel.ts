import { useDrag } from "@use-gesture/react";
import { useMotionValue, useSpring, type MotionValue } from "motion/react";

const DRAG_THRESHOLD = 50;
const EDGE_RESISTANCE = 0.15;

/**
 * Whether this gesture should drive the carousel. Pointer events expose `pointerType`;
 * legacy mouse/touch events are treated as their respective modalities.
 */
function isMouseOrTouchInput(
  event: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent,
): boolean {
  if (event instanceof PointerEvent) {
    return event.pointerType === "mouse" || event.pointerType === "touch";
  }
  if (event instanceof MouseEvent) return true;
  if (event instanceof TouchEvent) return true;
  return false;
}

/** Spread props from `useDrag` (default target) for the track surface. */
export type CarouselDragBind = Exclude<ReturnType<typeof useDrag>, void>;

export type UseDragCarouselResult = {
  bind: CarouselDragBind;
  x: MotionValue<number>;
};

/**
 * Horizontal drag with spring-backed offset and edge rubber-banding.
 * Ignores pen/stylus and keyboard so those inputs do not fight TV/keyboard navigation.
 */
export function useDragCarousel(
  itemCount: number,
  activeIndex: number,
  setIndex: (index: number) => void,
): UseDragCarouselResult {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });

  const bind = useDrag(
    ({ active, movement: [mx], canceled, event }) => {
      if (!isMouseOrTouchInput(event)) return;

      if (!active && !canceled) {
        if (mx < -DRAG_THRESHOLD && activeIndex < itemCount - 1)
          setIndex(activeIndex + 1);
        else if (mx > DRAG_THRESHOLD && activeIndex > 0)
          setIndex(activeIndex - 1);
        x.set(0);
        return;
      }

      const atStart = activeIndex === 0 && mx > 0;
      const atEnd = activeIndex === itemCount - 1 && mx < 0;
      x.set(atStart || atEnd ? mx * EDGE_RESISTANCE : mx);
    },
    { axis: "x", filterTaps: true },
  );

  return { bind, x: springX };
}
