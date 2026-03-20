import { memo, useMemo, type ImgHTMLAttributes } from "react";

const MAX_WIDTH = 4096;
const DENSITIES = [1, 2, 3] as const;

export type ResponsiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height?: number;
  crop?: boolean;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
} & Pick<ImgHTMLAttributes<HTMLImageElement>, "onError">;

type BuildUrlOptions = {
  readonly src: string;
  readonly width: number;
  readonly height?: number;
  readonly crop?: boolean;
};

/**
 * Builds a Paramount CDN-style URL, appending `width`/`height`/`crop` without dropping existing query params.
 *
 * @example
 * buildUrl({ src: "https://cdn.example.com/a.jpg?format=webp", width: 800 })
 * // => "https://cdn.example.com/a.jpg?format=webp&width=800"
 */
export function buildUrl({
  src,
  width,
  height,
  crop,
}: BuildUrlOptions): string {
  const base = src.includes("?") ? src : `${src}?format=webp`;
  const params = new URLSearchParams();
  params.set("width", String(width));
  if (height !== undefined) params.set("height", String(height));
  if (crop) params.set("crop", "true");
  return `${base}&${params.toString()}`;
}

/**
 * Comma-separated `srcset` entries at 1x–3x logical widths, capped at {@link MAX_WIDTH}.
 *
 * @example
 * buildSrcset({ src: "https://cdn.example.com/a.jpg", width: 400 })
 * // => "...400w, ...800w, ...1200w"
 */
export function buildSrcset({
  src,
  width,
  height,
  crop,
}: BuildUrlOptions): string {
  const seen = new Set<number>();
  const entries: string[] = [];

  for (const density of DENSITIES) {
    const scaledWidth = width * density;
    if (scaledWidth > MAX_WIDTH) break;
    if (seen.has(scaledWidth)) continue;
    seen.add(scaledWidth);

    const scaledHeight =
      height !== undefined ? Math.round(height * density) : undefined;

    entries.push(
      `${buildUrl({ src, width: scaledWidth, height: scaledHeight, crop })} ${scaledWidth}w`,
    );
  }

  return entries.join(", ");
}

export const ResponsiveImage = memo(function ResponsiveImage({
  src,
  alt,
  width,
  height,
  crop,
  sizes = "100vw",
  className,
  loading = "lazy",
  decoding = "async",
  onError,
}: ResponsiveImageProps) {
  const fallbackSrc = useMemo(
    () => buildUrl({ src, width, height, crop }),
    [src, width, height, crop],
  );

  const srcSet = useMemo(
    () => buildSrcset({ src, width, height, crop }),
    [src, width, height, crop],
  );

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={onError}
    />
  );
});
