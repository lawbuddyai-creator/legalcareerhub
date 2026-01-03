import { ReactNode } from "react";
import { cx } from "../lib/utils";

export function Callout(props: {
  children: ReactNode;
  tone?: "neutral" | "warning";
  title?: string;
  className?: string;
}) {
  const tone =
    props.tone === "warning"
      ? "bg-amber-400/10 ring-1 ring-amber-200/20 text-amber-50"
      : "bg-white/4 ring-1 ring-white/10 text-neutral-50";

  return (
    <div className={cx("rounded-xl2 p-4 md:p-5", tone, props.className)}>
      {props.title && <div className="text-sm font-semibold mb-2">{props.title}</div>}
      <div className="text-sm leading-relaxed text-neutral-100">{props.children}</div>
    </div>
  );
}
