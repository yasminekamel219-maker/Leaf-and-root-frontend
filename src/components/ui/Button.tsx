import React from "react";
import { Link } from "react-router";
import { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "light";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconAfter?: LucideIcon;
  fullWidth?: boolean;
  to?: string;
  href?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-forest-600 text-white border-forest-600 hover:bg-forest-700 hover:border-forest-700",
  secondary:
    "bg-forest-100 text-forest-900 border-forest-100 hover:bg-forest-200 hover:border-forest-200",
  outline: "bg-white text-forest-800 border-border hover:bg-forest-50 hover:border-forest-400",
  ghost: "bg-transparent text-forest-700 border-transparent hover:bg-forest-100",
  destructive: "bg-error text-white border-error hover:bg-error-strong hover:border-error-strong",
  light: "bg-white text-forest-900 border-white hover:bg-forest-100 hover:border-forest-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm rounded-md gap-1.5",
  md: "h-11 px-5 text-sm rounded-lg gap-2",
  lg: "h-12 px-6 text-base rounded-lg gap-2.5",
  icon: "size-11 rounded-lg justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon: Icon,
      iconAfter: IconAfter,
      fullWidth = false,
      to,
      href,
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const classes = [
      "inline-flex shrink-0 items-center justify-center border font-semibold transition duration-200 cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-forest-200",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? "w-full" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const content = (
      <>
        {Icon && <Icon className="size-4 shrink-0" strokeWidth={1.8} aria-hidden={true} />}
        {children}
        {IconAfter && (
          <IconAfter className="size-4 shrink-0" strokeWidth={1.8} aria-hidden={true} />
        )}
      </>
    );

    if (to) {
      return (
        <Link to={to} className={classes}>
          {content}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
