import { cx } from "../lib/utils";
import { TextareaHTMLAttributes, InputHTMLAttributes } from "react";

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cx(
        "w-full rounded-xl bg-black/30 ring-1 ring-white/10 px-3 py-3 text-sm text-neutral-50",
        "placeholder:text-neutral-400 focus:ring-2 focus:ring-indigo-400/70",
        props.className
      )}
    />
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl bg-black/30 ring-1 ring-white/10 px-3 py-2.5 text-sm text-neutral-50",
        "placeholder:text-neutral-400 focus:ring-2 focus:ring-indigo-400/70",
        props.className
      )}
    />
  );
}
