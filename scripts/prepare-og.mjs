import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const source = fileURLToPath(new URL('../assets/images/hero/water-column.webp', import.meta.url));
const output = fileURLToPath(new URL('../public/og-image.jpg', import.meta.url));
await sharp(source)
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 85 })
  .toFile(output);
console.log('Prepared natural-color 1200 × 630 Open Graph photograph.');
