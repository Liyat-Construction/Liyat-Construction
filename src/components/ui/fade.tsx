/*
 * An Ink fade over the top edge of the hero photograph, under the see-through
 * header, so white links over bright sky stay readable (owner decision; a
 * functional exception to "no decorative gradients", Brand §7). About 0.8 Ink
 * at the link row. The curve is eased (token `--fade-to-bottom`) so no line
 * shows where it starts or ends.
 */

/** Place inside the positioned box that holds the photo. Decorative. */
export function Fade() {
  return (
    <div
      aria-hidden="true"
      className="text-ink pointer-events-none absolute inset-x-0 top-0 h-64 bg-(image:--fade-to-bottom) opacity-90"
    />
  );
}
