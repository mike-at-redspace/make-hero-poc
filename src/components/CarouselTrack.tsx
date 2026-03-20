import { forwardRef } from "react";
import { motion, type MotionValue } from "motion/react";
import styles from "./CarouselTrack.module.css";

interface Props {
  children: React.ReactNode;
  x: MotionValue<number>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bindDrag: (...args: any[]) => Record<string, unknown>;
  activeIndex: number;
  itemCount: number;
}

export const CarouselTrack = forwardRef<HTMLDivElement, Props>(
  ({ children, x, bindDrag, activeIndex }, ref) => (
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
