import React from "react";
import { Link } from "react-router";
import { BrandLogo } from "../brand/BrandLogo";

const footerSections = [
  {
    title: "Product",
    items: [
      ["Plant identification", "/plant-care-ai/identify"],
      ["Plant health", "/plant-care-ai/health"],
      ["Personalized care", "/plant-care-ai/care"],
      ["Smart monitoring", "/plant-care-ai/monitoring"],
      ["Marketplace", "/marketplace"],
    ],
  },
  {
    title: "Learn",
    items: [
      ["About", "/about"],
      ["Botanical guides", "/blogs"],
    ],
  },
  {
    title: "Community",
    items: [["Community home", "/community"]],
  },
  {
    title: "Account",
    items: [
      ["Log in", "/login"],
      ["Sign up", "/signup"],
    ],
  },
  {
    title: "Support",
    items: [
      ["Help", "/help"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
];

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.25fr_2fr]">
        <div>
          <BrandLogo inverse={true} />
          <p className="mt-5 max-w-sm text-sm leading-7 text-forest-200">
            Leaf &amp; Root brings plant knowledge, practical care, and thoughtful technology
            together for healthier plants and more confident growers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-white">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.items.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-forest-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-200 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-forest-800">
        <div className="container-shell flex flex-col gap-4 py-8 text-xs text-forest-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Leaf &amp; Root. Responsible botanical guidance.</p>
          <p>
            Informational plant-care guidance. Not a substitute for professional agricultural or
            veterinary care.
          </p>
        </div>
      </div>
    </footer>
  );
};
