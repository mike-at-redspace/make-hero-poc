/**
 * Domain types for the hero carousel feed and active-slide state machine.
 */

/** One row in the carousel feed (CMS-shaped; cast HTML may appear in `castNames`). */
export interface CarouselItem {
  id: string;
  showTitle: string;
  about: string;
  brandName?: string;
  genre: string;
  numSeasons: number;
  /** Raw cast markup from the API; `null` when the feed omits cast (e.g. some docs). */
  castNames: string | null;
  thumb: string;
  poster: string;
  logo: string | null;
  rating: string;
  seasonCounts: string;
  premiereDate: string;
  button: { label: string; url?: string };
}

/** Reducer state: which tile is active and last navigation direction for motion layout. */
export interface ActiveItemState {
  activeIndex: number;
  /** -1 / 0 / +1 from `deriveDirection`; consumed by hero meta animations. */
  direction: number;
}

/** Discriminated actions for `useActiveItem` (single reducer, no external dispatch). */
export type ActiveItemAction =
  | { type: "SET_INDEX"; payload: number; direction?: number }
  | { type: "NEXT"; maxIndex: number }
  | { type: "PREV" };
