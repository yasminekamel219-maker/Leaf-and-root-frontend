import {
  PlantSpecimen,
  DiagnosticSymptom,
  BotanicalGuide,
  MarketplaceProduct,
  CommunityPost,
} from "../types";

export const SAMPLE_PLANTS: PlantSpecimen[] = [
  {
    id: "monstera-deliciosa",
    commonName: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa Liebm.",
    family: "Araceae",
    location: "Living Room Window",
    lightNeeds: "Bright indirect daylight; avoid harsh midday sun",
    waterCadence: "Every 8-10 days when top 5cm of soil feels dry",
    humidityRange: "55% - 70% relative humidity",
    soilPreference: "Chunky aroid mix with orchid bark, perlite, and peat",
    toxicity: "Contains insoluble calcium oxalates; keep away from pets",
    status: "Optimal growth",
    nextAction: "Watering check",
    nextDueDays: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZXBsYW50cyUyMGluZG9vciUyMHBsYW50JTIwY2FyZSUyMG1vbnN0ZXJhfGVufDF8fHx8MTc5NDA3MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    completedToday: false,
  },
  {
    id: "golden-pothos",
    commonName: "Golden Pothos",
    scientificName: "Epipremnum aureum",
    family: "Araceae",
    location: "Study Shelf",
    lightNeeds: "Moderate to bright indirect light; tolerates lower light",
    waterCadence: "Every 7-9 days; allow soil to dry halfway down",
    humidityRange: "40% - 60% relative humidity",
    soilPreference: "Well-draining potting soil with perlite",
    toxicity: "Mildly toxic if ingested by cats or dogs",
    status: "Trailing steadily",
    nextAction: "Soil moisture inspection",
    nextDueDays: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1763060819223-b92eb0ca6e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjBwb3Rob3MlMjBpbmRvb3IlMjBwbGFudCUyMGhvdXNlcGxhbnR8ZW58MXx8fHwxNzk0MDcxNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    completedToday: true,
  },
  {
    id: "calathea-orbifolia",
    commonName: "Calathea Orbifolia",
    scientificName: "Goeppertia orbifolia",
    family: "Marantaceae",
    location: "Bedroom Credenza",
    lightNeeds: "Medium indirect shade; sensitive to direct sun",
    waterCadence: "Every 5-7 days with filtered or distilled water",
    humidityRange: "60% - 80% relative humidity",
    soilPreference: "Moisture-retentive, peat-rich aerated substrate",
    toxicity: "Non-toxic to cats and dogs (pet-friendly)",
    status: "High moisture demand",
    nextAction: "Humidity & misting review",
    nextDueDays: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1763518821752-8efd4e760c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxhdGhlYSUyMG9yYmlmb2xpYSUyMGluZG9vciUyMHBsYW50fGVufDF8fHx8MTc5NDA3MTY2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    completedToday: false,
  },
];

export const SAMPLE_DIAGNOSTIC_SYMPTOMS: DiagnosticSymptom[] = [
  {
    id: "leaf-edge-browning",
    title: "Leaf-Edge Browning & Crisping",
    category: "Foliage & Moisture",
    visualIndicator:
      "Dry, crispy margins along outer perimeter of older leaves while center remains green.",
    potentialCauses: [
      "Low ambient humidity (often under 40% near heating vents or air conditioners)",
      "Irregular watering cadence (cycles of extreme drying followed by saturation)",
      "Tap water mineral buildup (excess fluoride, chlorine, or soluble salts in city water)",
      "Compacted root system restricting even water uptake",
    ],
    practicalChecks: [
      "Review recent watering: Check if root ball is uniformly moist or hydrophobic in the core.",
      "Check heat and humidity: Measure distance from radiator vents, drafty windows, or air conditioning units.",
      "Inspect soil drainage: Ensure pot has functional drainage holes and water does not pool in the saucer.",
    ],
    recommendedAction:
      "Trim dead tips with clean shears leaving a thin brown margin; group plants or use a pebble tray to lift local humidity, and switch to filtered or rainwater for sensitive species.",
    disclaimer:
      "Image-based guidance is informational and provides care context rather than a guaranteed diagnosis. Environmental history and physical inspection remain essential.",
  },
  {
    id: "yellowing-lower-leaves",
    title: "Lower Leaf Yellowing & Soft Stems",
    category: "Root Zone & Drainage",
    visualIndicator:
      "Entire lower leaf transitions to pale yellow with limp, translucent petioles.",
    potentialCauses: [
      "Persistent soil over-saturation causing oxygen depletion around roots",
      "Poor container drainage or standing water in cachepot",
      "Natural aging if isolated to a single oldest leaf during new growth flush",
    ],
    practicalChecks: [
      "Review recent watering: Smell the drainage holes for anaerobic sour odor.",
      "Check soil density: Gauge if substrate remains soggy more than 7 days after watering.",
      "Inspect stem base: Confirm stem tissue is firm and not soft or blackening.",
    ],
    recommendedAction:
      "Allow soil to dry out significantly before next watering; verify drainage holes are unobstructed, and gently aerate the top layer of substrate with a wooden skewer.",
    disclaimer:
      "Informational guidance only. If root rot is advanced, root trimming and repotting in fresh substrate may be necessary.",
  },
];

export const PLATFORM_CAPABILITIES = [
  {
    id: "identification",
    title: "Plant Identification",
    shortDesc:
      "Match plants from photographs and explore verified botanical classification and native habitat data.",
    route: "plant-care-ai" as const,
    sectionId: "identification",
  },
  {
    id: "health-guidance",
    title: "Plant Health Guidance",
    shortDesc:
      "Understand visible symptoms such as yellowing, browning, and drooping with structured diagnostic checks.",
    route: "plant-care-ai" as const,
    sectionId: "health",
  },
  {
    id: "personalized-care",
    title: "Personalized Care",
    shortDesc:
      "Turn species requirements into a practical schedule adjusted for your room exposure and pot size.",
    route: "plant-care-ai" as const,
    sectionId: "care",
  },
  {
    id: "plant-organization",
    title: "Plant Organization",
    shortDesc:
      "Maintain individual plant profiles, room locations, care logs, and upcoming tasks in one clear view.",
    route: "plant-care-ai" as const,
    sectionId: "organization",
  },
  {
    id: "sensor-monitoring",
    title: "Optional Sensor Monitoring",
    shortDesc:
      "Connect compatible Bluetooth or Wi-Fi soil and ambient sensors to receive contextual environmental readings.",
    route: "plant-care-ai" as const,
    sectionId: "monitoring",
  },
  {
    id: "botanical-guides",
    title: "Botanical Guides",
    shortDesc:
      "Read practical, in-depth educational articles written for everyday plant caretakers.",
    route: "blogs" as const,
    sectionId: "",
  },
  {
    id: "community",
    title: "Community Discussions",
    shortDesc:
      "Exchange observations, propagation successes, and problem-solving tips with fellow plant enthusiasts.",
    route: "community" as const,
    sectionId: "",
  },
  {
    id: "marketplace",
    title: "Plant-Care Marketplace",
    shortDesc:
      "Carefully curated potting substrates, precision moisture probes, and quality care tools.",
    route: "marketplace" as const,
    sectionId: "",
  },
];

export const BOTANICAL_GUIDES: BotanicalGuide[] = [
  {
    id: "winter-watering",
    title: "Winter Watering Adjustments: Preventing Root Rot in Lower Light",
    category: "Watering & Seasons",
    readingTime: "6 min read",
    summary:
      "How shorter daylight hours slow transpiration, why your plants need up to 40% less water in winter, and simple physical checks before reaching for the watering can.",
    authorRole: "Botanical Care Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1598880940371-c756e015fea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmluZyUyMGhvdXNlcGxhbnQlMjBpbmRvb3IlMjBwbGFudCUyMGNhcmUlMjBoYW5kc3xlbnwxfHx8fDE3OTQwNzE0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "aroid-substrate",
    title: "Understanding Soil Aeration: Why Standard Potting Soil Stifles Aroids",
    category: "Substrate & Repotting",
    readingTime: "5 min read",
    summary:
      "Epiphytic and hemiepiphytic roots require oxygen circulation. Learn how chunky pine bark, coarse pumice, and coco chips prevent soil compaction.",
    authorRole: "Soil Science Educator",
    imageUrl:
      "https://images.unsplash.com/photo-1636525653613-2a3a05c00759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3VzZXBsYW50cyUyMGluZG9vciUyMHBsYW50JTIwY2FyZSUyMG1vbnN0ZXJhfGVufDF8fHx8MTc5NDA3MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "indoor-light-zones",
    title: "Decoding Indoor Light: Direct Sun vs. Bright Indirect vs. Low Light",
    category: "Light & Environment",
    readingTime: "7 min read",
    summary:
      "Why human eyes adapt quickly to dim light while plant chlorophyll starves. Practical techniques to measure usable foot-candles without expensive lab tools.",
    authorRole: "Horticultural Researcher",
    imageUrl:
      "https://images.unsplash.com/photo-1493673272479-a20888bcee10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3VzZXBsYW50cyUyMGluZG9vciUyMHBsYW50JTIwY2FyZSUyMG1vbnN0ZXJhfGVufDF8fHx8MTc5NDA3MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const MARKETPLACE_ITEMS: MarketplaceProduct[] = [
  {
    id: "moisture-probe",
    name: "Dual-Depth Analog Soil Moisture Probe",
    category: "Diagnostics",
    price: 22.0,
    description:
      "Instant root-level moisture readout without batteries. Calibrated for 0 to 10 scale to check root-ball saturation accurately.",
    specification: "Stainless steel 20cm dual probe with direct dial",
    imageUrl:
      "https://images.unsplash.com/photo-1783149173467-74e30fc23434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3YXRlcmluZyUyMGNhbiUyMHBsYW50JTIwY2FyZSUyMHRvb2xzJTIwZ2FyZGVuaW5nJTIwaW5kb29yfGVufDF8fHx8MTc5NDA3MTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "brass-watering-can",
    name: "Precision Brass Long-Stem Watering Can (1.2L)",
    category: "Care Tools",
    price: 46.0,
    description:
      "Narrow curved spout delivers water directly to the soil line without splashing delicate foliage or overflowing dense pots.",
    specification: "Solid spun brass with protective matte lacquer, 1.2L capacity",
    imageUrl:
      "https://images.unsplash.com/photo-1497990571654-77aa8ec36038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3YXRlcmluZyUyMGNhbiUyMHBsYW50JTIwY2FyZSUyMHRvb2xzJTIwZ2FyZGVuaW5nJTIwaW5kb29yfGVufDF8fHx8MTc5NDA3MTQ2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "organic-aroid-mix",
    name: "Aerated Organic Aroid Blend Substrate (5L)",
    category: "Substrates",
    price: 18.0,
    description:
      "Coarse Mediterranean pine bark, hort-grade perlite, pumice, and coco husks. Formulated specifically for Monstera, Philodendron, and Anthurium.",
    specification: "5 Liters resealable kraft bag, pH balanced (6.0 - 6.5)",
    imageUrl:
      "https://images.unsplash.com/photo-1636525653613-2a3a05c00759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3VzZXBsYW50cyUyMGluZG9vciUyMHBsYW50JTIwY2FyZSUyMG1vbnN0ZXJhfGVufDF8fHx8MTc5NDA3MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
  {
    id: "neem-foliage-mist",
    name: "Cold-Pressed Neem & Lavender Leaf Tonic (250ml)",
    category: "Foliage Care",
    price: 16.5,
    description:
      "Gentle organic leaf wash that clears household dust, improves chlorophyll light absorption, and supports natural leaf cleanliness.",
    specification: "250ml recyclable glass amber spray bottle",
    imageUrl:
      "https://images.unsplash.com/photo-1598880940371-c756e015fea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmluZyUyMGhvdXNlcGxhbnQlMjBpbmRvb3IlMjBwbGFudCUyMGNhcmUlMjBoYW5kc3xlbnwxfHx8fDE3OTQwNzE0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    inStock: true,
  },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: "comm-1",
    title: "Calathea Orbifolia curling leaves overnight — humidity vs. draft review",
    plantSpecies: "Goeppertia orbifolia",
    author: "Elena K. (Zone 7b)",
    repliesCount: 16,
    preview:
      "Noticed the outer foliage rolling inward like cigars. Moved it 2 meters away from the hallway draft and raised local humidity with a pebble tray. Sharing 48h progress photos.",
    timestamp: "2 hours ago",
  },
  {
    id: "comm-2",
    title: "Transitioning mature Monstera cuttings from water to chunky aroid mix",
    plantSpecies: "Monstera deliciosa",
    author: "Marcus V.",
    repliesCount: 29,
    preview:
      "Secondary roots reached 8cm in rainwater. Step-by-step potting blend ratio: 40% pine bark, 30% perlite, 20% coco coir, 10% worm castings.",
    timestamp: "Yesterday",
  },
  {
    id: "comm-3",
    title: "North-facing window lighting notes for Ficus lyrata winter survival",
    plantSpecies: "Ficus lyrata",
    author: "Sarah P.",
    repliesCount: 22,
    preview:
      "Winter solstice light readings dropped from 1,400 lux to 480 lux at noon. Added a 24W warm-spectrum LED pendant on an 8-hour timer. Leaf drop halted completely.",
    timestamp: "3 days ago",
  },
];
