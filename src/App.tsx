import React from "react";
import { HashRouter, Routes, Route } from "react-router";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PlantCareAiPage } from "./pages/PlantCareAiPage";
import { MarketplacePage } from "./pages/MarketplacePage";
import { CommunityPage } from "./pages/CommunityPage";
import { BlogsPage } from "./pages/BlogsPage";
import { LoginPage, SignupPage } from "./pages/AuthPages";
import { IdentifySubpage, HealthSubpage, CareSubpage, MonitoringSubpage } from "./pages/ToolPages";
import { LegalPage } from "./pages/LegalPages";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="plant-care-ai" element={<PlantCareAiPage />} />
          <Route path="plant-care-ai/identify" element={<IdentifySubpage />} />
          <Route path="plant-care-ai/health" element={<HealthSubpage />} />
          <Route path="plant-care-ai/care" element={<CareSubpage />} />
          <Route path="plant-care-ai/monitoring" element={<MonitoringSubpage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="help" element={<LegalPage kind="help" />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
