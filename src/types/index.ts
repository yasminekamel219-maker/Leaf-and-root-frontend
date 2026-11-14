export type RouteId =
  | "home"
  | "about"
  | "plant-care-ai"
  | "marketplace"
  | "community"
  | "blogs"
  | "login"
  | "signup"
  | "identify"
  | "health"
  | "routines"
  | "sensors";

export interface PlantSpecimen {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  location: string;
  lightNeeds: string;
  waterCadence: string;
  humidityRange: string;
  soilPreference: string;
  toxicity: string;
  status: string;
  nextAction: string;
  nextDueDays: number;
  imageUrl: string;
  completedToday?: boolean;
}

export interface DiagnosticSymptom {
  id: string;
  title: string;
  category: string;
  visualIndicator: string;
  potentialCauses: string[];
  practicalChecks: string[];
  recommendedAction: string;
  disclaimer: string;
}

export interface BotanicalGuide {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  authorRole: string;
  imageUrl: string;
}

export interface MarketplaceProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specification: string;
  imageUrl: string;
  inStock: boolean;
}

export interface CommunityPost {
  id: string;
  title: string;
  plantSpecies: string;
  author: string;
  repliesCount: number;
  preview: string;
  timestamp: string;
}
