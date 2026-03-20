import { memo, useRef, useEffect } from "react";
import { motion } from "motion/react";
import type { CarouselItem } from "../types/carousel.types";
import { classNames } from "../lib/classNames";
import { ResponsiveImage } from "./ResponsiveImage";
import styles from "./CarouselTile.module.css";

/** Matches height clamps in CarouselTile.module.css (.tile); width = 2/3 × height (aspect-2/3). */
const TILE_IMAGE_SIZES =
  "(min-width: 2560px) calc(2/3 * clamp(220px, 28vh, 520px)), (min-width: 1920px) calc(2/3 * clamp(220px, 28vh, 500px)), (max-width: 768px) calc(2/3 * clamp(200px, 24vh, 280px)), calc(2/3 * clamp(220px, 28vh, 300px))";

interface Props {
  item: CarouselItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

/** `listbox` option: thumb + focus/scroll sync; only the active tile stays tabbable. */
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
        tabIndex={isActive ? 0 : -1}
        className={classNames(styles.tile, isActive && styles.tileActive)}
        onClick={onClick}
        whileHover={!isActive ? { scale: 1.03 } : {}}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <ResponsiveImage
          src={item.thumb}
          alt=""
          width={400}
          height={600}
          crop
          sizes={TILE_IMAGE_SIZES}
          loading={isActive ? "eager" : "lazy"}
          className={styles.posterImage}
        />
        <span className={styles.srLabel}>{item.showTitle}</span>
      </motion.button>
    );
  },
);
CarouselTile.displayName = "CarouselTile";
