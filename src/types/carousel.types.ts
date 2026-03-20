export interface CarouselItem {
  id: string;
  showTitle: string;
  about: string;
  brandName?: string;
  genre: string;
  numSeasons: number;
  castNames: string;
  thumb: string;
  poster: string;
  logo: string | null;
  rating: string;
  seasonCounts: string;
  premiereDate: string;
  button: { label: string; url?: string };
}

export interface ActiveItemState {
  activeIndex: number;
  direction: number;
}

export type ActiveItemAction =
  | { type: "SET_INDEX"; payload: number; direction?: number }
  | { type: "NEXT"; maxIndex: number }
  | { type: "PREV" };
