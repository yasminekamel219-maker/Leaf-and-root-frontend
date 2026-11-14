import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  Search,
  HeartPulse,
  Calendar,
  Radio,
  ArrowLeft,
  Check,
  CheckCircle2,
  Info,
  AlertTriangle,
  ShieldCheck,
  Droplets,
  Sun,
  Thermometer,
} from "lucide-react";

/* --- 1. IDENTIFY SUBPAGE --- */
export const IdentifySubpage: React.FC = () => {
  const [selectedPlantIdx, setSelectedPlantIdx] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [saved, setSaved] = useState(false);

  const samples = [
    {
      name: "Monstera Deliciosa",
      scientific: "Monstera deliciosa Liebm.",
      family: "Araceae",
      light: "Bright indirect daylight",
      water: "Allow top 5cm to dry out",
      toxicity: "Toxic to cats and dogs (calcium oxalates)",
      img: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Golden Pothos",
      scientific: "Epipremnum aureum",
      family: "Araceae",
      light: "Medium to bright indirect",
      water: "Allow half the potting soil to dry",
      toxicity: "Mildly toxic if chewed by pets",
      img: "https://images.unsplash.com/photo-1763060819223-b92eb0ca6e4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Calathea Orbifolia",
      scientific: "Goeppertia orbifolia",
      family: "Marantaceae",
      light: "Medium indirect shade",
      water: "Keep evenly moist with distilled water",
      toxicity: "Non-toxic to pets",
      img: "https://images.unsplash.com/photo-1763518821752-8efd4e760c4d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const current = samples[selectedPlantIdx];

  const handleSelect = (idx: number) => {
    setSelectedPlantIdx(idx);
    setAnalyzing(true);
    setSaved(false);
    setTimeout(() => setAnalyzing(false), 500);
  };

  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-10">
        <div className="space-y-3 pb-6 border-b border-divider">
          <Link
            to="/plant-care-ai"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-subtle hover:text-forest-950 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Plant Care &amp; AI</span>
          </Link>
          <SectionHeading
            eyebrow="Botanical identification"
            title="Explore a plant match from a photograph."
            description="Inspect leaf geometry, margin serration, and growth node patterns matched against botanical taxonomy records."
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-semibold text-forest-950 text-sm">
              Select a sample specimen photo to test:
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {samples.map((s, idx) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`p-2 rounded-xl border text-center transition cursor-pointer bg-white ${
                    selectedPlantIdx === idx
                      ? "border-forest-600 ring-2 ring-forest-200"
                      : "border-border hover:border-forest-400"
                  }`}
                >
                  <img src={s.img} alt={s.name} className="h-20 w-full object-cover rounded-lg" />
                  <span className="text-[11px] font-semibold text-forest-950 block mt-1.5 line-clamp-1">
                    {s.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="surface-card p-5 space-y-2 text-xs text-text-secondary">
              <h4 className="font-bold text-forest-950">How image analysis works:</h4>
              <p>
                The identifier examines leaf shape, venation, and stem node formation against
                taxonomic plant datasets to return high-probability species matches.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {analyzing ? (
              <div className="surface-card p-12 text-center text-xs text-text-secondary">
                <p className="font-semibold text-forest-950">
                  Analyzing foliage characteristics...
                </p>
              </div>
            ) : (
              <div className="surface-card p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-divider">
                  <div>
                    <Badge variant="info">High match candidate</Badge>
                    <h4 className="text-2xl font-semibold text-forest-950 mt-2">{current.name}</h4>
                    <p className="text-xs text-text-subtle italic">
                      {current.scientific} &bull; Family: {current.family}
                    </p>
                  </div>
                  <Badge variant="neutral">Sample preview</Badge>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 text-xs">
                  <div className="p-3.5 bg-sand/50 rounded-lg border border-border">
                    <span className="font-bold text-forest-950 block mb-1">Light Requirements</span>
                    <span className="text-text-secondary">{current.light}</span>
                  </div>
                  <div className="p-3.5 bg-sand/50 rounded-lg border border-border">
                    <span className="font-bold text-forest-950 block mb-1">Watering Cadence</span>
                    <span className="text-text-secondary">{current.water}</span>
                  </div>
                  <div className="p-3.5 bg-sand/50 rounded-lg border border-border sm:col-span-2">
                    <span className="font-bold text-root-700 block mb-1">Pet Toxicity Note</span>
                    <span className="text-text-secondary">{current.toxicity}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-sand/50 border border-border rounded-lg text-xs text-text-secondary flex items-start gap-2">
                  <Info className="size-4 shrink-0 text-forest-600 mt-0.5" />
                  <p>
                    <strong>Informational note:</strong> Image matching provides exploratory
                    suggestions. Always inspect mature growth characteristics and stem structure
                    before deciding care actions.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    onClick={() => {
                      setSaved(true);
                      setTimeout(() => setSaved(false), 2000);
                    }}
                  >
                    {saved ? "Saved to Collection!" : "Save Plant Profile"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

/* --- 2. HEALTH SUBPAGE --- */
export const HealthSubpage: React.FC = () => {
  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-10">
        <div className="space-y-3 pb-6 border-b border-divider">
          <Link
            to="/plant-care-ai"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-subtle hover:text-forest-950 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Plant Care &amp; AI</span>
          </Link>
          <SectionHeading
            eyebrow="Plant health guidance"
            title="Understand visible plant symptoms with greater clarity."
            description="Organize possible symptoms, environmental context, toxicity information, and practical next steps without claiming a guaranteed diagnosis."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-card p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-divider">
              <span className="text-xs font-semibold text-text-subtle uppercase">Case Study A</span>
              <Badge variant="warning">Foliage stress</Badge>
            </div>
            <h3 className="text-lg font-semibold text-forest-950">
              Leaf-Edge Browning &amp; Crisping
            </h3>
            <p className="text-xs leading-6 text-text-secondary">
              Occurs when transpiration outpaces root moisture absorption, frequently caused by low
              ambient humidity, irregular drying cycles, or tap water minerals.
            </p>
            <div className="space-y-2 pt-2 border-t border-divider text-xs text-text-secondary">
              <p>
                <strong>Check 1:</strong> Inspect root ball moisture uniformity.
              </p>
              <p>
                <strong>Check 2:</strong> Check distance from heater vents or drafty windows.
              </p>
              <p>
                <strong>Check 3:</strong> Ensure container drainage holes are clear.
              </p>
            </div>
          </div>

          <div className="surface-card p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-divider">
              <span className="text-xs font-semibold text-text-subtle uppercase">Case Study B</span>
              <Badge variant="error">Root zone</Badge>
            </div>
            <h3 className="text-lg font-semibold text-forest-950">
              Lower Leaf Yellowing with Soft Stems
            </h3>
            <p className="text-xs leading-6 text-text-secondary">
              Persistent saturation suffocates root cells. Water must drain completely, and the top
              5cm of potting mix should dry before watering again.
            </p>
            <div className="space-y-2 pt-2 border-t border-divider text-xs text-text-secondary">
              <p>
                <strong>Check 1:</strong> Confirm pot is never left sitting in stagnant saucer
                water.
              </p>
              <p>
                <strong>Check 2:</strong> Check for chunky substrate aeration particles.
              </p>
              <p>
                <strong>Check 3:</strong> Verify plant is receiving adequate indirect sunlight.
              </p>
            </div>
          </div>
        </div>

        <div className="surface-card p-6 border-warning-border bg-warning-soft/30 space-y-2 text-xs text-warning-strong">
          <p className="font-semibold flex items-center gap-1.5 text-sm">
            <ShieldCheck className="size-4" />
            Important Safety &amp; Diagnostic Limitation
          </p>
          <p className="leading-relaxed">
            Image-based guidance is informational and provides care context rather than a guaranteed
            diagnosis. Suspected toxic exposure or pet ingestion requires immediate medical or
            veterinary consultation.
          </p>
        </div>
      </div>
    </main>
  );
};

/* --- 3. CARE SUBPAGE --- */
export const CareSubpage: React.FC = () => {
  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-10">
        <div className="space-y-3 pb-6 border-b border-divider">
          <Link
            to="/plant-care-ai"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-subtle hover:text-forest-950 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Plant Care &amp; AI</span>
          </Link>
          <SectionHeading
            eyebrow="Personalized care"
            title="Care routines shaped around your plants and home."
            description="Organize watering schedules, room locations, and seasonal changes tailored to your actual indoor conditions."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="surface-card p-6 space-y-3">
            <Badge variant="info">Monstera Deliciosa</Badge>
            <h4 className="font-semibold text-forest-950 text-base">Living Room Window</h4>
            <p className="text-xs text-text-secondary leading-6">
              Bright indirect daylight. Top 5cm soil drying cadence: every 7–9 days during active
              growth.
            </p>
            <div className="pt-3 border-t border-divider text-xs text-text-subtle">
              Next scheduled check: Water today
            </div>
          </div>

          <div className="surface-card p-6 space-y-3">
            <Badge variant="success">Golden Pothos</Badge>
            <h4 className="font-semibold text-forest-950 text-base">Study Shelf</h4>
            <p className="text-xs text-text-secondary leading-6">
              Medium indirect light. Allows 50% soil dry-down between thorough water soaks.
            </p>
            <div className="pt-3 border-t border-divider text-xs text-text-subtle">
              Next scheduled check: Rotate in 3 days
            </div>
          </div>

          <div className="surface-card p-6 space-y-3">
            <Badge variant="success">Calathea Orbifolia</Badge>
            <h4 className="font-semibold text-forest-950 text-base">Bedroom Credenza</h4>
            <p className="text-xs text-text-secondary leading-6">
              Filtered indirect shade. Requires elevated humidity and distilled or rainwater.
            </p>
            <div className="pt-3 border-t border-divider text-xs text-text-subtle">
              Next scheduled check: Mist tomorrow
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* --- 4. MONITORING SUBPAGE --- */
export const MonitoringSubpage: React.FC = () => {
  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-10">
        <div className="space-y-3 pb-6 border-b border-divider">
          <Link
            to="/plant-care-ai"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-subtle hover:text-forest-950 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Plant Care &amp; AI</span>
          </Link>
          <SectionHeading
            eyebrow="Smart monitoring"
            title="See how a plant’s environment changes over time."
            description="Learn how compatible Bluetooth and Wi-Fi sensor probes provide environmental context. Hardware remains strictly optional."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card p-8 space-y-4">
            <Radio className="size-8 text-forest-700" />
            <h3 className="text-xl font-semibold text-forest-950">
              Hardware Compatibility Standards
            </h3>
            <p className="text-xs leading-6 text-text-secondary">
              Leaf &amp; Root supports open standard Bluetooth Low Energy (BLE 5.0+) and Zigbee 3.0
              soil probes measuring moisture, lux, and ambient temperature.
            </p>
            <div className="pt-4 border-t border-divider space-y-2 text-xs text-text-secondary">
              <p>
                <strong>&bull; No proprietary lock-in:</strong> Compatible with widely available
                third-party probes.
              </p>
              <p>
                <strong>&bull; Local connection:</strong> Telemetry stays in your personal
                workspace.
              </p>
              <p>
                <strong>&bull; Fully optional:</strong> The platform is complete without sensors.
              </p>
            </div>
          </div>

          <div className="surface-card p-8 space-y-4 bg-sand/30">
            <h3 className="text-xl font-semibold text-forest-950">
              Manual Physical Checks Alternative
            </h3>
            <p className="text-xs leading-6 text-text-secondary">
              If you prefer not to use hardware, our manual finger-check and pot-weight guidelines
              provide equally dependable care cues without electronic accessories.
            </p>
            <div className="pt-4 border-t border-divider text-xs text-forest-800 font-medium">
              Explore our Botanical Guides for detailed substrate testing methods.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
