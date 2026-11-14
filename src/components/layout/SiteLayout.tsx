import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { SiteHeader } from "../navigation/SiteHeader";
import { SiteFooter } from "../navigation/SiteFooter";

export const SiteLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-text-primary">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
};
