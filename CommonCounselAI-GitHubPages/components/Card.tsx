import { ReactNode } from "react";
import { cx } from "../lib/utils";

export function Card(props: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        "rounded-xl2 bg-white/4 ring-1 ring-white/10 shadow-hairline backdrop-blur",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
