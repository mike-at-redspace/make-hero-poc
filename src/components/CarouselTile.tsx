import { memo, useRef, useEffect } from "react";
import { motion } from "motion/react";
import styles from "./CarouselTile.module.css";
import type { CarouselItem } from "../types/carousel.types";

interface Props {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const CarouselTile = memo(
  ({ item, index, isActive, onClick }: Props) => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      if (isActive)
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
    }, [isActive]);

    return (
      <motion.button
        ref={ref}
        id={`carousel-tile-${index}`}
        role="option"
        aria-selected={isActive}
        aria-label={item.showTitle}
        /* Only the active tile is in the natural tab order.
         Arrow keys (handled globally) move focus within the listbox. */
        tabIndex={isActive ? 0 : -1}
        className={`${styles.tile} ${isActive ? styles.active : ""}`}
        onClick={onClick}
        whileHover={!isActive ? { scale: 1.03 } : {}}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={item.thumb}
          alt=""
          aria-hidden="true"
          loading={isActive ? "eager" : "lazy"}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        {/* Overlay label for low-vision / screen readers */}
        <span className={styles.srLabel}>{item.showTitle}</span>
      </motion.button>
    );
  },
);
CarouselTile.displayName = "CarouselTile";
