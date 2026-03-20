import type { ReactElement } from "react";
import { useRef, useCallback } from "react";
import { useActiveItem } from "../hooks/useActiveItem";
import { useDragCarousel } from "../hooks/useDragCarousel";
import { useTVNavigation } from "../hooks/useTVNavigation";
import type { CarouselItem } from "../types/carousel.types";
import { HeroStage } from "./HeroStage";
import { CarouselTrack } from "./CarouselTrack";
import { CarouselTile } from "./CarouselTile";
import styles from "./HeroCarousel.module.css";

interface Props {
  readonly items: readonly CarouselItem[];
}

/**
 * Featured carousel: stage + tile strip, keyboard/TV nav, drag, and adjacent poster preloads.
 * Width-first stage aspect + flex shell (min-height 100dvh); track is bottom-pinned via margin-top: auto.
 */
export function HeroCarousel({ items }: Props): ReactElement | null {
  const { activeIndex, direction, setIndex } = useActiveItem(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex];

  const handleEnter = useCallback(() => {
    const url = items[activeIndex]?.button?.url;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, [items, activeIndex]);

  const handleSpace = useCallback(() => {
    document.getElementById(`carousel-tile-${activeIndex}`)?.focus();
  }, [activeIndex]);

  useTVNavigation(
    items.length,
    activeIndex,
    setIndex,
    handleEnter,
    handleSpace,
  );

  const { bind, x } = useDragCarousel(items.length, activeIndex, setIndex);

  if (!activeItem) return null;

  const adjacent = [items[activeIndex - 1], items[activeIndex + 1]].filter(
    Boolean,
  ) as CarouselItem[];

  return (
    <div
      className={styles.shell}
      role="region"
      aria-label="Featured Content"
      aria-roledescription="carousel"
    >
      <div className={styles.preloads} aria-hidden>
        {adjacent.map((item) => (
          <link
            key={item.id}
            rel="preload"
            as="image"
            href={item.poster}
            fetchPriority="high"
          />
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.heroBand}>
          <HeroStage item={activeItem} direction={direction} />
        </div>
        <CarouselTrack
          ref={trackRef}
          x={x}
          bindDrag={bind}
          activeIndex={activeIndex}
          itemCount={items.length}
        >
          {items.map((item, i) => (
            <CarouselTile
              key={item.id}
              item={item}
              index={i}
              isActive={i === activeIndex}
              onClick={() => setIndex(i)}
            />
          ))}
        </CarouselTrack>
      </div>
    </div>
  );
}
