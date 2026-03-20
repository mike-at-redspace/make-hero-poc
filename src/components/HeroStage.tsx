import { memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { CarouselItem } from "../types/carousel.types";
import { AmbientGlow } from "./AmbientGlow";
import { HeroMeta } from "./HeroMeta";
import { buildUrl, buildSrcset } from "./ResponsiveImage";
import styles from "./HeroStage.module.css";

interface Props {
  item: CarouselItem;
  direction: number;
}

const POSTER_TRANSITION = { duration: 0.75, ease: [0.4, 0, 0.2, 1] as const };

/** Full-bleed poster, ambient glow, and metadata stack for the active slide. */
export const HeroStage = memo(({ item, direction }: Props) => (
  <section className={styles.stage} aria-label="Hero Stage">
    <AmbientGlow item={item} />

    <div className={styles.posterLayer}>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={item.id}
          src={buildUrl({ src: item.poster, width: 1365, height: 768 })}
          srcSet={buildSrcset({ src: item.poster, width: 1365, height: 768 })}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width={1365}
          height={768}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={POSTER_TRANSITION}
          className="absolute inset-0 size-full object-cover object-right md:object-center"
        />
      </AnimatePresence>

      <div className={styles.vignette} aria-hidden />
    </div>

    <HeroMeta item={item} direction={direction} />
  </section>
));
HeroStage.displayName = "HeroStage";
