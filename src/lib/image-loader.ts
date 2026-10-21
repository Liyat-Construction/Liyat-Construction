/**
 * next/image loader for the prepared images (Engineering §5, D-35).
 * Static export has no image optimizer, so `npm run images` writes each photo at
 * fixed widths as `<name>-<width>.webp` and lists them in image-widths.json.
 * The loader serves the smallest prepared width that covers the requested one.
 * Images not in the list (e.g. the logo) are served as they are.
 */
import imageWidths from './image-widths.json';

const WIDTHS = new Map<string, number[]>(Object.entries(imageWidths));

/** URL of a prepared image at the requested width (or its largest, for metadata). */
export function preparedImageUrl(src: string, width = Number.POSITIVE_INFINITY): string {
  const widths = WIDTHS.get(src);
  if (!widths) return src;
  const best = widths.find((available) => available >= width) ?? widths.at(-1);
  return src.replace(/\.webp$/, `-${best}.webp`);
}

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  return preparedImageUrl(src, width);
}
