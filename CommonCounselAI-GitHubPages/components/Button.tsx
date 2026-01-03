import { cx } from "../lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  ariaLabel
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 focus-visible:ring-offset-0 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2.5 text-sm";

  const variants =
    variant === "primary"
      ? "bg-indigo-400/90 text-neutral-950 hover:bg-indigo-300 shadow-soft ring-1 ring-white/10"
      : variant === "secondary"
        ? "bg-white/6 text-neutral-50 hover:bg-white/10 ring-1 ring-white/10"
        : "text-neutral-100 hover:bg-white/6";

  const cls = cx(base, sizes, variants);

  if (href) {
    return (
      <Link aria-label={ariaLabel} className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} onClick={onClick} className={cls} type="button">
      {children}
    </button>
  );
}
