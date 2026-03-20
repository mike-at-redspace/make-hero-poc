import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import type { CarouselItem } from "../types/carousel.types";
import { CastPills } from "./CastPills";
import { CtaButton } from "./CtaButton";
import { ResponsiveImage } from "./ResponsiveImage";
import styles from "./HeroMeta.module.css";

interface Props {
  item: CarouselItem;
  direction: number;
}

// ─── Animation variants ───────────────────────────────────────────────────────

const EASE = [0.4, 0, 0.2, 1] as const;

/** Parent: owns stagger timing, children inherit the `custom` direction */
const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

/** Each meta slot slides + fades + de-blurs from the direction of travel */
const slotVariants: Variants = {
  initial: (dir: number) => ({
    opacity: 0,
    y: dir >= 0 ? 22 : -22,
    filter: "blur(10px)",
  }),
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.48, ease: EASE },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir >= 0 ? -14 : 14,
    filter: "blur(8px)",
    transition: { duration: 0.3, ease: EASE },
  }),
};

// ─── Small helper so each stagger slot has minimal boilerplate ────────────────
const Slot = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div variants={slotVariants} className={className}>
    {children}
  </motion.div>
);

// ─── Component ────────────────────────────────────────────────────────────────

export const HeroMeta = ({ item, direction }: Props) => {
  const [logoError, setLogoError] = useState(false);
  useEffect(() => setLogoError(false), [item.id]);

  const showLogo = Boolean(item.logo) && !logoError;

  return (
    <div
      className={styles.container}
      role="region"
      aria-label="Show information"
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={item.id}
          custom={direction}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.inner}
        >
          {/* 1 ── Show logo / title fallback */}
          <Slot>
            {showLogo ? (
              <ResponsiveImage
                src={item.logo!}
                alt={item.showTitle}
                width={580}
                sizes="(max-width: 768px) 100vw, (max-width: 2051px) 78vw, 1600px"
                className={styles.logo}
                onError={() => setLogoError(true)}
              />
            ) : (
              <h1 className="pp-title-fallback">{item.showTitle}</h1>
            )}
          </Slot>

          {/* 2 ── Meta bar  [brand?] · [year] · [■rating■] · [seasons] · [genre] */}
          <Slot>
            <div
              className={styles.metaBar}
              role="list"
              aria-label="Show details"
            >
              {item.brandName && (
                <span role="listitem" className={styles.brandBadge}>
                  {item.brandName}
                </span>
              )}
              {item.premiereDate && (
                <span role="listitem" className={styles.metaToken}>
                  {item.premiereDate}
                </span>
              )}
              {item.rating && (
                <>
                  <span className={styles.metaDot} aria-hidden="true">
                    ·
                  </span>
                  <span role="listitem" className={styles.ratingBadge}>
                    {item.rating}
                  </span>
                </>
              )}
              {item.seasonCounts && (
                <>
                  <span className={styles.metaDot} aria-hidden="true">
                    ·
                  </span>
                  <span role="listitem" className={styles.metaToken}>
                    {item.seasonCounts}
                  </span>
                </>
              )}
              {item.genre && (
                <>
                  <span className={styles.metaDot} aria-hidden="true">
                    ·
                  </span>
                  <span role="listitem" className={styles.metaToken}>
                    {item.genre}
                  </span>
                </>
              )}
            </div>
          </Slot>

          {/* 3 ── Synopsis */}
          {item.about && (
            <Slot>
              <p className={styles.description}>{item.about}</p>
            </Slot>
          )}

          {/* 4 ── Cast */}
          {item.castNames && (
            <Slot>
              <div className={styles.castRow}>
                <CastPills castNames={item.castNames} />
              </div>
            </Slot>
          )}

          {/* 5 ── CTA */}
          <Slot>
            <div className={styles.ctaRow}>
              <CtaButton href={item.button?.url}>
                {item.button?.label ?? "Watch Now"}
              </CtaButton>
            </div>
          </Slot>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
