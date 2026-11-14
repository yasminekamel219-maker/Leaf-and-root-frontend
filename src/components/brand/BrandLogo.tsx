import React from "react";

interface BrandLogoProps {
  variant?: "wordmark" | "mark" | "lockup";
  inverse?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "wordmark",
  inverse = false,
  className = "",
}) => {
  if (variant === "mark") {
    return (
      <img
        src="/assets/leaf-root-mark.png"
        onError={(e) => {
          e.currentTarget.src =
            "https://hut-thud-51852135.figma.site/assets/leaf-root-mark-COXye3Kt.png";
        }}
        alt="Leaf & Root"
        className={`h-10 w-auto object-contain ${className}`}
      />
    );
  }

  if (variant === "lockup") {
    return (
      <img
        src="/assets/leaf-root-lockup.png"
        onError={(e) => {
          e.currentTarget.src =
            "https://hut-thud-51852135.figma.site/assets/leaf-root-lockup-CkEf6ibr.png";
        }}
        alt="Leaf & Root — Smart Plant Care"
        className={`h-24 w-auto object-contain ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/assets/leaf-root-mark.png"
        onError={(e) => {
          e.currentTarget.src =
            "https://hut-thud-51852135.figma.site/assets/leaf-root-mark-COXye3Kt.png";
        }}
        alt=""
        className="h-10 w-8 object-contain"
      />
      <span
        className={`text-lg font-bold tracking-tight ${inverse ? "text-white" : "text-forest-950"}`}
      >
        Leaf <span className={inverse ? "text-root-400" : "text-root-700"}>&amp;</span> Root
      </span>
    </span>
  );
};
