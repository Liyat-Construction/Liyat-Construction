/**
 * Home page copy, in section order (PROJECT.md §7). The figures, projects,
 * services, equipment and quotes come from their own data files.
 */

import type { HomePage } from '@/types/content';

export const HOME_PAGE: HomePage = {
  hero: {
    // The client's tagline, confirmed (owner, 2026-10-27)
    title: 'Know better. Drill better.',
    // The client's line under the headline (copy review, 2026-11)
    lead: 'Groundwater engineering from survey to tank.',
    primary: { label: 'Contact us', href: '/#contact' },
    secondary: { label: 'Our services', href: '/#services' },
    // The whole first screen behind the headline (D-81). The first photo loads with the page;
    // the others load after it. Every photo but the Afar one needs the 60 % 'bright' scrim
    // (measured 2026-11-08/09)
    // The owner's five (T7, 2026-11-13). `focus` is the crop on phones and tablets, `focusWide` from lg, `zoom` phones only;
    // measured per device (the hero fills the screen: tall on a phone, wide on a desktop)
    slides: [
      // 1
      {
        image: {
          url: '/images/hero/afar-rig-fleet.webp',
          alt: 'Liyat drilling rig, compressors and support trucks on site in the Afar region',
          focus: 'upper-left',
          zoom: 'left',
        },
      },
      // 2
      {
        image: {
          url: '/images/hero/ethiopian-airlines.webp',
          alt: 'Water pouring through the V-notch tank below the Liyat rig during a pumping test',
          focus: 'right-third',
          focusWide: 'center',
        },
        scrim: 'bright',
      },
      // 3
      {
        image: {
          url: '/images/hero/belayneh-kinde-rig.webp',
          alt: 'Liyat drilling rig with compressors on site, a water tower behind',
          focus: 'left-third',
          focusWide: 'center',
        },
        scrim: 'bright',
      },
      // 4
      {
        image: {
          url: '/images/hero/yekatit-12.webp',
          alt: 'Water jetting from a well beside the Liyat rig, trees behind',
          focus: 'mid-left',
          focusWide: 'center',
        },
        scrim: 'bright',
      },
      // 5
      {
        image: {
          url: '/images/hero/ea-v-notch.webp',
          alt: 'Water pouring through the V-notch tank as a Liyat engineer checks the flow',
        },
        scrim: 'bright',
      },
    ],
  },
  // "Who we are": rewritten by the owner, 2026-11-10, from the client's own note (his story,
  // the 100 m Afdera and 600 m Addis Ababa wells, one contractor); the fact sentence opens it
  // for search. Not the reason for the 2022 rename: we do not know it.
  about: {
    eyebrow: 'Who we are',
    title: 'One team from survey to a working pump',
    paragraphs: [
      'Liyat Construction PLC is a water-well drilling and groundwater engineering company in Addis Ababa, Ethiopia. We began in 2019 as Wondwossen Water Well Drilling Contractor and became Liyat Construction PLC in May 2022.',
      'We drill for institutions, embassies, commercial developments and communities. Our wells run from 100 m at a salt works in Afdera to 600 m in Addis Ababa. Our own crews run the rig, the pumping test and the pump installation, so you deal with one contractor and get one set of records, from survey to tank, in whichever stages you need.',
    ],
    image: {
      url: '/images/hero/ethiopian-airlines.webp',
      alt: 'Drilling rig and water discharge during a pumping test at Ethiopian Airlines',
    },
    action: { label: 'Read our story', href: '/about' },
  },
  lifecycle: {
    eyebrow: 'Services',
    // Clients take one service or all of them; surveys only when the client asks (owner, 2026-10-28)
    title: 'One stage or the whole project.',
    intro:
      'Six services, in the order a water source is built. Take the one you need, or let us carry the project from start to finish. The drawing shows the part of the well each one delivers.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected projects',
    intro:
      'Pumping tests, pump installations and well development for institutional and commercial clients.',
    link: { label: 'Explore all projects', href: '/projects' },
    clientsTitle: 'Clients we have worked for',
  },
  equipment: {
    eyebrow: 'Equipment',
    title: 'Equipment and technologies',
    intro:
      'Our drilling rigs, the pumping-test crew’s equipment and the methods behind each stage.',
    link: { label: 'See our equipment', href: '/equipment-capabilities' },
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What our clients say',
  },
};
