import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { BrandLogo } from "../brand/BrandLogo";
import { Button } from "../ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Plant Care & AI", to: "/plant-care-ai" },
  { label: "Marketplace", to: "/marketplace" },
  { label: "Community", to: "/community" },
  { label: "Blogs", to: "/blogs" },
];

export const SiteHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key and click outside
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node;
      if (menuOpen && !menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-ivory">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-forest-200"
          aria-label="Leaf & Root home"
        >
          <BrandLogo />
        </Link>

        {/* Desktop Primary Nav */}
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-forest-200 ${
                  isActive
                    ? "bg-forest-100 text-forest-900 font-semibold"
                    : "text-text-primary hover:bg-forest-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 xl:flex">
          <Button to="/login" variant="ghost" size="sm">
            Log in
          </Button>
          <Button to="/signup" size="sm">
            Sign up
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-white text-forest-950 transition hover:bg-forest-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-forest-200 xl:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="border-b border-divider bg-ivory px-4 py-5 shadow-card xl:hidden animate-fadeIn"
        >
          <nav className="container-shell flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-forest-100 text-forest-900 font-semibold"
                      : "text-text-primary hover:bg-forest-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-divider pt-4">
              <Button to="/login" variant="outline">
                Log in
              </Button>
              <Button to="/signup">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
