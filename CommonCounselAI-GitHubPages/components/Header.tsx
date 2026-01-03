import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { ToggleTheme } from "./ToggleTheme";
import { useRouter } from "next/router";
import { cx } from "../lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/product/", label: "Product" },
  { href: "/demo-chat/", label: "AI Chat Demo" },
  { href: "/demo-document/", label: "Document Reader" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 ring-1 ring-white/10">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <span className="sr-only">CommonCounsel AI</span>
          <BrandMark />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = router.asPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "px-3 py-2 text-sm rounded-xl transition",
                  active ? "bg-white/8 ring-1 ring-white/10" : "hover:bg-white/6"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ToggleTheme />
          <Link
            href="/demo-chat/"
            className="hidden md:inline-flex px-3 py-2 text-sm rounded-xl bg-indigo-400/90 text-neutral-950 hover:bg-indigo-300 transition ring-1 ring-white/10 shadow-soft"
          >
            Try demo
          </Link>
        </div>
      </div>

      <div className="lg:hidden overflow-x-auto border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-2 flex gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 px-3 py-2 text-xs rounded-xl bg-white/4 hover:bg-white/6 transition ring-1 ring-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
