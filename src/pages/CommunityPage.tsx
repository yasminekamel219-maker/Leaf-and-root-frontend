import React, { useState } from "react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MessageSquare, Users, Search, ArrowRight, Check } from "lucide-react";

export const CommunityPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [showPostModal, setShowPostModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const discussions = [
    {
      id: "1",
      title: "Winter indoor humidity drop: pebble trays vs. room humidifiers",
      plant: "Calathea Orbifolia",
      author: "Elena Rostova",
      replies: 18,
      time: "2 hours ago",
      preview:
        "Noticed leaf margins beginning to roll slightly as radiator heating kicked on. Comparing hygrometer readings before and after setting up grouped pebble trays.",
    },
    {
      id: "2",
      title: "Substrate transition: moving rooted water cuttings to chunky aroid mix",
      plant: "Monstera Deliciosa",
      author: "Marcus Vance",
      replies: 34,
      time: "Yesterday",
      preview:
        "Water roots reached 8cm. Best practice ratio for introducing coarse pine bark and pumice to avoid transplant shock and root suffocation.",
    },
    {
      id: "3",
      title: "North-facing window supplemental lighting trial over 60 days",
      plant: "Ficus Lyrata",
      author: "Sarah Jenkins",
      replies: 26,
      time: "3 days ago",
      preview:
        "Sharing light meter readings before and after installing a 24W neutral white pendant light 1 meter above the canopy.",
    },
    {
      id: "4",
      title: "Recognizing overwatering vs. underwatering when lower leaves drop",
      plant: "Golden Pothos",
      author: "David Chen",
      replies: 12,
      time: "5 days ago",
      preview:
        "A simple protocol checking soil weight and probe depth before reaching for the watering can during autumn transition.",
    },
  ];

  const filtered = discussions.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.plant.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main id="main-content" className="section-space">
      <div className="container-shell space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-divider">
          <SectionHeading
            eyebrow="Grower community"
            title="A place to share what growing teaches us."
            description="Exchange practical observations, propagation experiments, and room lighting adjustments with other indoor growers."
          />

          <div>
            <Button onClick={() => setShowPostModal(true)}>Start a discussion</Button>
          </div>
        </div>

        {/* Search Input */}
        <div className="max-w-md">
          <div className="relative">
            <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-subtle" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search discussions by plant or topic..."
              className="w-full rounded-lg border border-border bg-white pl-10 pr-4 py-2.5 text-sm text-forest-950 placeholder:text-text-faint focus:border-forest-600 focus:outline-none focus:ring-3 focus:ring-forest-100"
            />
          </div>
        </div>

        {/* Discussion Threads */}
        <div className="space-y-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="surface-card p-6 space-y-3 hover:border-forest-400 transition"
            >
              <div className="flex items-center justify-between text-xs text-text-subtle">
                <span className="font-semibold text-forest-700 bg-sand px-2.5 py-1 rounded">
                  {d.plant}
                </span>
                <span>
                  {d.time} &bull; by {d.author}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-forest-950">{d.title}</h3>
              <p className="text-sm leading-7 text-text-secondary">{d.preview}</p>
              <div className="pt-3 border-t border-divider flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-forest-800 font-medium">
                  <MessageSquare className="size-4" />
                  {d.replies} responses
                </span>
                <span className="text-forest-700 hover:underline cursor-pointer">
                  View conversation &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Post Discussion Modal */}
        {showPostModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/60 p-4">
            <div className="surface-card p-6 max-w-lg w-full space-y-4">
              <h3 className="text-lg font-semibold text-forest-950">
                Start a Community Discussion
              </h3>
              <p className="text-xs text-text-secondary">
                Ask a question or share a plant care observation with fellow growers.
              </p>
              {submitted ? (
                <div className="p-4 bg-success-soft border border-success-border rounded-lg text-center text-xs text-success-strong space-y-2">
                  <Check className="size-5 mx-auto" />
                  <p className="font-semibold">Discussion published successfully!</p>
                  <Button
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setShowPostModal(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3 text-xs"
                >
                  <div>
                    <label className="font-semibold block mb-1 text-forest-950">Topic Title</label>
                    <input
                      required
                      placeholder="e.g. Winter light notes on Monstera"
                      className="w-full p-2.5 rounded border border-border"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1 text-forest-950">
                      Plant Variety
                    </label>
                    <input
                      required
                      placeholder="e.g. Monstera Deliciosa"
                      className="w-full p-2.5 rounded border border-border"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1 text-forest-950">
                      Observation / Question
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe what you observed..."
                      className="w-full p-2.5 rounded border border-border"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPostModal(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" size="sm">
                      Publish
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
