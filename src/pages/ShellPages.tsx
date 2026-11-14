import React, { useState } from "react";
import { RouteId, PlantSpecimen } from "../types";
import {
  MARKETPLACE_ITEMS,
  BOTANICAL_GUIDES,
  COMMUNITY_POSTS,
  SAMPLE_PLANTS,
  SAMPLE_DIAGNOSTIC_SYMPTOMS,
} from "../data/siteData";
import {
  ArrowLeft,
  ShoppingBag,
  Check,
  MessageSquare,
  BookOpen,
  Radio,
  HeartPulse,
  Calendar,
  Search,
  ShieldCheck,
  ArrowRight,
  Info,
  Clock,
} from "lucide-react";

interface ShellProps {
  onNavigate: (route: RouteId) => void;
  onOpenIdentificationModal?: () => void;
}

/* --- MARKETPLACE PAGE --- */
export const MarketplacePage: React.FC<ShellProps> = ({ onNavigate }) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [recentlyAdded, setRecentlyAdded] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setRecentlyAdded(id);
    setTimeout(() => setRecentlyAdded(null), 2000);
  };

  const totalItemsCount = Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <main className="w-full bg-[#FAF8F5] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Cart Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
          <div>
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#758178] hover:text-[#14281E] mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>
            <h1 className="text-3xl font-serif font-bold text-[#14281E]">Plant-Care Marketplace</h1>
            <p className="text-sm text-[#4B554E] mt-1">
              Thoughtfully selected substrates, moisture diagnostic probes, and precision care
              tools.
            </p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E8E2D8] flex items-center gap-3 shrink-0 shadow-subtle">
            <ShoppingBag className="w-5 h-5 text-[#244C38]" />
            <div className="text-xs">
              <span className="font-semibold text-[#14281E] block">Your Care Kit</span>
              <span className="text-[#758178]">{totalItemsCount} items selected</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETPLACE_ITEMS.map((item) => {
            const qty = cartItems[item.id] || 0;
            const isRecent = recentlyAdded === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E8E2D8] overflow-hidden shadow-card flex flex-col justify-between"
              >
                <div>
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-semibold uppercase text-[#758178] tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-base text-[#14281E] leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#4B554E] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    <span className="text-[11px] text-[#758178] block pt-1">
                      Spec: {item.specification}
                    </span>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-[#F4EFEB] flex items-center justify-between">
                  <span className="text-base font-serif font-bold text-[#14281E]">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                      isRecent
                        ? "bg-[#244C38] text-white"
                        : "bg-[#FAF8F5] text-[#1B3B2B] border border-[#E8E2D8] hover:bg-[#E4ECE6]"
                    }`}
                  >
                    {isRecent ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added!</span>
                      </>
                    ) : qty > 0 ? (
                      <span>In Kit ({qty})</span>
                    ) : (
                      <span>Add to Kit</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

/* --- COMMUNITY PAGE --- */
export const CommunityPage: React.FC<ShellProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = COMMUNITY_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.plantSpecies.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main className="w-full bg-[#FAF8F5] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-6 border-b border-[#E8E2D8] space-y-3">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#758178] hover:text-[#14281E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </button>
          <h1 className="text-3xl font-serif font-bold text-[#14281E]">Plant Care Community</h1>
          <p className="text-sm text-[#4B554E]">
            Authentic grower observations, troubleshooting notes, and room-by-room environmental
            discussions.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter discussions by plant or symptom..."
            className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]"
          />
        </div>

        {/* Discussions List */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-xl bg-white border border-[#E8E2D8] shadow-card hover:border-[#A8C1AE] transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-[#758178]">
                <span className="font-mono text-[#244C38] bg-[#E4ECE6] px-2 py-0.5 rounded">
                  {post.plantSpecies}
                </span>
                <span>
                  {post.timestamp} &bull; by {post.author}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-[#14281E]">{post.title}</h3>
              <p className="text-sm text-[#4B554E] leading-relaxed">{post.preview}</p>
              <div className="pt-2 flex items-center justify-between text-xs text-[#758178] border-t border-[#F4EFEB]">
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#244C38]" />
                  <span>{post.repliesCount} responses</span>
                </span>
                <span className="text-[#244C38] font-medium">Verified grower thread</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

/* --- BLOGS / BOTANICAL GUIDES PAGE --- */
export const BlogsPage: React.FC<ShellProps> = ({ onNavigate }) => {
  return (
    <main className="w-full bg-[#FAF8F5] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-6 border-b border-[#E8E2D8] space-y-3">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#758178] hover:text-[#14281E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Overview</span>
          </button>
          <h1 className="text-3xl font-serif font-bold text-[#14281E]">
            Botanical Guides &amp; Research
          </h1>
          <p className="text-sm text-[#4B554E]">
            Evidence-based plant care articles written by horticultural researchers and experienced
            indoor gardeners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BOTANICAL_GUIDES.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-xl border border-[#E8E2D8] overflow-hidden shadow-card flex flex-col justify-between"
            >
              <div>
                <img src={guide.imageUrl} alt={guide.title} className="w-full h-52 object-cover" />
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#758178]">
                    <span className="font-semibold uppercase text-[#244C38]">{guide.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readingTime}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#14281E] leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#4B554E] leading-relaxed">{guide.summary}</p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-[#F4EFEB] flex items-center justify-between text-xs">
                <span className="text-[#758178]">{guide.authorRole}</span>
                <span className="text-[#1B3B2B] font-semibold flex items-center gap-1">
                  Read Guide &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

/* --- LOGIN & SIGNUP PAGES --- */
export const AuthPage: React.FC<ShellProps & { mode: "login" | "signup" }> = ({
  mode,
  onNavigate,
}) => {
  const isSignup = mode === "signup";
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="w-full bg-[#FAF8F5] py-16 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-2xl border border-[#E8E2D8] shadow-card space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#244C38] uppercase tracking-wider">
            {isSignup ? "CREATE YOUR ACCOUNT" : "WELCOME BACK"}
          </span>
          <h1 className="text-2xl font-serif font-bold text-[#14281E]">
            {isSignup ? "Start your plant collection" : "Log in to Leaf & Root"}
          </h1>
          <p className="text-xs text-[#758178]">
            {isSignup
              ? "Organize profiles, schedule watering tasks, and diagnose issues."
              : "Access your saved plants and customized care calendar."}
          </p>
        </div>

        {submitted ? (
          <div className="p-4 rounded-xl bg-[#E4ECE6] text-[#1B3B2B] text-center space-y-2 text-xs">
            <Check className="w-6 h-6 mx-auto text-[#244C38]" />
            <p className="font-semibold text-sm">
              {isSignup ? "Account created successfully!" : "Signed in successfully!"}
            </p>
            <p>Redirecting to your plant collection...</p>
            <button
              type="button"
              onClick={() => onNavigate("plant-care-ai")}
              className="mt-2 px-4 py-2 bg-[#1B3B2B] text-white rounded-lg text-xs"
            >
              Go to Plant Care &amp; AI
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            {isSignup && (
              <div>
                <label className="block text-xs font-medium text-[#4B554E] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Rivera"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-[#4B554E] mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="jordan@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4B554E] mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B2B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#1B3B2B] hover:bg-[#244C38] text-white font-medium rounded-lg text-sm transition-colors shadow-subtle"
            >
              {isSignup ? "Create Free Account" : "Sign In"}
            </button>

            <div className="text-center text-xs text-[#758178] pt-2">
              {isSignup ? (
                <span>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate("login")}
                    className="text-[#1B3B2B] font-semibold underline"
                  >
                    Log in
                  </button>
                </span>
              ) : (
                <span>
                  Need an account?{" "}
                  <button
                    type="button"
                    onClick={() => onNavigate("signup")}
                    className="text-[#1B3B2B] font-semibold underline"
                  >
                    Sign up free
                  </button>
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

/* --- SUB-DESTINATION SHELLS: IDENTIFY, HEALTH, ROUTINES, SENSORS --- */
export const ToolSubpage: React.FC<
  ShellProps & { toolId: "identify" | "health" | "routines" | "sensors" }
> = ({ toolId, onNavigate, onOpenIdentificationModal }) => {
  const titles = {
    identify: "Plant Identification Studio",
    health: "Plant Health & Diagnostic Triage",
    routines: "Personalized Care & Schedules Planner",
    sensors: "Optional Environmental Sensors Hub",
  };

  return (
    <main className="w-full bg-[#FAF8F5] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="pb-6 border-b border-[#E8E2D8] space-y-3">
          <button
            type="button"
            onClick={() => onNavigate("plant-care-ai")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#758178] hover:text-[#14281E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Plant Care &amp; AI</span>
          </button>
          <h1 className="text-3xl font-serif font-bold text-[#14281E]">{titles[toolId]}</h1>
          <p className="text-sm text-[#4B554E]">
            Connected module integrated within the Leaf &amp; Root platform architecture.
          </p>
        </div>

        {toolId === "identify" && (
          <div className="p-8 bg-white rounded-2xl border border-[#E8E2D8] shadow-card text-center space-y-4 max-w-xl mx-auto">
            <Search className="w-10 h-10 mx-auto text-[#244C38]" />
            <h3 className="font-serif font-bold text-xl text-[#14281E]">
              Test the Plant Identification Demo
            </h3>
            <p className="text-xs text-[#4B554E] leading-relaxed">
              Experience the 6-step botanical classification flow with specimen leaf photographs.
            </p>
            <button
              type="button"
              onClick={onOpenIdentificationModal}
              className="px-6 py-2.5 bg-[#1B3B2B] text-white rounded-lg text-xs font-semibold hover:bg-[#244C38] transition-colors"
            >
              Launch Interactive Identifier
            </button>
          </div>
        )}

        {toolId === "health" && (
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-[#F4ECE6] border border-[#D9C3B0] text-xs text-[#59351A] flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#734827] shrink-0 mt-0.5" />
              <p>
                <strong>Diagnostic Principles:</strong> Visible foliage symptoms often have multiple
                interacting environmental causes. Always inspect soil moisture and draft exposure
                before altering fertilizer or repotting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SAMPLE_DIAGNOSTIC_SYMPTOMS.map((sym) => (
                <div
                  key={sym.id}
                  className="p-6 bg-white rounded-xl border border-[#E8E2D8] shadow-card space-y-3"
                >
                  <span className="text-[10px] font-semibold uppercase text-[#758178] tracking-wider">
                    {sym.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-[#14281E]">{sym.title}</h3>
                  <p className="text-xs text-[#4B554E] leading-relaxed">{sym.visualIndicator}</p>
                  <div className="pt-2 border-t border-[#F4EFEB] space-y-1 text-xs text-[#4B554E]">
                    <span className="font-semibold block text-[#14281E]">Recommended Action:</span>
                    <p>{sym.recommendedAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {toolId === "routines" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_PLANTS.map((plant) => (
              <div
                key={plant.id}
                className="p-5 bg-white rounded-xl border border-[#E8E2D8] shadow-card space-y-3"
              >
                <img
                  src={plant.imageUrl}
                  alt={plant.commonName}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="font-serif font-bold text-base text-[#14281E]">
                  {plant.commonName}
                </h4>
                <p className="text-xs text-[#758178]">{plant.location}</p>
                <div className="text-xs text-[#4B554E] space-y-1 pt-1 border-t border-[#F4EFEB]">
                  <p>
                    <strong>Water:</strong> {plant.waterCadence}
                  </p>
                  <p>
                    <strong>Light:</strong> {plant.lightNeeds}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {toolId === "sensors" && (
          <div className="p-8 bg-white rounded-2xl border border-[#E8E2D8] shadow-card max-w-2xl mx-auto space-y-4">
            <Radio className="w-10 h-10 text-[#8A5A36]" />
            <h3 className="font-serif font-bold text-xl text-[#14281E]">
              Hardware Compatibility &amp; Setup
            </h3>
            <p className="text-xs text-[#4B554E] leading-relaxed">
              Leaf &amp; Root supports open BLE and Zigbee soil moisture and ambient light probes.
              No proprietary hardware is required. Care schedules function with complete accuracy
              using manual finger checks if you do not own sensors.
            </p>
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8] text-xs text-[#758178] space-y-1">
              <p className="font-semibold text-[#14281E]">Protocol Standard:</p>
              <p>Bluetooth Low Energy 5.0+ or Zigbee 3.0 moisture/temperature sensors.</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
