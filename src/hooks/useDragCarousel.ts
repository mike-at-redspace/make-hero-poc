import { useDrag } from "@use-gesture/react";
import { useMotionValue, useSpring } from "motion/react";

const DRAG_THRESHOLD = 50;
const EDGE_RESISTANCE = 0.15;

export const useDragCarousel = (
  itemCount: number,
  activeIndex: number,
  setIndex: (index: number) => void,
) => {
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });

  const bind = useDrag(
    ({ active, movement: [mx], pointerType, canceled }) => {
      if (pointerType !== "mouse" && pointerType !== "touch") return;

      if (!active && !canceled) {
        if (mx < -DRAG_THRESHOLD && activeIndex < itemCount - 1)
          setIndex(activeIndex + 1);
        else if (mx > DRAG_THRESHOLD && activeIndex > 0)
          setIndex(activeIndex - 1);
        x.set(0);
        return;
      }

      // Rubber-band resistance at edges
      const atStart = activeIndex === 0 && mx > 0;
      const atEnd = activeIndex === itemCount - 1 && mx < 0;
      x.set(atStart || atEnd ? mx * EDGE_RESISTANCE : mx);
    },
    { axis: "x", filterTaps: true },
  );

  return { bind, x: springX };
};
