import { memo, useMemo } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────

const MAX_WIDTH = 4096;
const DENSITIES = [1, 2, 3] as const;

// ─── Types ───────────────────────────────────────────────────────────────────

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
};

type BuildUrlOptions = {
  src: string;
  width: number;
  height?: number;
  crop?: boolean;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function buildUrl({ src, width, height, crop }: BuildUrlOptions): string {
  const base = src.includes("?") ? src : `${src}?format=webp`;
  const params = new URLSearchParams();
  params.set("width", String(width));
  if (height !== undefined) params.set("height", String(height));
  if (crop) params.set("crop", "true");
  return `${base}&${params.toString()}`;
}

export function buildSrcset({ src, width, height, crop }: BuildUrlOptions): string {
  const seen = new Set<number>();
  const entries: string[] = [];

  for (const density of DENSITIES) {
    const scaledWidth = width * density;
    if (scaledWidth > MAX_WIDTH) break;
    if (seen.has(scaledWidth)) continue;
    seen.add(scaledWidth);

    const scaledHeight =
      height !== undefined ? Math.round(height * density) : undefined;

    entries.push(`${buildUrl({ src, width: scaledWidth, height: scaledHeight, crop })} ${density}x`);
  }

  return entries.join(", ");
}

// ─── Component ───────────────────────────────────────────────────────────────

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
    />
  );
});
