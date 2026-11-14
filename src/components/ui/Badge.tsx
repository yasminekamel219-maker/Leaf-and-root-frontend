import React from "react";

export type BadgeVariant = "neutral" | "success" | "warning" | "error" | "info";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-sand text-text-secondary border-border",
  success: "bg-success-soft text-success-strong border-success-border",
  warning: "bg-warning-soft text-warning-strong border-warning-border",
  error: "bg-error-soft text-error-strong border-error-border",
  info: "bg-forest-100 text-forest-800 border-forest-200",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  dot = false,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" aria-hidden={true} />}
      {children}
    </span>
  );
};
