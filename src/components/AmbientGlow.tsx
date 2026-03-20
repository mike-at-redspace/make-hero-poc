import { AnimatePresence, motion } from "motion/react";
import type { CarouselItem } from "../types/carousel.types";
import styles from "./AmbientGlow.module.css";

interface Props {
  item: CarouselItem;
}

/** Blurred poster wash behind the hero (decorative; `aria-hidden`). */
export const AmbientGlow = ({ item }: Props) => (
  <div className={styles.root} aria-hidden="true">
    <AnimatePresence mode="popLayout">
      <motion.img
        key={item.id}
        src={item.poster}
        alt=""
        className={styles.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      />
    </AnimatePresence>
    <div className={styles.overlay} />
  </div>
);
