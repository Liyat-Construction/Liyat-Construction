/** Google Maps links built from a point. Free, no API key. */
interface MapPoint {
  latitude: number;
  longitude: number;
}

/** The embeddable map (an iframe), zoomed to street level. */
export function mapEmbedUrl({ latitude, longitude }: MapPoint): string {
  return `https://www.google.com/maps?q=${latitude},${longitude}&z=17&hl=en&output=embed`;
}

/**
 * Opens Google Maps (the app on phones) with directions to the point. No start is given, so Maps
 * starts from the visitor's own location and shows the distance and the route.
 */
export function mapDirectionsUrl({ latitude, longitude }: MapPoint): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
}
