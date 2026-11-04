"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "pink"
    | "cyan"
    | "blue"
    | "amber"
    | "dark"
    | "outline"
    | "outlinePink"
    | "outlineCyan"
    | "outlineBlue"
    | "outlineWhite"
    | "light"
    | "white"
    | "whatsapp"
    // Backward compatibility aliases:
    | "orange"
    | "outlineAqua"
    | "outlineOrange";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "sm",
  variant = "primary",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Splash Piscinas Palette:
  // Primary Pink: #e6007e (Vibrant Splash Magenta)
  // Water Wave Cyan: #06b6d4 / #07c9f3
  // iGUi Royal Blue: #0273f1 / #0055b8
  // Dark Ocean Navy: #07172c / #0a192f
  // Official WhatsApp: #16a34a / #25d366
  const variantClasses: Record<string, string> = {
    primary:
      "bg-[#e6007e] hover:bg-[#c40065] text-white shadow-sm hover:shadow-md hover:shadow-pink-500/25 transition-all border border-[#e6007e] hover:-translate-y-0.5 active:translate-y-0",
    pink:
      "bg-[#e6007e] hover:bg-[#c40065] text-white shadow-sm hover:shadow-md hover:shadow-pink-500/25 transition-all border border-[#e6007e] hover:-translate-y-0.5 active:translate-y-0",
    cyan:
      "bg-[#06b6d4] hover:bg-[#0891b2] text-white shadow-sm hover:shadow-md hover:shadow-cyan-500/25 transition-all border border-[#06b6d4] hover:-translate-y-0.5 active:translate-y-0",
    blue:
      "bg-[#0273f1] hover:bg-[#005bb5] text-white shadow-sm hover:shadow-md hover:shadow-blue-500/25 transition-all border border-[#0273f1] hover:-translate-y-0.5 active:translate-y-0",
    amber:
      "bg-[#f59e0b] hover:bg-[#d97706] text-slate-900 shadow-sm hover:shadow-md hover:shadow-amber-500/25 transition-all border border-[#f59e0b] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#07172c] hover:bg-[#0d2342] text-white shadow-sm hover:shadow transition-all border border-[#1b3a63] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16a34a] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#e6007e] hover:border-[#e6007e] hover:bg-[#fff0f6] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlinePink:
      "border border-[#e6007e] bg-transparent text-[#e6007e] hover:bg-[#e6007e] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineCyan:
      "border border-[#06b6d4] bg-transparent text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineBlue:
      "border border-[#0273f1] bg-transparent text-[#0273f1] hover:bg-[#0273f1] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineWhite:
      "border border-white/50 bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-xs shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#fbcfe8] bg-[#fdf2f8] text-[#e6007e] hover:bg-[#fce7f3] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",

    // Aliases
    orange:
      "bg-[#e6007e] hover:bg-[#c40065] text-white shadow-sm hover:shadow-md hover:shadow-pink-500/25 transition-all border border-[#e6007e] hover:-translate-y-0.5 active:translate-y-0",
    outlineAqua:
      "border border-[#06b6d4] bg-transparent text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineOrange:
      "border border-[#e6007e] bg-transparent text-[#e6007e] hover:bg-[#e6007e] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  };

  const selectedVariantClass = variantClasses[variant] || variantClasses.primary;

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6007e] select-none text-center cursor-pointer whitespace-nowrap " +
    sizeClasses +
    " " +
    selectedVariantClass +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
