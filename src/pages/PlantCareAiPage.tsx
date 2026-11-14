import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  Search,
  HeartPulse,
  Calendar,
  Droplets,
  Sun,
  Thermometer,
  Check,
  ArrowRight,
  ShieldCheck,
  Info,
  AlertTriangle,
  Radio,
  Layers,
} from "lucide-react";

export const PlantCareAiPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"identify" | "health" | "care">("identify");
  const [sensorToggle, setSensorToggle] = useState<"sensor" | "manual">("sensor");

  const [plants, setPlants] = useState([
    {
      id: "monstera",
      commonName: "Monstera Deliciosa",
      location: "Living Room Window",
      status: "Needs water",
      tone: "warning" as const,
      nextTask: "Water today",
      checked: false,
    },
    {
      id: "pothos",
      commonName: "Golden Pothos",
      location: "Study Shelf",
      status: "Optimal",
      tone: "success" as const,
      nextTask: "Rotate in 3 days",
      checked: true,
    },
    {
      id: "calathea",
      commonName: "Calathea Orbifolia",
      location: "Bedroom Credenza",
      status: "Thriving",
      tone: "success" as const,
      nextTask: "Mist tomorrow",
      checked: false,
    },
  ]);

  const togglePlantTask = (id: string) => {
    setPlants((prev) => prev.map((p) => (p.id === id ? { ...p, checked: !p.checked } : p)));
  };

  return (
    <main id="main-content">
      {/* Section 1 — Hero */}
      <section className="overflow-hidden border-b border-divider bg-warm-ivory py-16 lg:py-24">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-6">
            <p className="eyebrow">PLANT CARE &amp; AI</p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-forest-950 sm:text-5xl lg:text-6xl">
              Understand your plant before deciding what it needs.
            </h1>
            <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Identify a possible plant match, explore visible health concerns, and turn practical
              care information into an organized routine.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <Button to="/plant-care-ai/identify" size="lg">
                Explore plant identification
              </Button>
              <Button to="/plant-care-ai/care" size="lg" variant="outline">
                Explore personalized care
              </Button>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-forest-100 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1200&q=84"
                alt="Healthy green Monstera leaves in natural light"
                className="aspect-[4/5] w-full object-cover"
              />
              <span className="absolute bottom-3 right-3 rounded-md bg-forest-950/75 px-2 py-1 text-xs text-white">
                Photo by Chris Lee
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-text-subtle">
              Clear botanical reference &bull; Monitored leaf health
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 2 — Core Plant-Care Tools */}
      <section className="section-space bg-white border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core plant-care tools"
            title="Different tools answer different plant-care questions."
            description="Each tool addresses a specific stage in plant ownership, from identifying species to diagnosing symptoms and scheduling everyday care."
          />

          {/* Tool Tab Switcher */}
          <div className="mt-10 flex border-b border-divider space-x-2 sm:space-x-4 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("identify")}
              className={`pb-3 px-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "identify"
                  ? "border-forest-600 text-forest-950"
                  : "border-transparent text-text-subtle hover:text-forest-950"
              }`}
            >
              <Search className="size-4" />
              <span>A. Plant Identification</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("health")}
              className={`pb-3 px-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "health"
                  ? "border-forest-600 text-forest-950"
                  : "border-transparent text-text-subtle hover:text-forest-950"
              }`}
            >
              <HeartPulse className="size-4" />
              <span>B. Plant Health Guidance</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("care")}
              className={`pb-3 px-3 text-sm font-semibold transition border-b-2 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === "care"
                  ? "border-forest-600 text-forest-950"
                  : "border-transparent text-text-subtle hover:text-forest-950"
              }`}
            >
              <Calendar className="size-4" />
              <span>C. Personalized Care</span>
            </button>
          </div>

          {/* TAB A: Identification */}
          {activeTab === "identify" && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start animate-fadeIn">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <Badge variant="info">Tool A</Badge>
                  <h3 className="mt-3 text-2xl font-semibold text-forest-950">
                    Plant Identification
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    Help users explore a possible plant match from a photograph. Compare leaf
                    margins, venation patterns, and stem growth with verified botanical taxonomy.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    The 6-Step Identification Flow
                  </h4>
                  <ol className="space-y-2 text-xs text-text-secondary">
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">1.</span>
                      <span>Take a plant photograph or upload an image.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">2.</span>
                      <span>Review the selected image to verify clarity and leaf visibility.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">3.</span>
                      <span>
                        Start the identification process against botanical taxonomy records.
                      </span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">4.</span>
                      <span>Review the suggested plant match with scientific classification.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">5.</span>
                      <span>Explore botanical information and basic care guidance.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">6.</span>
                      <span>Save the plant to the collection when the feature is available.</span>
                    </li>
                  </ol>
                </div>

                <Button to="/plant-care-ai/identify">Explore plant identification</Button>
              </div>

              {/* Illustrative Result Preview */}
              <div className="lg:col-span-6 surface-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-divider">
                  <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider">
                    Identification Preview
                  </span>
                  <Badge variant="neutral">Illustrative result</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80"
                    alt="Monstera leaf specimen"
                    className="w-full h-36 object-cover rounded-lg border border-border"
                  />
                  <div className="p-3 bg-sand/40 rounded-lg text-xs space-y-1.5 flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-bold text-forest-600">
                      Suggested Match
                    </span>
                    <h5 className="font-bold text-forest-950 text-sm">Monstera deliciosa</h5>
                    <p className="text-text-subtle italic">Family: Araceae</p>
                    <p className="text-text-secondary pt-1">
                      <strong>Light:</strong> Bright indirect &bull; <strong>Water:</strong> Allow
                      top 5cm dry
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-sand/50 rounded-lg text-xs text-text-secondary flex items-start gap-2">
                  <Info className="size-4 shrink-0 text-forest-600 mt-0.5" />
                  <p>
                    <strong>Informational note:</strong> Identification results provide suggestions
                    to explore rather than a guaranteed botanical determination. Check physical
                    characteristics before making care decisions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB B: Health Guidance */}
          {activeTab === "health" && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start animate-fadeIn">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <Badge variant="warning">Tool B</Badge>
                  <h3 className="mt-3 text-2xl font-semibold text-forest-950">
                    Plant Health Guidance
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    Help users understand visible plant symptoms and consider possible causes before
                    taking hasty corrective action.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    The 5-Step Health Guidance Flow
                  </h4>
                  <ol className="space-y-2 text-xs text-text-secondary">
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">1.</span>
                      <span>Observe a visible symptom on leaves, stems, or soil.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">2.</span>
                      <span>Provide or select a plant photograph of the symptom.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">3.</span>
                      <span>Review possible botanical explanations and stress factors.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">4.</span>
                      <span>Consider watering, humidity, temperature, light, and drainage.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">5.</span>
                      <span>Explore appropriate care guidance and restorative steps.</span>
                    </li>
                  </ol>
                </div>

                <Button to="/plant-care-ai/health">Explore plant health guidance</Button>
              </div>

              {/* Symptom Example: Leaf-edge browning */}
              <div className="lg:col-span-6 surface-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-divider">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="size-4 text-warning-strong" />
                    <span className="text-xs font-semibold text-forest-950 uppercase">
                      Case Example: Leaf-Edge Browning
                    </span>
                  </div>
                  <Badge variant="warning">Illustrative triage</Badge>
                </div>

                <p className="text-xs leading-6 text-text-secondary">
                  Crisp, dry brown edges along leaf margins often reflect low ambient humidity,
                  irregular moisture cycles, or mineral concentration in tap water.
                </p>

                <div className="space-y-2 pt-2 border-t border-divider">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    Three Practical Checks Before Changing Care:
                  </h5>
                  <div className="space-y-2 text-xs text-text-secondary">
                    <div className="p-3 rounded-lg bg-sand/40 border border-border">
                      <strong>1. Review recent watering:</strong> Confirm if root ball dried
                      completely or remained soggy in the lower saucer.
                    </div>
                    <div className="p-3 rounded-lg bg-sand/40 border border-border">
                      <strong>2. Check heat and humidity:</strong> Measure proximity to heating
                      vents, radiators, or dry winter drafts.
                    </div>
                    <div className="p-3 rounded-lg bg-sand/40 border border-border">
                      <strong>3. Inspect soil drainage:</strong> Verify water escapes freely through
                      container drainage holes.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-warning-soft border border-warning-border rounded-lg text-xs text-warning-strong space-y-1">
                  <p className="font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="size-4" />
                    Informational &amp; Toxicity Warning
                  </p>
                  <p className="leading-relaxed">
                    Image-based guidance is informational and not a guaranteed diagnosis. Toxicity
                    information must be treated carefully. When exposure or ingestion is suspected,
                    users should consult medical or veterinary professionals immediately.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB C: Personalized Care */}
          {activeTab === "care" && (
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start animate-fadeIn">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <Badge variant="success">Tool C</Badge>
                  <h3 className="mt-3 text-2xl font-semibold text-forest-950">Personalized Care</h3>
                  <p className="mt-2 text-sm leading-7 text-text-secondary">
                    Connect plant information, its room location, and recorded observations with an
                    organized, adaptive care routine.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    The 5-Step Personalized Care Flow
                  </h4>
                  <ol className="space-y-2 text-xs text-text-secondary">
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">1.</span>
                      <span>Save a plant profile with verified species information.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">2.</span>
                      <span>Record where the plant is located in your home.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">3.</span>
                      <span>
                        Review relevant care considerations for light and container volume.
                      </span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">4.</span>
                      <span>Organize watering and other care tasks without rigid assumptions.</span>
                    </li>
                    <li className="p-3 rounded-lg bg-sand/50 border border-border flex items-start gap-2.5">
                      <span className="font-bold text-forest-800">5.</span>
                      <span>
                        Record observations and upcoming activities to adjust care rhythm.
                      </span>
                    </li>
                  </ol>
                </div>

                <Button to="/plant-care-ai/care">Explore personalized care</Button>
              </div>

              {/* Sample Plant Roster */}
              <div className="lg:col-span-6 surface-card p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-divider">
                  <div>
                    <h4 className="font-semibold text-forest-950 text-sm">Sample Care Roster</h4>
                    <span className="text-xs text-text-subtle">
                      Click checkmark to test completing tasks
                    </span>
                  </div>
                  <Badge variant="neutral">Illustrative sample</Badge>
                </div>

                <div className="space-y-3">
                  {plants.map((plant) => (
                    <div
                      key={plant.id}
                      className={`p-3.5 rounded-xl border transition flex items-center justify-between gap-3 ${
                        plant.checked
                          ? "bg-forest-50 border-forest-200"
                          : "bg-white border-border hover:border-forest-400"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-forest-950 text-sm">
                            {plant.commonName}
                          </span>
                          <Badge variant={plant.tone} dot={true}>
                            {plant.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-text-subtle mt-0.5">
                          {plant.location} &bull; {plant.nextTask}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => togglePlantTask(plant.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                          plant.checked
                            ? "bg-forest-600 text-white"
                            : "bg-sand text-forest-800 hover:bg-forest-100"
                        }`}
                      >
                        {plant.checked ? (
                          <>
                            <Check className="size-3.5" />
                            <span>Completed</span>
                          </>
                        ) : (
                          <span>Mark Done</span>
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-text-subtle pt-2 border-t border-divider">
                  Care schedules adapt for winter dormancy, heating cycles, and pot substrate
                  porosity.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 3 — How the tools work together */}
      <section className="section-space bg-forest-50 border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Connected workflow"
            title="From one plant photo to an organized care routine."
            description="Each tool naturally feeds into the next, creating a connected cycle that keeps care grounded in actual plant needs:"
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6 space-y-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-900">
                1
              </span>
              <h4 className="text-lg font-semibold text-forest-950">Identify your plant</h4>
              <p className="text-xs leading-6 text-text-secondary">
                Use a photo to determine the species, native climate origins, light classification,
                and pet toxicity profile.
              </p>
            </div>

            <div className="surface-card p-6 space-y-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-900">
                2
              </span>
              <h4 className="text-lg font-semibold text-forest-950">Understand its needs</h4>
              <p className="text-xs leading-6 text-text-secondary">
                Review symptom checklists, examine room light exposure, and calibrate seasonal water
                demands before taking action.
              </p>
            </div>

            <div className="surface-card p-6 space-y-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-forest-100 text-xs font-bold text-forest-900">
                3
              </span>
              <h4 className="text-lg font-semibold text-forest-950">Build a care routine</h4>
              <p className="text-xs leading-6 text-text-secondary">
                Set up flexible reminders, track repotting dates, and connect optional sensor
                readings for environmental telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Optional Environmental Monitoring */}
      <section className="section-space bg-warm-ivory border-b border-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-5">
            <Badge variant="neutral">Optional capability</Badge>
            <h2 className="section-title">
              Add environmental context when a compatible sensor is connected.
            </h2>
            <p className="section-copy">
              Compatible sensors can provide additional environmental metrics such as soil moisture,
              ambient light exposure, and temperature patterns.
            </p>

            <div className="surface-card p-4 space-y-2 text-xs text-text-secondary">
              <p className="font-bold text-forest-950">Sensor Clarity Guarantee:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Sample readings below are illustrative demonstrations.</li>
                <li>Basic plant care guidance remains fully available without a device.</li>
                <li>No device is assumed connected.</li>
              </ul>
            </div>

            <div>
              <Button
                variant="outline"
                onClick={() => setSensorToggle(sensorToggle === "sensor" ? "manual" : "sensor")}
              >
                Switch mode: Currently showing{" "}
                {sensorToggle === "sensor" ? "Sample Sensor Telemetry" : "Manual Soil Checks"}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 surface-card p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-divider">
              <div>
                <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider">
                  Monstera Deliciosa &bull; Living Room
                </span>
                <h4 className="font-semibold text-forest-950 text-base">
                  {sensorToggle === "sensor"
                    ? "Illustrative Sensor Telemetry"
                    : "Manual Observation Guide"}
                </h4>
              </div>
              <Badge variant="neutral">Sample data</Badge>
            </div>

            {sensorToggle === "sensor" ? (
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="p-4 rounded-xl bg-sand/60 border border-border space-y-1">
                  <span className="text-xs text-forest-700 flex items-center gap-1.5 font-medium">
                    <Droplets className="size-4" /> Soil moisture
                  </span>
                  <p className="text-2xl font-bold text-forest-950">42%</p>
                  <span className="text-[11px] text-text-subtle block">Example range</span>
                </div>

                <div className="p-4 rounded-xl bg-sand/60 border border-border space-y-1">
                  <span className="text-xs text-forest-700 flex items-center gap-1.5 font-medium">
                    <Sun className="size-4" /> Light exposure
                  </span>
                  <p className="text-2xl font-bold text-forest-950">6.4h</p>
                  <span className="text-[11px] text-text-subtle block">Example day</span>
                </div>

                <div className="p-4 rounded-xl bg-sand/60 border border-border space-y-1">
                  <span className="text-xs text-forest-700 flex items-center gap-1.5 font-medium">
                    <Thermometer className="size-4" /> Temperature
                  </span>
                  <p className="text-2xl font-bold text-forest-950">22°C</p>
                  <span className="text-[11px] text-text-subtle block">Example reading</span>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-sand/40 border border-border space-y-2 text-xs text-text-secondary">
                <p className="font-semibold text-forest-950">Manual Physical Finger Check:</p>
                <p>
                  Insert your index finger 5cm into the soil substrate. If it feels damp and
                  particles stick, moisture is adequate. If crumbly and dry throughout, water
                  thoroughly.
                </p>
                <p className="text-forest-700 font-medium">
                  Leaf &amp; Root functions completely without hardware sensors.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5 — Responsible Guidance */}
      <section className="section-space bg-white border-b border-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Responsible guidance"
            title="Ethical standards for plant care recommendations."
            description="We clearly communicate the limits of digital plant recommendations so growers make safe, informed choices:"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="surface-card p-6 space-y-2">
              <h4 className="font-semibold text-forest-950 text-sm">
                Suggested matches need verification
              </h4>
              <p className="text-xs leading-6 text-text-secondary">
                A suggested plant match is an exploratory baseline; manual review of stem nodes and
                growth form confirms species identification.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h4 className="font-semibold text-forest-950 text-sm">
                Visible symptoms have multiple causes
              </h4>
              <p className="text-xs leading-6 text-text-secondary">
                Foliage discoloration or curling can stem from lighting, humidity, watering, or soil
                density interacting together.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h4 className="font-semibold text-forest-950 text-sm">
                Environmental history matters
              </h4>
              <p className="text-xs leading-6 text-text-secondary">
                Past watering patterns and recent temperature changes impact soil conditions more
                than genetic rules alone.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h4 className="font-semibold text-forest-950 text-sm">
                AI guidance is informational
              </h4>
              <p className="text-xs leading-6 text-text-secondary">
                Suggestions provide educational context to guide decisions rather than definitive,
                guaranteed diagnoses.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2">
              <h4 className="font-semibold text-forest-950 text-sm">
                Not a professional diagnosis
              </h4>
              <p className="text-xs leading-6 text-text-secondary">
                For valuable specimen plants, crop pathology, or pest infestations, consult local
                agricultural extension specialists.
              </p>
            </div>

            <div className="surface-card p-6 space-y-2 border-warning-border bg-warning-soft/30">
              <h4 className="font-semibold text-warning-strong text-sm">
                Toxicity &amp; Emergency Exposure
              </h4>
              <p className="text-xs leading-6 text-warning-strong">
                Suspected toxic exposure or ingestion by humans or pets requires immediate
                consultation with medical or veterinary professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Final CTA */}
      <section className="section-space bg-warm-ivory">
        <div className="container-shell text-center space-y-6">
          <SectionHeading
            eyebrow="Get started"
            title="Build a clearer care routine for your plants."
            description="Start by identifying a plant, explore its care needs, and keep useful information organized."
            align="center"
          />

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button to="/signup" size="lg">
              Start your plant collection
            </Button>
            <Button to="/blogs" size="lg" variant="outline">
              Browse botanical guides
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
