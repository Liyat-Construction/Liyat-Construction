import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FactsTable } from '@/components/ui/facts-table';
import { Field, Input, Select, Textarea } from '@/components/ui/field';
import { Icon, ICON_NAMES } from '@/components/ui/icon';
import { Photo } from '@/components/ui/photo';
import { Prose } from '@/components/ui/prose';
import { Reveal } from '@/components/ui/reveal';
import { Rule } from '@/components/ui/rule';
import { Section, type SectionTone } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Stat } from '@/components/ui/stat';
import { Tag } from '@/components/ui/tag';
import { TextLink } from '@/components/ui/text-link';
import { siteConfig } from '@/config/site';
import { Hero } from '@/components/sections/hero';
import { WellDiagram } from '@/components/diagrams/well-diagram';
import { HOME_PAGE } from '@/data/home';
import { CtaBand } from '@/components/sections/cta-band';
import { PageHeader } from '@/components/sections/page-header';
import { PhotoGallery } from '@/components/sections/photo-gallery';
import { EquipmentCard } from '@/components/cards/equipment-card';
import { ProjectCard } from '@/components/cards/project-card';
import { ReferenceCard } from '@/components/cards/reference-card';
import { ServiceCard } from '@/components/cards/service-card';
import { TeamCard } from '@/components/cards/team-card';
import { TestimonialCard } from '@/components/cards/testimonial-card';
import { Story } from '@/components/sections/story';
import { TeamGrid } from '@/components/sections/team-grid';
import { Statement } from '@/components/ui/statement';
import { COMPANY_FACTS, KEY_FIGURES, TEAM } from '@/data/company';
import { CTA_BAND } from '@/data/cta';
import { EQUIPMENT, EQUIPMENT_PAGE } from '@/data/equipment';
import { EquipmentGrid } from '@/components/sections/equipment-grid';
import { ReferenceGrid } from '@/components/sections/reference-grid';
import { getProjectBySlug, PROJECTS } from '@/data/projects';
import { getServiceTitles, SERVICES } from '@/data/services';
import { TESTIMONIALS } from '@/data/testimonials';
import { photos, projectFacts, prose, reference, sectionCopy, services } from './_parts/samples';
import { Caption, Specimen, Swatch } from './_parts/specimen';
import { readTokens } from './_parts/tokens';

export const metadata: Metadata = {
  title: 'Style guide',
  robots: { index: false, follow: false },
};

const colorRoles: Record<string, string> = {
  brand: 'Actions, links, rule',
  'brand-dark': 'Hover of brand only',
  'brand-tint': 'Callouts, stripes',
  ink: 'Text, footer, dark sections',
  'ink-muted': 'Secondary text, borders',
  paper: 'Page background (warm)',
  stone: 'Alternating sections',
  line: 'Hairlines, card borders',
  water: 'Water data only',
  alert: 'Form errors only',
  white: 'Cards, fields, header; text on dark',
};

const tones: SectionTone[] = ['paper', 'stone', 'tint', 'ink', 'brand'];
const statTones = ['ink', 'brand', 'water'] as const;

// Figures (D-36: placeholders until C-10) and three projects: with a yield, without one, and without services
const stats = KEY_FIGURES.slice(0, 3);
const sampleProjects = [
  PROJECTS[0],
  getProjectBySlug('british-embassy-pump-installation'),
  getProjectBySlug('credocs-shoring'),
].filter((project) => project !== undefined);

export default function StyleguidePage() {
  const colors = readTokens('color');
  const typeScale = readTokens('text');

  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Style guide' }]}
        eyebrow="P5 · design review"
        title="Liyat design system"
        intro="Every token and component, in every variant, on every section tone. Values are read from tokens.css, so this page cannot drift from it. This header is the PageHeader every inner page uses; the green band at the end is the CtaBand."
      />

      {/* ── Tokens ─────────────────────────────────────────── */}
      <Section labelledBy="sg-tokens" container="wide">
        <div className="flex flex-col gap-16">
          <SectionHeading id="sg-tokens" eyebrow="Tokens" title="Color, type, shape" />

          <Specimen title="Color" note="12 tokens; nothing else exists (D-25)">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {colors.map((token) => (
                <Swatch key={token.name} token={token} role={colorRoles[token.name] ?? ''} />
              ))}
            </div>
          </Specimen>

          <Specimen title="Type scale" note="Fluid from 375 to 1440 px; resize to see it">
            <div className="flex flex-col gap-6">
              <p className="text-display font-heading">Know better. Drill better.</p>
              <p className="text-h1 font-heading">Equipment & capabilities</p>
              <p className="text-h2 font-heading">Selected projects</p>
              <p className="text-h3 font-heading">Pumping test for Tsedey Bank</p>
              <p className="text-h4 font-heading">What you receive</p>
              <p className="text-figure font-heading tabular-nums">350 m</p>
              <p className="text-lead max-w-prose">{sectionCopy.intro}</p>
              <p className="text-body max-w-prose">{sectionCopy.body}</p>
              <p className="text-small">Addis Ababa · 2024 · Pumping Tests</p>
              <p className="text-eyebrow uppercase">Water Well Drilling & Engineering</p>
              <Caption>{typeScale.map((t) => t.name).join(' · ')}</Caption>
            </div>
          </Specimen>

          <div className="gap-grid grid md:grid-cols-3">
            <Specimen title="Rule" note="short · full">
              <div className="flex flex-col gap-4">
                <Rule />
                <Rule length="full" />
              </div>
            </Specimen>
            <Specimen title="Radius" note="control 6 · card 8">
              <div className="flex gap-4">
                <Tag>control</Tag>
                <Card padding="md">card</Card>
              </div>
            </Specimen>
            <Specimen title="Shadow" note="raise — sticky header and menus only">
              <p className="shadow-raise rounded-card bg-white p-6">raise</p>
            </Specimen>
          </div>
        </div>
      </Section>

      {/* ── Section tones ──────────────────────────────────── */}
      {tones.map((tone) => (
        <Section key={tone} tone={tone} labelledBy={`sg-tone-${tone}`}>
          <div className="gap-grid grid lg:grid-cols-12">
            <div className="flex flex-col gap-8 lg:col-span-7">
              <SectionHeading
                id={`sg-tone-${tone}`}
                eyebrow={`Section tone: ${tone}`}
                title={sectionCopy.title}
                intro={sectionCopy.intro}
              />
              <p className="max-w-prose">
                {sectionCopy.body}{' '}
                <TextLink href="/services">Read about our survey method</TextLink>.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact">Contact us</Button>
                <Button href="/projects" variant="secondary">
                  Explore projects
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phone.replaceAll(' ', '')}`}
                  variant="text"
                  icon="phone"
                >
                  {siteConfig.contact.phone}
                </Button>
              </div>
              <dl className="gap-grid grid grid-cols-3">
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    value={stat.value}
                    unit={stat.unit}
                    label={stat.label}
                    tone={stat.water ? 'water' : 'ink'}
                  />
                ))}
              </dl>
            </div>
            <div className="self-start lg:col-span-5">
              <Card as="article" padding="lg">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Tag tone="brand">Pumping Tests</Tag>
                    <Tag>Addis Ababa</Tag>
                  </div>
                  <h3 className="text-h3">A card stays light on any tone</h3>
                  <p className="text-ink-muted">
                    Buttons and links inside it switch back to their light colors.
                  </p>
                  <TextLink href="/projects" arrow>
                    Explore projects
                  </TextLink>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      ))}

      {/* ── Components ─────────────────────────────────────── */}
      <Section labelledBy="sg-components">
        <div className="flex flex-col gap-16">
          <SectionHeading id="sg-components" eyebrow="Components" title="Primitives" />

          <Specimen title="Button" note="primary · secondary · text, md and lg, icons, disabled">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact">Contact us</Button>
                <Button href="/projects" variant="secondary">
                  Explore projects
                </Button>
                <Button href="/projects" variant="text" icon="arrow">
                  Explore all projects
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg" icon="arrow">
                  Request a site survey
                </Button>
                <Button href="mailto:hello@example.com" size="lg" variant="secondary" icon="mail">
                  Email us
                </Button>
                <Button type="submit" disabled>
                  Sending…
                </Button>
              </div>
            </div>
          </Specimen>

          <Specimen title="TextLink and Tag">
            <div className="flex flex-wrap items-center gap-6">
              <TextLink href="/about">Inline link</TextLink>
              <TextLink href="/projects" arrow>
                Explore all projects
              </TextLink>
              <TextLink href="https://www.google.com/maps">External (new tab, announced)</TextLink>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <Tag key={service} tone={index === 0 ? 'brand' : 'neutral'}>
                    {service}
                  </Tag>
                ))}
              </div>
            </div>
          </Specimen>

          <Specimen title="Icon" note="lucide, 1.5 stroke; only registered names">
            <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-8">
              {ICON_NAMES.map((name) => (
                <li key={name} className="flex flex-col items-center gap-2">
                  <Icon name={name} size="lg" />
                  <Caption>{name}</Caption>
                </li>
              ))}
            </ul>
          </Specimen>

          <div className="gap-grid grid lg:grid-cols-2">
            <Specimen title="Stat" note="ink · brand · water (water data only)">
              <dl className="gap-grid grid grid-cols-3">
                {stats.map((stat, index) => (
                  <Stat
                    key={stat.label}
                    value={stat.value}
                    unit={stat.unit}
                    label={stat.label}
                    tone={statTones.at(index) ?? 'ink'}
                  />
                ))}
              </dl>
            </Specimen>
            <Specimen title="FactsTable" note="water rows in Water Blue">
              <FactsTable rows={projectFacts} />
            </Specimen>
          </div>

          <Specimen title="Statement" note="the company speaking, not a quotation">
            <Statement>
              Every successful well begins with understanding the ground beneath it.
            </Statement>
          </Specimen>
        </div>
      </Section>

      <Section tone="stone" labelledBy="sg-photo">
        <div className="flex flex-col gap-16">
          <SectionHeading
            id="sg-photo"
            eyebrow="Photography"
            title="Photo and ratios"
            intro="Natural color, never washed (D-27). Fixed ratios, so nothing shifts while loading."
          />
          <div className="gap-grid grid sm:grid-cols-2 lg:grid-cols-4">
            <Specimen title="wide 3:2">
              <Photo image={photos.rigFleet} ratio="wide" width="third" rounded />
            </Specimen>
            <Specimen title="card 4:3, focus center">
              <Photo image={photos.pumpingTest} width="third" rounded />
            </Specimen>
            <Specimen title="card 4:3, focus top">
              <Photo image={photos.pumpingTestTop} width="third" rounded />
            </Specimen>
            <Specimen title="portrait 4:5 · square">
              <div className="grid grid-cols-2 gap-4">
                <Photo image={photos.airlift} ratio="portrait" width="third" rounded />
                <Photo image={photos.rigTransport} ratio="square" width="third" rounded />
              </div>
            </Specimen>
          </div>
          <div className="gap-grid grid sm:grid-cols-2 lg:grid-cols-3">
            <Specimen title="Linked card" note="hover: green border, photo zooms">
              <Card href="/projects" padding="none">
                <Photo image={photos.pumpingTest} width="third" />
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-h3">Tsedey Bank pumping test</h3>
                  <p className="text-small text-ink-muted">Addis Ababa</p>
                </div>
              </Card>
            </Specimen>
            <Specimen
              title="feature: 3:2, 4:5 from lg"
              note="portrait photos in page headers (orientation: portrait)"
            >
              <Photo image={photos.pumpingTestTop} ratio="feature" width="third" rounded />
            </Specimen>
          </div>
        </div>
      </Section>

      <Section id="cards" labelledBy="sg-cards">
        <div className="flex flex-col gap-16">
          <SectionHeading
            id="sg-cards"
            eyebrow="Cards"
            title="Domain cards, with the site's data"
            intro="Each card takes one object from src/data. Facts Liyat has not confirmed are marked (C-xx) and render nothing when missing."
          />
          <Specimen
            title="ProjectCard"
            note="with a tested yield · without a figure · without a listed service"
          >
            <ul className="gap-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {sampleProjects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard
                    project={project}
                    serviceNames={getServiceTitles(project.services)}
                  />
                </li>
              ))}
            </ul>
          </Specimen>
          <Specimen title="ServiceCard" note="lifecycle order, 01–06">
            <ul className="gap-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service, index) => (
                <li key={service.slug}>
                  <ServiceCard service={service} number={index + 1} />
                </li>
              ))}
            </ul>
          </Specimen>
          <Specimen title="TestimonialCard" note="layout placeholders (C-12)">
            <ul className="gap-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial, index) => (
                <li key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </li>
              ))}
            </ul>
          </Specimen>
          <Specimen title="EquipmentCard" note="with and without a photo (C-16)">
            <ul className="gap-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {EQUIPMENT.map((equipment) => (
                <li key={equipment.name}>
                  <EquipmentCard equipment={equipment} />
                </li>
              ))}
            </ul>
          </Specimen>
          <div className="gap-grid grid lg:grid-cols-4">
            <Specimen title="TeamCard" note="no portraits yet (C-15)" className="lg:col-span-3">
              <ul className="gap-grid grid sm:grid-cols-3">
                {TEAM.map((member, index) => (
                  <li key={index}>
                    <TeamCard member={member} />
                  </li>
                ))}
              </ul>
            </Specimen>
            <Specimen title="ReferenceCard" note="no scan yet (C-13)">
              <div className="max-w-xs">
                <ReferenceCard reference={reference} />
              </div>
            </Specimen>
          </div>
        </div>
      </Section>

      <EquipmentGrid
        id="sg-rigs"
        {...EQUIPMENT_PAGE.rigs}
        equipment={EQUIPMENT.filter((item) => item.category === 'rig')}
      />
      <EquipmentGrid
        id="sg-support"
        tone="stone"
        {...EQUIPMENT_PAGE.support}
        equipment={EQUIPMENT.filter((item) => item.category === 'support')}
        presentation="specifications"
      />

      <ReferenceGrid
        id="sg-references"
        eyebrow="Sections"
        title="ReferenceGrid"
        intro="ReferenceCards, four columns from lg; hidden while REFERENCES is empty (C-13). Sample data below."
        references={[reference, { ...reference, organization: 'Organization B (C-13)' }]}
      />

      <Hero as="h2" eyebrow={siteConfig.descriptor} {...HOME_PAGE.hero} />

      <PhotoGallery
        id="sg-gallery"
        eyebrow="Sections"
        title="PhotoGallery"
        intro="Project and site photos in columns, each at its own shape: portrait 4:5, landscape 3:2. Sample: the CREDOCS gallery."
        images={getProjectBySlug('credocs-shoring')?.gallery ?? []}
      />

      <Story
        id="sg-story"
        tone="stone"
        eyebrow="Sections"
        title="Story"
        paragraphs={[sectionCopy.body]}
        facts={{ title: 'Company at a glance', rows: COMPANY_FACTS }}
        statement="Every successful well begins with understanding the ground beneath it."
        action={{ label: 'Contact us', href: '/contact' }}
      />

      <TeamGrid
        eyebrow="Sections"
        title="TeamGrid"
        intro="TeamCards, two columns on phones; hidden when TEAM is empty (C-15)."
        members={TEAM}
      />

      <Section labelledBy="sg-diagram">
        <div className="gap-grid grid items-start lg:grid-cols-2">
          <SectionHeading
            id="sg-diagram"
            eyebrow="Diagrams"
            title="WellDiagram"
            intro="Water Blue for water, Liyat Green for the well structure, Ink for pump equipment and labels. On the home page, pointing at a service highlights its part (D-45). Readable at 320 px."
          />
          <Specimen title="320 px wide">
            <div className="max-w-80">
              <WellDiagram />
            </div>
          </Specimen>
        </div>
      </Section>

      <Section labelledBy="sg-forms">
        <div className="gap-grid grid lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeading id="sg-forms" eyebrow="Forms" title="Field, Input, Textarea, Select" />
            <form className="flex flex-col gap-6" action="#">
              <Field id="sg-name" label="Full name">
                {(control) => <Input {...control} autoComplete="name" />}
              </Field>
              <Field id="sg-org" label="Organization" optional>
                {(control) => <Input {...control} autoComplete="organization" />}
              </Field>
              <Field
                id="sg-email"
                label="Email"
                hint="We reply within one working day."
                error="Enter an email address like name@example.com"
              >
                {(control) => <Input {...control} type="email" defaultValue="name@" />}
              </Field>
              <Field id="sg-subject" label="Subject">
                {(control) => (
                  <Select {...control} defaultValue="">
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {siteConfig.contactForm.subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </Select>
                )}
              </Field>
              <Field id="sg-message" label="Message">
                {(control) => <Textarea {...control} />}
              </Field>
              <div>
                <Button type="submit" icon="arrow">
                  Send message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Long-form" title="Prose" />
            <Prose>
              <h2>{prose.heading}</h2>
              {prose.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul>
                {prose.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Questions about a test report? <a href="/contact">Contact our engineers</a>.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="sg-motion">
        <div className="flex flex-col gap-12">
          <SectionHeading
            id="sg-motion"
            eyebrow="Motion"
            title="Reveal"
            intro="Fade and 12 px rise, once, staggered. Content above the fold never waits; off under reduced motion."
          />
          <div className="gap-grid grid sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index === 0 ? 0 : index === 1 ? 1 : 2}>
                <Card padding="lg">
                  <dl>
                    <Stat
                      value={stat.value}
                      unit={stat.unit}
                      label={stat.label}
                      tone={stat.water ? 'water' : 'brand'}
                    />
                  </dl>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand {...CTA_BAND} phone={siteConfig.contact.phone} />
    </div>
  );
}
