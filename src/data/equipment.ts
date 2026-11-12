/**
 * Equipment & Capabilities
 * EQUIPMENT_PAGE    → /equipment-capabilities
 * EQUIPMENT_GALLERY → the photos on /equipment-capabilities
 * EQUIPMENT         → the rig in the home page's equipment section
 */

import type { Equipment, EquipmentPage, ImageAsset } from '@/types/content';

export const EQUIPMENT_PAGE: EquipmentPage = {
  header: {
    eyebrow: 'Our equipment',
    // Copy approved by the owner, 2026-11-08 (D-158); "our own" is from Liyat's review ("We own the rigs")
    title: 'Rigs, pumps and the crews who run them',
    intro:
      'We work with our own drilling rigs, compressors and test pumps, sourced from Indian and Turkish manufacturers.',
    // The owner's choice (2026-11-09): the rig on its carrier; the Bole Lemi photo moved to the rigs section
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig mounted on its transport carrier',
    },
    description:
      'Liyat Construction’s drilling rigs, pumping-test equipment and groundwater investigation, well construction and installation methods in Ethiopia.',
  },
  rigs: {
    eyebrow: 'Drilling equipment',
    title: 'Rigs for deep and shallow wells',
    // Liyat's written answers: mud rotary and DTH, rigs "up to 800m", Chaka House the deepest.
    // The 800 m vs the list's 1,200 m is still open (C-37)
    paragraphs: [
      'Our rigs drill by mud rotary and DTH (down-the-hole hammer), so one crew can work through soft ground and hard rock.',
      'They can drill up to 800 m. The deepest well we have completed so far is 600 m, at Chaka House in Addis Ababa.',
      'Our drilling team builds the well. Separate pumping-test and electromechanical teams take it from there.',
    ],
    image: {
      url: '/images/hero/belayneh-kinde-rig.webp',
      alt: 'Liyat drilling rig, air compressors and truck on site at Bole Lemi',
    },
  },
  // The main items of Liyat's equipment list (LIYAT_ORIGINALS.md §6); no counts, no consumables.
  // The list's "1200 m" and "300 m" rigs are shown as written; the 800 m above is his answer
  // to our question. The owner asks him about the difference (2026-11-05)
  fleet: {
    eyebrow: 'Our fleet',
    title: 'What we bring to site',
    intro: 'The main machines and tools we bring to a well site.',
    items: [
      {
        title: 'Drilling rigs',
        text: 'Truck-mounted drilling rigs, rated 1,200 m and 300 m.',
      },
      {
        title: 'Air compressor',
        text: 'An Atlas Copco XRVS high-pressure compressor, 32 bar, for DTH drilling and well development.',
      },
      {
        title: 'Crane and trucks',
        text: 'A crane, trucks and pickups to move rigs, pipe and crews between sites.',
      },
      {
        title: 'Drill pipe and bits',
        text: 'Drill pipe in 4½ and 5 inch, and drilling bits from 6½ to 26 inches.',
      },
      {
        title: 'Hammers and fishing tools',
        text: 'DTH hammers for hard rock, and fishing tools to recover anything lost down the hole.',
      },
      {
        title: 'Test pumps and flow measurement',
        text: 'Submersible test pumps from 35 to 200 HP, and a V-notch weir to measure the flow.',
      },
    ],
  },
  gallery: { eyebrow: 'On site', title: 'Our equipment' },
  // Liyat's equipment list confirms the test pumps and crane; his profile, the generators
  support: {
    eyebrow: 'Pumping-test equipment',
    title: 'A dedicated crew for proving the well',
    intro:
      'A dedicated pumping-test crew brings its own submersible pumps, crane and generators to site.',
    items: [
      {
        title: 'Variable-discharge test pumps',
        text: 'The crew can change the pumping rate and watch how the water level responds.',
      },
      {
        title: 'Pumping-test crane',
        text: 'Lowers the test pump into the well and lifts it out again.',
      },
      {
        title: 'Generators',
        text: 'Power the test pumps on site, wherever the well is.',
      },
    ],
  },
  // Liyat checks the method wording on the preview (D-125)
  methods: {
    eyebrow: 'Technologies and methods',
    title: 'How we investigate, build and test',
    intro:
      'Each stage uses the findings from the work before it, from choosing a site to installing the pump.',
    items: [
      {
        title: 'Ground investigation',
        text: 'When the client asks for a survey, its hydrogeological and geophysical findings decide where we drill.',
      },
      {
        title: 'Well construction',
        text: 'Casing, screens and development follow the agreed design and what the ground shows during drilling.',
      },
      {
        title: 'Pumping tests',
        text: 'We pump at measured rates and record how the water level falls and recovers.',
      },
      {
        title: 'Pump installation',
        text: 'We size the pump to the water the client needs and, when a pumping test was part of the work, to the well’s tested performance.',
      },
    ],
  },
  figures: {
    eyebrow: 'Project record',
    title: 'Proven in the field',
    intro: 'Wells completed and metres drilled from 2019 to 2026.',
  },
  readiness: {
    eyebrow: 'Site readiness and care',
    title: 'Ready for the work on site',
    paragraphs: [
      'Drilling, pumping-test and installation teams coordinate the stages of work, with care for the crew, the borehole and the surrounding ground. Our environmental practice explains how we approach water, drilling fluid, cuttings and handover.',
      // From Liyat's review ("For tenders"), without its promise of ownership documents
      'Need our equipment list for a tender? Ask us and we’ll send it.',
    ],
    action: { label: 'See our safety and environmental practice', href: '/environment' },
  },
};

// Liyat's photos (2026-11-05 and 2026-11-07, D-144), shown under the fleet on
// /equipment-capabilities: 3 rows of 3 on tablets and desktops, a carousel on phones (D-146)
export const EQUIPMENT_GALLERY: ImageAsset[] = [
  {
    url: '/images/equipment/rig-and-casings.webp',
    alt: 'Liyat drilling rig with its mast raised over a row of screen casings',
  },
  {
    url: '/images/equipment/fleet.webp',
    alt: 'Liyat trucks, crane truck and air compressor lined up at the yard',
  },
  {
    url: '/images/equipment/tower-rig.webp',
    alt: 'Liyat truck-mounted drilling rig with its mast raised',
  },
  {
    url: '/images/hero/ea-casing-site.webp',
    alt: 'Liyat rig, casing pipes and site cabin at the Ethiopian Airlines site',
  },
  {
    url: '/images/equipment/compressor-truck.webp',
    alt: 'Atlas Copco XRVS air compressor on a Liyat crane truck',
  },
  {
    url: '/images/equipment/engineers-on-pipes.webp',
    alt: 'Engineers on the casing pipes beside the Liyat rig',
  },
  {
    url: '/images/equipment/generator.webp',
    alt: 'Liyat generator at the yard',
  },
  {
    url: '/images/equipment/worker-container.webp',
    alt: 'Liyat worker container on its trailer, ready to move to site',
  },
  {
    url: '/images/equipment/casings.webp',
    alt: '10-inch blind and screen casing pipes stacked at the yard',
  },
];

// Only what Liyat has stated (D-36: no invented specs)
export const EQUIPMENT: Equipment[] = [
  {
    name: 'Drilling rigs and tools',
    type: 'Drilling rig',
    image: {
      url: '/images/equipment/rig-transport.webp',
      alt: 'Liyat drilling rig on its carrier, on the way to site',
    },
    specs: [
      { label: 'Drilling depth', value: 'Up to 800 m' },
      { label: 'Manufacturers', value: 'Indian and Turkish' },
    ],
  },
];
