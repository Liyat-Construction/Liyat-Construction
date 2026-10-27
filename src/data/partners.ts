/**
 * Clients — the "Clients we have worked for" row under the projects (Home and /projects).
 * Logos in assets/images/clients/, then `npm run images`; reference as '/images/clients/file.webp'.
 * Without a logo the name is shown as text; site photos are never used as logos.
 *
 * The main clients come first. Source: Liyat's brochure (project list and the ongoing
 * World Bank-financed project) and the owner; Ethiopian Airlines and the British Embassy
 * are confirmed by the client.
 */

import type { Partner } from '@/types/content';

export const PARTNERS: Partner[] = [
  { name: 'Ethiopian Airlines', logo: '/images/clients/ethiopian-airlines.webp' },
  { name: 'British Embassy Addis Ababa', logo: '/images/clients/british-embassy.webp' },
  // Liyat's clients; permission to name them is treated as granted (owner, 2026-10-27)
  { name: 'Embassy of Belgium', logo: '/images/clients/belgian-embassy.webp' },
  // The brochure names Ovid Real Estate; the logo supplied is the parent Ovid Group's
  { name: 'Ovid Group', logo: '/images/clients/ovid-group.webp' },
  { name: 'Tsedey Bank', logo: '/images/clients/tsedey-bank.webp' },
  // Ongoing: Horn of Africa Groundwater Resilience Project (World Bank financed)
  {
    name: 'Ministry of Water and Energy',
    logo: '/images/clients/ministry-of-water-and-energy.webp',
  },
  {
    name: 'Yekatit 12 Hospital Medical College',
    logo: '/images/clients/yekatit-12-hospital-logo.webp',
  },
  { name: 'SD Salt Manufacturing', logo: '/images/clients/sd-salt-manufacturing.webp' },
  // PLACEHOLDER(C-23): "CREDOCS" or "CREDOCKS"
  { name: 'CREDOCS Digital Service', logo: '/images/clients/credoks.webp' },
  { name: 'Belayneh Kinde Group', logo: '/images/clients/belayneh-kinde-group.webp' },
  { name: 'CIRHT', logo: '/images/clients/cirht.webp' },
  { name: 'ET Mineral Development S.C.', logo: '/images/clients/et-minieal.webp' },
  {
    name: 'Horn of Africa Groundwater for Resilience',
    logo: '/images/clients/horn-of-africa-ground-water.webp',
  },
  { name: 'Hosea Trading House', logo: '/images/clients/hosea-treading-house.webp' },
];
