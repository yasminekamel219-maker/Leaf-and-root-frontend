import React from "react";
import {
  HeroSection,
  HowItWorksSection,
  CoreToolsSection,
  CarePreviewSection,
  SmartMonitoringSection,
  LearnAndGrowSection,
  MarketplacePreviewSection,
} from "../components/home/HomepageSections";

export const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <HowItWorksSection />
      <CoreToolsSection />
      <CarePreviewSection />
      <SmartMonitoringSection />
      <LearnAndGrowSection />
      <MarketplacePreviewSection />
    </main>
  );
};
