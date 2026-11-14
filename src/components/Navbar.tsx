import React, { useState } from "react";
import { RouteId } from "../types";
import { Leaf, Menu, X, ArrowRight, User } from "lucide-react";

interface NavbarProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: RouteId) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks: { id: RouteId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "plant-care-ai", label: "Plant Care & AI" },
    { id: "marketplace", label: "Marketplace" },
    { id: "community", label: "Community" },
    { id: "blogs", label: "Blogs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B] rounded-lg p-1"
          aria-label="Leaf and Root Homepage"
        >
          <div className="w-10 h-10 rounded-full bg-[#1B3B2B] text-white flex items-center justify-center shadow-subtle group-hover:bg-[#244C38] transition-colors">
            <Leaf className="w-5 h-5 text-[#C9D8CD]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-[#14281E] tracking-tight leading-none">
              Leaf &amp; Root
            </span>
            <span className="text-[11px] font-sans font-medium text-[#758178] tracking-widest uppercase mt-0.5">
              Botanical Care
            </span>
          </div>
        </button>

        {/* Desktop Primary Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  isActive
                    ? "text-[#14281E] font-semibold bg-[#E4ECE6]/70"
                    : "text-[#4B554E] hover:text-[#14281E] hover:bg-[#F4EFEB]/80"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#1B3B2B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Auth CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick("login")}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 ${
              currentRoute === "login"
                ? "text-[#14281E] bg-[#E4ECE6]"
                : "text-[#4B554E] hover:text-[#14281E]"
            }`}
          >
            <User className="w-4 h-4 text-[#2F6248]" />
            Log in
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("signup")}
            className="px-4 py-2 text-sm font-medium bg-[#1B3B2B] hover:bg-[#244C38] text-white rounded-lg transition-colors shadow-subtle flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B3B2B]"
          >
            <span>Sign up</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9D8CD]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4B554E] hover:text-[#14281E] hover:bg-[#E4ECE6]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#14281E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#14281E]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-card">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#E4ECE6] text-[#14281E] font-semibold"
                      : "text-[#4B554E] hover:bg-[#F4EFEB] hover:text-[#14281E]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#1B3B2B]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-[#E8E2D8] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick("login")}
              className="w-full py-2.5 text-center text-sm font-medium text-[#14281E] bg-[#F4EFEB] hover:bg-[#E4ECE6] rounded-lg transition-colors"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("signup")}
              className="w-full py-2.5 text-center text-sm font-medium text-white bg-[#1B3B2B] hover:bg-[#244C38] rounded-lg transition-colors shadow-subtle flex items-center justify-center gap-1.5"
            >
              <span>Sign up for Free</span>
              <ArrowRight className="w-4 h-4 text-[#C9D8CD]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
