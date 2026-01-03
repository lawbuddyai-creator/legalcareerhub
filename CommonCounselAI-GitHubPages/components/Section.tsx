import { ReactNode } from "react";

export function Section(props: { children: ReactNode; title?: string; kicker?: string }) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto w-full max-w-6xl px-5">
        {(props.kicker || props.title) && (
          <div className="mb-6">
            {props.kicker && (
              <div className="text-xs font-semibold tracking-wide text-indigo-300/90 uppercase">
                {props.kicker}
              </div>
            )}
            {props.title && (
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                {props.title}
              </h2>
            )}
          </div>
        )}
        {props.children}
      </div>
    </section>
  );
}
