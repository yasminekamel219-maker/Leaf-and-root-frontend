import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import { botanicalGuides } from "../components/home/HomepageSections";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const BlogsPage: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Seasonal care", "Light", "Soil science"];

  const filteredGuides =
    filter === "All" ? botanicalGuides : botanicalGuides.filter((g) => g.category === filter);

  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Botanical guides"
          title="Useful plant knowledge, thoughtfully explained."
          description="Evidence-based care guides on seasonal watering adjustments, indoor light exposure, and root aeration science."
        />

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                filter === cat
                  ? "bg-forest-950 text-white"
                  : "bg-sand text-forest-900 hover:bg-forest-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {filteredGuides.map((guide) => (
            <article
              key={guide.slug}
              className="surface-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <img
                  src={guide.image.src}
                  alt={guide.image.alt}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="info">{guide.category}</Badge>
                    <span className="text-text-subtle flex items-center gap-1">
                      <Clock className="size-3.5" /> 6 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-forest-950 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-7">{guide.description}</p>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-divider flex items-center justify-between text-xs">
                <span className="text-text-subtle font-medium">Horticultural Guide</span>
                <span className="font-semibold text-forest-700 hover:text-forest-950 flex items-center gap-1">
                  Read article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};
