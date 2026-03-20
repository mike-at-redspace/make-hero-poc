/** Merge CSS module classes + optional `className` (see `CtaButton`, `CarouselTile`). */
type Argument =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean | null | undefined>;

export function classNames(...args: Argument[]): string {
  const out: string[] = [];
  for (const arg of args) {
    if (arg == null || arg === false) continue;
    if (typeof arg === "string" || typeof arg === "number") {
      if (arg !== "") out.push(String(arg));
    } else if (typeof arg === "object") {
      for (const key of Object.keys(arg)) {
        if (arg[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}
