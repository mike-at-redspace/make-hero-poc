import { forwardRef } from "react";
import { motion, type MotionValue } from "motion/react";
import type { CarouselDragBind } from "../hooks/useDragCarousel";
import styles from "./CarouselTrack.module.css";

interface Props {
  children: React.ReactNode;
  x: MotionValue<number>;
  bindDrag: CarouselDragBind;
  activeIndex: number;
  itemCount: number;
}

/**
 * Horizontal `listbox` track: motion offset for drag feedback and `aria-activedescendant` wiring.
 */
export const CarouselTrack = forwardRef<HTMLDivElement, Props>(
  ({ children, x, bindDrag, activeIndex, itemCount: _itemCount }, ref) => (
    <div className={styles.trackWrapper}>
      <motion.div
        ref={ref}
        role="listbox"
        aria-label="Content carousel"
        aria-orientation="horizontal"
        aria-activedescendant={`carousel-tile-${activeIndex}`}
        className={styles.track}
        style={{ x }}
        {...bindDrag()}
      >
        {children}
      </motion.div>
    </div>
  ),
);
CarouselTrack.displayName = "CarouselTrack";
