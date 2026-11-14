import React from "react";
import { RouteId } from "../types";
import { Leaf, ArrowUpRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  onNavigate: (route: RouteId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: RouteId) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#14281E] text-[#FAF8F5] pt-16 pb-12 border-t border-[#1B3B2B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-[#244C38]">
          {/* Brand Info (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#244C38] text-white flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#C9D8CD]" />
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Leaf &amp; Root
              </span>
            </div>
            <p className="text-sm text-[#A8C1AE] leading-relaxed max-w-sm">
              A thoughtful plant-care platform connecting botanical knowledge, practical care
              guidance, and considerate technology for healthier indoor plants.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#758178]">
              <ShieldCheck className="w-4 h-4 text-[#628B6D]" />
              <span>Responsible botanical guidance. Zero fabricated telemetry.</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C1AE]">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[#C9D8CD]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("plant-care-ai")}
                  className="hover:text-white transition-colors text-left"
                >
                  Plant Care &amp; AI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("identify")}
                  className="hover:text-white transition-colors text-left"
                >
                  Plant Identification
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("health")}
                  className="hover:text-white transition-colors text-left"
                >
                  Health Guidance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("routines")}
                  className="hover:text-white transition-colors text-left"
                >
                  Personalized Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("sensors")}
                  className="hover:text-white transition-colors text-left"
                >
                  Optional Sensors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Learn */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C1AE]">Learn</h4>
            <ul className="space-y-2 text-sm text-[#C9D8CD]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("blogs")}
                  className="hover:text-white transition-colors text-left"
                >
                  Botanical Guides
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("blogs")}
                  className="hover:text-white transition-colors text-left"
                >
                  Substrate Aeration
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("blogs")}
                  className="hover:text-white transition-colors text-left"
                >
                  Winter Watering
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("blogs")}
                  className="hover:text-white transition-colors text-left"
                >
                  Light Level Science
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Store */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C1AE]">
              Community &amp; Store
            </h4>
            <ul className="space-y-2 text-sm text-[#C9D8CD]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("community")}
                  className="hover:text-white transition-colors text-left"
                >
                  Grower Discussions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("marketplace")}
                  className="hover:text-white transition-colors text-left"
                >
                  Care Marketplace
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("about")}
                  className="hover:text-white transition-colors text-left flex items-center gap-1"
                >
                  <span>About Our Mission</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8FA89B]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Account & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8C1AE]">
              Account &amp; Access
            </h4>
            <ul className="space-y-2 text-sm text-[#C9D8CD]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("login")}
                  className="hover:text-white transition-colors text-left"
                >
                  Member Log in
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("signup")}
                  className="hover:text-white transition-colors text-left"
                >
                  Create Free Account
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  Responsible AI Scope
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Ethics Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#758178]">
          <p className="text-center md:text-left">
            Leaf &amp; Root provides educational botanical guidance. Suggestions are informational
            and do not replace professional agricultural, botanical, medical, or veterinary
            diagnosis.
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <span>&copy; {new Date().getFullYear()} Leaf &amp; Root.</span>
            <button
              type="button"
              onClick={() => handleNav("about")}
              className="hover:text-[#C9D8CD] transition-colors"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleNav("plant-care-ai")}
              className="hover:text-[#C9D8CD] transition-colors"
            >
              Care Guidance Principles
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
