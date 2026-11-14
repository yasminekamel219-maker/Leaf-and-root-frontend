import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className = "",
}) => {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "mx-auto max-w-3xl text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow ${inverse ? "!text-root-300" : ""}`}>{eyebrow}</p>}
      <h2
        className={`section-title mt-4 ${inverse ? "!text-white" : ""} ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`section-copy mt-5 ${inverse ? "!text-forest-200" : ""} ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
