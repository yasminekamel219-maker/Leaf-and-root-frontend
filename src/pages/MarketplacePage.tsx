import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import { marketplaceProducts } from "../components/home/HomepageSections";
import { ShoppingBag, Check, ShieldCheck, ArrowRight } from "lucide-react";

export const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const categories = ["All", "Planters", "Soil & substrates", "Watering", "Smart care"];

  const filteredProducts =
    activeCategory === "All"
      ? marketplaceProducts
      : marketplaceProducts.filter((p) => p.category === activeCategory);

  const handleAddToCart = (slug: string) => {
    setCart((prev) => ({ ...prev, [slug]: (prev[slug] || 0) + 1 }));
    setAddedItem(slug);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-divider">
          <SectionHeading
            eyebrow="Care marketplace"
            title="Tools for potting, watering, and everyday care."
            description="A curated catalog of substrates, planters, and diagnostic instruments designed to support plant health."
          />

          <div className="surface-card p-4 flex items-center gap-3 shrink-0">
            <ShoppingBag className="size-5 text-forest-700" />
            <div className="text-xs">
              <span className="font-bold text-forest-950 block">Your Care Kit</span>
              <span className="text-text-subtle">{totalItems} items selected</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-forest-950 text-white"
                  : "bg-sand text-forest-900 hover:bg-forest-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p) => {
            const isAdded = addedItem === p.slug;
            const qty = cart[p.slug] || 0;
            return (
              <article
                key={p.slug}
                className="surface-card overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <img
                    src={p.image.src}
                    alt={p.image.alt}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold text-text-subtle uppercase tracking-wider block">
                      {p.category}
                    </span>
                    <h3 className="font-semibold text-forest-950 text-base leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{p.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-divider flex items-center justify-between">
                  <span className="font-bold text-forest-950 text-base">{p.price}</span>
                  <Button
                    variant={isAdded ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => handleAddToCart(p.slug)}
                  >
                    {isAdded ? (
                      <>
                        <Check className="size-3.5" />
                        <span>Added</span>
                      </>
                    ) : qty > 0 ? (
                      <span>In Kit ({qty})</span>
                    ) : (
                      <span>Add to Kit</span>
                    )}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};
