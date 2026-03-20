import { useRef, useCallback } from "react";
import { useActiveItem } from "../hooks/useActiveItem";
import { useDragCarousel } from "../hooks/useDragCarousel";
import { useTVNavigation } from "../hooks/useTVNavigation";
import type { CarouselItem } from "../types/carousel.types";
import { HeroStage } from "./HeroStage";
import { CarouselTrack } from "./CarouselTrack";
import { CarouselTile } from "./CarouselTile";

// React's HTMLLinkElement type doesn't include the lowercase fetchpriority attribute yet.
declare module "react" {
  interface LinkHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}

interface Props {
  items: CarouselItem[];
}

export const HeroCarousel = ({ items }: Props) => {
  const { activeIndex, direction, setIndex } = useActiveItem(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIndex];

  // Open the active item's watch URL (Enter / D-pad OK)
  const handleEnter = useCallback(() => {
    const url = items[activeIndex]?.button?.url;
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, [items, activeIndex]);

  // Space → move keyboard focus to the active carousel tile button
  const handleSpace = useCallback(() => {
    (
      document.getElementById(
        `carousel-tile-${activeIndex}`,
      ) as HTMLElement | null
    )?.focus();
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

  // Preload adjacent poster images for smooth transitions
  const adjacent = [items[activeIndex - 1], items[activeIndex + 1]].filter(
    Boolean,
  ) as CarouselItem[];

  return (
    <div
      className="w-full h-[100dvh] min-h-[600px] grid overflow-x-hidden overflow-y-visible"
      style={{
        background: "var(--pp-black)",
        color: "var(--pp-white)",
        gridTemplateRows: "minmax(0, 1fr) auto",
      }}
      role="region"
      aria-label="Featured Content"
      aria-roledescription="carousel"
    >
      {/* fetchpriority (lowercase) is the correct DOM attribute on <link>; fetchPriority only works on img/script */}
      {adjacent.map((item) => (
        <link
          key={item.id}
          rel="preload"
          as="image"
          href={item.poster}
          fetchpriority="high"
        />
      ))}

      <HeroStage item={activeItem} direction={direction} />

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
  );
};
