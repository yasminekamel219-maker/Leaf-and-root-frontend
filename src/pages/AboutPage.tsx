import React from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  Search,
  HeartPulse,
  Calendar,
  FolderTree,
  Radio,
  BookOpen,
  Users,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Check,
  AlertCircle,
} from "lucide-react";

export const AboutPage: React.FC = () => {
  const difficulties = [
    {
      number: "01",
      title: "Finding reliable information about a plant",
      description:
        "Care requirements vary significantly across species. Generic advice often overlooks native habitat differences, leading to conflicting guidance.",
    },
    {
      number: "02",
      title: "Understanding what visible symptoms might indicate",
      description:
        "A yellowing leaf can stem from overwatering, low humidity, draft exposure, or natural aging. Determining root causes requires structured context.",
    },
    {
      number: "03",
      title: "Knowing how environmental conditions affect plant health",
      description:
        "Seasonal daylight shifts and indoor winter heating drastically change water uptake rates unpredictably from room to room.",
    },
    {
      number: "04",
      title: "Remembering watering and other care tasks",
      description:
        "Rigid calendar reminders fail because plants consume water based on temperature, pot substrate, and growth pace, not a fixed weekly schedule.",
    },
    {
      number: "05",
      title: "Keeping plant information organized in one place",
      description:
        "Potting dates, soil mixes, toxicity notes, and historical leaf changes quickly become lost across scattered bookmarks and sticky notes.",
    },
  ];

  const principles = [
    {
      icon: Search,
      title: "Understand the plant",
      description:
        "Help users identify a possible plant match and explore relevant botanical information, native climate origins, and light classification.",
      badge: "Botanical taxonomy",
    },
    {
      icon: HeartPulse,
      title: "Understand its condition",
      description:
        "Provide practical health guidance, possible explanations for visible symptoms, and relevant care considerations before hasty intervention.",
      badge: "Multi-factor triage",
    },
    {
      icon: FolderTree,
      title: "Organize ongoing care",
      description:
        "Help users keep plant profiles, room locations, substrate choices, observations, and upcoming care tasks together in one clear view.",
      badge: "Adaptive routines",
    },
  ];

  const capabilities = [
    {
      icon: Search,
      title: "Plant Identification",
      description:
        "Compare photographs against verified botanical references to explore possible matches and growing habits.",
      to: "/plant-care-ai/identify",
    },
    {
      icon: HeartPulse,
      title: "Plant Health Guidance",
      description:
        "Review visible foliage symptoms and consider environmental factors before deciding what corrective care to apply.",
      to: "/plant-care-ai/health",
    },
    {
      icon: Calendar,
      title: "Personalized Care",
      description:
        "Shape a flexible care routine adjusted for your window orientation, room temperature, and container drainage.",
      to: "/plant-care-ai/care",
    },
    {
      icon: FolderTree,
      title: "Plant Organization",
      description:
        "Keep plant profiles, locations, soil substrates, observations, and care history together in one place.",
      to: "/plant-care-ai",
    },
    {
      icon: Radio,
      title: "Optional Sensor Monitoring",
      description:
        "Connect compatible environmental probes for soil moisture, light, and temperature telemetry when desired.",
      to: "/plant-care-ai/monitoring",
    },
    {
      icon: BookOpen,
      title: "Botanical Guides",
      description:
        "Practical, evidence-based articles on indoor lighting, winter care adjustments, and soil aeration.",
      to: "/blogs",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "A collaborative space for indoor growers to exchange observations, troubleshooting notes, and propagation progress.",
      to: "/community",
    },
    {
      icon: ShoppingBag,
      title: "Plant-Care Marketplace",
      description:
        "Curated selection of terracotta planters, chunky aroid substrate mixes, and precision watering cans.",
      to: "/marketplace",
    },
  ];

  return (
    <main id="main-content">
      {/* Section 1 — About Hero */}
      <section className="overflow-hidden border-b border-divider bg-warm-ivory py-16 lg:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="eyebrow">ABOUT LEAF &amp; ROOT</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-forest-950 sm:text-5xl lg:text-6xl">
              A more thoughtful way to care for plants.
            </h1>
            <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Leaf &amp; Root brings plant knowledge, practical care guidance, and thoughtful
              technology together to help people understand their plants and care for them with
              confidence.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <Button to="/plant-care-ai" size="lg">
                Explore Plant Care &amp; AI
              </Button>
              <Button to="/blogs" size="lg" variant="outline">
                Browse Botanical Guides
              </Button>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-100 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1200&q=84"
                alt="A plant caretaker tending indoor plants beside soft daylight"
                className="aspect-[4/5] w-full object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-md bg-forest-950/75 px-2 py-1 text-xs text-white">
                Photo by feey
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-text-subtle">
              Botanical knowledge paired with thoughtful everyday observation.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 2 — The Problem We Address */}
      <section className="section-space bg-white border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="The problem we address"
            title="Plant care information should feel easier to understand."
            description="Most plant owners experience the same common frustrations when searching for trustworthy care advice:"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {difficulties.map((diff) => (
              <div key={diff.number} className="surface-card p-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-forest-600 bg-forest-100 px-2.5 py-1 rounded">
                    {diff.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-forest-950">
                    {diff.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Our Approach */}
      <section className="section-space bg-forest-50 border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our approach"
            title="Connect knowledge, observation, and everyday care."
            description="Instead of scattered assumptions or rigid calendar alarms, Leaf & Root builds care around three complementary principles:"
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {principles.map((pr) => {
              const Icon = pr.icon;
              return (
                <div
                  key={pr.title}
                  className="surface-card p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                      <Icon className="size-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-forest-950">
                      {pr.title}
                    </h3>
                    <p className="text-sm leading-7 text-text-secondary">{pr.description}</p>
                  </div>
                  <div className="pt-4 border-t border-divider">
                    <Badge variant="success" dot={true}>
                      {pr.badge}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4 — What Leaf & Root Brings Together */}
      <section className="section-space bg-white border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Platform capabilities"
            title="What Leaf & Root brings together."
            description="Eight core tools and resources connected into a single coherent system for indoor growers:"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="surface-card p-6 flex flex-col justify-between hover:border-forest-400 transition"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-sand text-forest-800">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-forest-950">{cap.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-text-secondary">{cap.description}</p>
                  </div>
                  <div className="mt-5 border-t border-divider pt-3">
                    <Link
                      to={cap.to}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-700 hover:text-forest-950 transition"
                    >
                      <span>Explore destination</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 — Technology With a Practical Purpose */}
      <section className="section-space bg-warm-ivory border-b border-divider">
        <div className="container-shell grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="Practical technology"
              title="Technology should make plant care more understandable."
              description="We believe software should assist human observation, not replace it. Here is how technology works across Leaf & Root:"
            />

            <div className="space-y-4 pt-2">
              <div className="surface-card p-5 space-y-1">
                <h4 className="font-semibold text-forest-950 text-sm">
                  Image-based plant identification
                </h4>
                <p className="text-xs leading-6 text-text-secondary">
                  Helps users explore possible plant matches and native growing conditions from a
                  photo.
                </p>
              </div>

              <div className="surface-card p-5 space-y-1">
                <h4 className="font-semibold text-forest-950 text-sm">AI-assisted guidance</h4>
                <p className="text-xs leading-6 text-text-secondary">
                  Helps users consider visible symptoms alongside watering, temperature, and light
                  factors.
                </p>
              </div>

              <div className="surface-card p-5 space-y-1">
                <h4 className="font-semibold text-forest-950 text-sm">Saved plant profiles</h4>
                <p className="text-xs leading-6 text-text-secondary">
                  Organizes location notes, substrate choices, and upcoming tasks in one accessible
                  place.
                </p>
              </div>

              <div className="surface-card p-5 space-y-1">
                <h4 className="font-semibold text-forest-950 text-sm">
                  Compatible sensors (Optional)
                </h4>
                <p className="text-xs leading-6 text-text-secondary">
                  Provides environmental context when a compatible Bluetooth or Wi-Fi probe is
                  paired.
                </p>
              </div>
            </div>
          </div>

          {/* Limitations Callout */}
          <div className="lg:col-span-5">
            <div className="surface-card p-6 sm:p-8 space-y-4 border-root-300 bg-sand/30">
              <div className="flex items-center gap-2 text-root-700">
                <ShieldCheck className="size-5" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-forest-950">
                  Important Care Limitations
                </h3>
              </div>
              <p className="text-xs leading-6 text-text-secondary">
                We maintain transparent boundaries regarding what Leaf &amp; Root provides:
              </p>
              <ul className="space-y-3 text-xs leading-6 text-text-secondary">
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-forest-600 mt-1" />
                  <span>
                    <strong>Informational only:</strong> Suggested plant matches and symptom reviews
                    are informational guides, not guaranteed biological diagnoses.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-forest-600 mt-1" />
                  <span>
                    <strong>Professional advice:</strong> Image analysis does not replace
                    professional agricultural, botanical, medical, or veterinary advice.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-forest-600 mt-1" />
                  <span>
                    <strong>Hardware is optional:</strong> Sensors are not required. Identification
                    and routines work fully with manual physical checks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 text-forest-600 mt-1" />
                  <span>
                    <strong>No live device assumed:</strong> Sensor readings are displayed only when
                    an actual compatible sensor is connected.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Explore Leaf & Root */}
      <section className="section-space bg-white">
        <div className="container-shell text-center space-y-8">
          <SectionHeading
            eyebrow="Explore Leaf & Root"
            title="Ready to explore the platform?"
            description="Browse our connected plant-care tools, educational guides, community discussions, and curated marketplace."
            align="center"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto pt-4">
            <Button to="/plant-care-ai" variant="secondary" size="lg" fullWidth={true}>
              Plant Care &amp; AI
            </Button>
            <Button to="/blogs" variant="secondary" size="lg" fullWidth={true}>
              Botanical Guides
            </Button>
            <Button to="/community" variant="secondary" size="lg" fullWidth={true}>
              Community
            </Button>
            <Button to="/marketplace" variant="secondary" size="lg" fullWidth={true}>
              Marketplace
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
