import React from "react";
import { Link } from "react-router";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { SectionHeading } from "../ui/SectionHeading";
import {
  ArrowRight,
  Droplets,
  Sun,
  Thermometer,
  Users,
  CheckCircle2,
  Search,
  HeartPulse,
  Calendar,
  Radio,
} from "lucide-react";

const makeImage = (id: string, alt: string, credit: string) => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=84`,
  alt,
  credit,
});

export const siteImages = {
  hero: makeImage(
    "photo-1673853233647-17ebc2d71b5f",
    "A plant owner tending a collection of houseplants beside a bright window",
    "Annie Spratt",
  ),
  monstera: makeImage(
    "photo-1525498128493-380d1990a112",
    "Healthy green Monstera leaves in natural light",
    "Chris Lee",
  ),
  health: makeImage(
    "photo-1791212946174-828be9dd97c8",
    "Fiddle leaf fig leaves showing brown spotting",
    "Rodrigo Rodrigues",
  ),
  communityPrimary: makeImage(
    "photo-1777428904692-0ded971bdde5",
    "A striped Calathea growing indoors",
    "dipo here",
  ),
  communitySecondary: makeImage(
    "photo-1606146351104-ea4aa13c28f4",
    "A healthy houseplant in a terracotta pot",
    "Katka Pavlickova",
  ),
};

export const samplePlants = [
  {
    commonName: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    location: "Living Room Window",
    status: "Needs water",
    tone: "warning" as const,
    light: "Bright indirect",
    schedule: "Every 7 days",
    nextTask: "Water today",
  },
  {
    commonName: "Golden Pothos",
    scientificName: "Epipremnum aureum",
    location: "Study Shelf",
    status: "Optimal",
    tone: "success" as const,
    light: "Medium indirect",
    schedule: "Every 10 days",
    nextTask: "Rotate in 3 days",
  },
  {
    commonName: "Calathea Orbifolia",
    scientificName: "Goeppertia orbifolia",
    location: "Bedroom Credenza",
    status: "Thriving",
    tone: "success" as const,
    light: "Filtered light",
    schedule: "Every 6 days",
    nextTask: "Mist tomorrow",
  },
  {
    commonName: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    location: "Entryway Console",
    status: "Resilient",
    tone: "info" as const,
    light: "Low to bright",
    schedule: "Every 14 days",
    nextTask: "Check soil in 8 days",
  },
];

export const marketplaceProducts = [
  {
    slug: "terracotta-cylinder-planter",
    category: "Planters",
    name: "Terracotta Cylinder Planter with Saucer",
    description: "Breathable natural clay with a simple drainage saucer.",
    price: "$28.00",
    image: makeImage(
      "photo-1528789386055-75c4b717bad1",
      "Natural terracotta plant pots",
      "Annie Spratt",
    ),
  },
  {
    slug: "organic-chunky-aroid-substrate",
    category: "Soil & substrates",
    name: "Organic Chunky Aroid Potting Substrate",
    description: "An airy blend designed to support healthy roots and drainage.",
    price: "$18.50",
    image: makeImage(
      "photo-1770583287085-135748e01164",
      "Rich dark organic potting soil",
      "Mavi Atlas",
    ),
  },
  {
    slug: "matte-brass-watering-can",
    category: "Watering",
    name: "Matte Brass Precision Long-Spout Watering Can",
    description: "A balanced narrow spout for accurate indoor watering.",
    price: "$36.00",
    image: makeImage(
      "photo-1497990571654-77aa8ec36038",
      "Brass long-spout watering can on a wooden surface",
      "Kaufmann Mercantile",
    ),
  },
  {
    slug: "soil-moisture-lux-sensor",
    category: "Smart care",
    name: "Leaf & Root Soil Moisture & Lux Sensor",
    description: "Track moisture and light patterns around your plant.",
    price: "$45.00",
    image: makeImage(
      "photo-1584795962384-dce385272216",
      "A compact digital plant sensor placed in a terracotta pot",
      "Pi Supply",
    ),
  },
];

export const botanicalGuides = [
  {
    slug: "art-of-winter-watering",
    category: "Seasonal care",
    title: "The Art of Winter Watering",
    description:
      "Adjust your routine for slower growth, cooler rooms, and soil that takes longer to dry.",
    image: makeImage(
      "photo-1673853233647-17ebc2d71b5f",
      "A person watering houseplants beside a window",
      "Annie Spratt",
    ),
  },
  {
    slug: "decoding-light-exposure",
    category: "Light",
    title: "Decoding Light Exposure",
    description:
      "Learn to read the direction, duration, and intensity of natural light in your home.",
    image: makeImage(
      "photo-1585598117791-876ce25c1884",
      "Green leaves catching soft natural light",
      "Thimo van Leeuwen",
    ),
  },
  {
    slug: "aeration-and-substrates",
    category: "Soil science",
    title: "Aeration and Substrates",
    description:
      "Understand how bark, mineral particles, and organic matter help roots access air and water.",
    image: makeImage(
      "photo-1708437237775-6c89e28913d4",
      "A close-up texture of chunky wood substrate",
      "Zoshua Colah",
    ),
  },
];

function PhotoCredit({ image, inverse = false }: { image: { credit: string }; inverse?: boolean }) {
  return (
    <span
      className={`absolute bottom-3 right-3 rounded-md px-2 py-1 text-xs ${
        inverse ? "bg-white/85 text-forest-900" : "bg-forest-950/75 text-white"
      }`}
    >
      Photo by {image.credit}
    </span>
  );
}

function TextLink({
  to,
  children,
  inverse = false,
}: {
  to: string;
  children: React.ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 rounded text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-200 ${
        inverse ? "text-forest-100 hover:text-white" : "text-forest-700 hover:text-forest-950"
      }`}
    >
      {children}
      <ArrowRight className="size-4" aria-hidden={true} />
    </Link>
  );
}

/* 1. HERO SECTION */
export const HeroSection: React.FC = () => {
  const image = siteImages.hero;
  return (
    <section className="overflow-hidden border-b border-divider bg-warm-ivory">
      <div className="container-shell grid items-center gap-12 py-14 lg:min-h-[44rem] lg:grid-cols-12 lg:py-18">
        <div className="lg:col-span-5">
          <p className="eyebrow">Plant care, organized around your plant</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-forest-950 sm:text-6xl xl:text-7xl">
            Know what your plant needs — at every stage.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            Use a photo to identify a plant, review practical health and care guidance, then keep
            its routine organized in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/signup" size="lg">
              Start your plant collection
            </Button>
            <Button to="/#how-it-works" size="lg" variant="outline">
              See how Leaf &amp; Root works
            </Button>
          </div>
        </div>

        <figure className="lg:col-span-7 lg:pl-5">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-100">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]"
            />
            <PhotoCredit image={image} />
          </div>
          <figcaption className="mt-3 text-sm text-text-subtle">
            Keep identification, care notes, and upcoming tasks connected to each plant.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

/* 2. HOW IT WORKS SECTION */
export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Identify your plant",
      body: "Take or upload a clear photo to find a possible plant match.",
    },
    {
      title: "Understand its needs",
      body: "Review practical care guidance, possible symptoms, and relevant toxicity information.",
    },
    {
      title: "Build a care routine",
      body: "Save the plant, record its location, and organize upcoming care tasks.",
    },
  ];

  return (
    <section id="how-it-works" className="section-space scroll-mt-20 bg-white">
      <div id="plant-care" className="container-shell scroll-mt-20">
        <SectionHeading
          eyebrow="How it works"
          title="From one plant photo to a practical care routine."
          description="Leaf & Root connects three jobs that are often scattered across search results, notes, and reminders."
          align="center"
        />

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((step, idx) => (
            <li key={step.title} className="relative flex flex-col">
              <span className="flex size-10 items-center justify-center rounded-full bg-forest-100 text-sm font-semibold text-forest-900">
                0{idx + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-forest-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* 3. CORE TOOLS SECTION */
export const CoreToolsSection: React.FC = () => {
  const monstera = siteImages.monstera;
  const health = siteImages.health;

  return (
    <section className="section-space bg-forest-50">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Plant Care & AI"
            title="Three connected tools for understanding and caring for a plant."
            description="Use identification as a starting point, review informational health guidance, and keep care recommendations tied to the plant you save."
          />
          <div className="lg:justify-self-end">
            <Button to="/plant-care-ai">Explore Plant Care &amp; AI</Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Card 1: Identification */}
          <article className="surface-card flex flex-col justify-between p-6">
            <div>
              <div className="relative overflow-hidden rounded-xl bg-forest-100">
                <img
                  src={monstera.src}
                  alt={monstera.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
                <PhotoCredit image={monstera} />
              </div>
              <Badge variant="info" className="mt-5">
                Image analysis
              </Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-forest-950">
                Plant identification
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Compare a plant photo with botanical references to explore possible matches, basic
                care profiles, and common growing habits.
              </p>
            </div>
            <div className="mt-6 border-t border-divider pt-4">
              <TextLink to="/plant-care-ai/identify">Learn about identification</TextLink>
            </div>
          </article>

          {/* Card 2: Health */}
          <article className="surface-card flex flex-col justify-between p-6">
            <div>
              <div className="relative overflow-hidden rounded-xl bg-forest-100">
                <img
                  src={health.src}
                  alt={health.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
                <PhotoCredit image={health} />
              </div>
              <Badge variant="warning" className="mt-5">
                Symptom triage
              </Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-forest-950">
                Plant health guidance
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Review visible symptoms like yellowing, browning, or leaf drop alongside
                environmental checks before deciding what to change.
              </p>
            </div>
            <div className="mt-6 border-t border-divider pt-4">
              <TextLink to="/plant-care-ai/health">Learn about health guidance</TextLink>
            </div>
          </article>

          {/* Card 3: Care Routines */}
          <article className="surface-card flex flex-col justify-between p-6">
            <div>
              <div className="aspect-[16/10] w-full rounded-xl border border-divider bg-sand p-5 flex flex-col justify-center">
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between font-semibold text-forest-950">
                    <span>Watering check</span>
                    <span className="text-root-700">Due today</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-forest-200">
                    <div className="h-1.5 w-3/4 rounded-full bg-forest-600" />
                  </div>
                  <p className="text-text-subtle">Top 5cm dry &bull; Filtered water recommended</p>
                </div>
              </div>
              <Badge variant="success" className="mt-5">
                Personalized routine
              </Badge>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-forest-950">
                Personalized care
              </h3>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                Turn care guidance into an organized routine based on where the plant lives,
                seasonal shifts, and recent observations.
              </p>
            </div>
            <div className="mt-6 border-t border-divider pt-4">
              <TextLink to="/plant-care-ai/care">Learn about care routines</TextLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

/* 4. CARE PREVIEW SECTION */
export const CarePreviewSection: React.FC = () => {
  return (
    <section id="personalized-care" className="section-space scroll-mt-20 bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Care organization"
            title="See what needs attention next."
            description="A saved plant profile keeps its location, current care status, and next task together. This compact example shows how a collection can be organized."
          />
          <div className="mt-8">
            <Button to="/plant-care-ai/care">Explore personalized care</Button>
          </div>
        </div>

        <div className="surface-card divide-y divide-divider p-6">
          <div className="flex items-center justify-between pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-subtle">
              Example collection
            </span>
            <span className="text-xs text-text-subtle">4 plants</span>
          </div>
          <ul className="divide-y divide-divider">
            {samplePlants.map((plant) => (
              <li
                key={plant.commonName}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-forest-950">{plant.commonName}</h4>
                    <Badge variant={plant.tone} dot={true}>
                      {plant.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-text-subtle mt-0.5">
                    {plant.location} &bull; {plant.light} &bull; {plant.schedule}
                  </p>
                </div>
                <span className="text-xs font-medium text-forest-800 bg-sand px-3 py-1.5 rounded-lg w-fit">
                  {plant.nextTask}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* 5. SMART MONITORING SECTION */
export const SmartMonitoringSection: React.FC = () => {
  const sensorMetrics = [
    {
      icon: Droplets,
      label: "Soil moisture",
      value: "42%",
      detail: "Example range: 35–60%",
    },
    {
      icon: Sun,
      label: "Light exposure",
      value: "6.4h",
      detail: "Example day: bright indirect",
    },
    {
      icon: Thermometer,
      label: "Temperature",
      value: "22°C",
      detail: "Example reading: stable",
    },
  ];

  return (
    <section id="monitoring" className="section-space scroll-mt-20 bg-warm-ivory">
      <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Optional sensor monitoring"
            title="Add environmental context when a compatible sensor is connected."
            description="A compatible connected sensor can add soil-moisture, light, and temperature patterns to a plant profile. Plant identification and care guidance remain available without a device."
          />
          <div className="mt-8">
            <Button to="/plant-care-ai/monitoring" variant="outline">
              Learn about smart monitoring
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="surface-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-divider">
              <div>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider">
                  Monstera Deliciosa &bull; Living Room
                </span>
                <h4 className="font-semibold text-forest-950 text-base">
                  Illustrative environmental readings
                </h4>
              </div>
              <Badge variant="neutral">Sample data</Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {sensorMetrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="p-4 rounded-xl bg-sand/60 border border-border space-y-1"
                  >
                    <span className="text-xs text-forest-700 flex items-center gap-1.5 font-medium">
                      <Icon className="size-4" />
                      {m.label}
                    </span>
                    <p className="text-2xl font-bold text-forest-950">{m.value}</p>
                    <span className="text-[11px] text-text-subtle block">{m.detail}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-text-subtle pt-2 border-t border-divider">
              Sample sensor readings shown for demonstration. Leaf &amp; Root functions completely
              without hardware sensors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 6. LEARN & GROW SECTION */
export const LearnAndGrowSection: React.FC = () => {
  const community = siteImages.communityPrimary;

  return (
    <section className="section-space bg-forest-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Learn & grow"
          title="Use practical guides, then compare notes with other growers."
          description="Botanical guides provide structured care knowledge. Community discussions make room for questions, observations, and shared experience."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Guides column */}
          <div id="guides" className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="font-semibold text-forest-950">Botanical Guides</h3>
              <TextLink to="/blogs">Browse all guides</TextLink>
            </div>

            <div className="space-y-4">
              {botanicalGuides.map((guide) => (
                <article
                  key={guide.slug}
                  className="surface-card p-5 flex flex-col sm:flex-row gap-4 items-start"
                >
                  <img
                    src={guide.image.src}
                    alt={guide.image.alt}
                    className="w-full sm:w-28 sm:h-28 rounded-lg object-cover shrink-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-forest-600 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h4 className="font-semibold text-forest-950 leading-snug">{guide.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Community column */}
          <div id="community" className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="font-semibold text-forest-950">Grower Community</h3>
              <TextLink to="/community">Visit the community</TextLink>
            </div>

            <div className="surface-card p-6 space-y-4 flex flex-col justify-between h-[calc(100%-2.5rem)]">
              <div>
                <div className="relative overflow-hidden rounded-xl bg-forest-100">
                  <img
                    src={community.src}
                    alt={community.alt}
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <PhotoCredit image={community} />
                </div>
                <h4 className="mt-5 text-lg font-semibold text-forest-950">
                  Real experiences from indoor growers
                </h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  Ask questions about specific plant varieties, review troubleshooting tips from
                  growers in similar indoor conditions, and share propagation progress.
                </p>
              </div>

              <div className="pt-4 border-t border-divider">
                <Button to="/community" variant="secondary" fullWidth={true}>
                  Explore Community Discussions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 7. MARKETPLACE PREVIEW SECTION */
export const MarketplacePreviewSection: React.FC = () => {
  return (
    <section id="marketplace" className="section-space scroll-mt-20 bg-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Marketplace preview"
            title="Tools for potting, watering, and everyday care."
          />
          <div className="lg:justify-self-end">
            <p className="section-copy">
              A small selection of the existing Leaf &amp; Root catalog, focused on materials and
              tools that support healthy growth.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {marketplaceProducts.map((p) => (
            <article
              key={p.slug}
              className="surface-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <img
                  src={p.image.src}
                  alt={p.image.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-5 space-y-1.5">
                  <span className="text-[11px] font-semibold text-text-subtle uppercase tracking-wider block">
                    {p.category}
                  </span>
                  <h4 className="font-semibold text-forest-950 text-base leading-snug">{p.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{p.description}</p>
                </div>
              </div>
              <div className="p-5 pt-2 border-t border-divider flex items-center justify-between">
                <span className="font-bold text-forest-950 text-sm">{p.price}</span>
                <Button to="/marketplace" variant="secondary" size="sm">
                  View item
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button to="/marketplace" size="lg">
            Explore the complete marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};
