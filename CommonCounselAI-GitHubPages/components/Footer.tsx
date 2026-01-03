import Link from "next/link";
import { DISCLAIMER_SHORT } from "../lib/seo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold">CommonCounsel AI</div>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Virginia-focused legal information and document understanding—built for clarity,
            not courtroom strategy.
          </p>
          <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
            {DISCLAIMER_SHORT}
          </p>

          <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
            <span className="text-neutral-200 font-medium">Made by:</span> Aryan Patel
            <div className="mt-1">
              Questions/concerns:{" "}
              <a className="text-indigo-300 hover:text-indigo-200" href="mailto:ary.pat.2009@gmail.com">
                ary.pat.2009@gmail.com
              </a>{" "}
              •{" "}
              <a className="text-indigo-300 hover:text-indigo-200" href="tel:+12406210845">
                +1 (240)-621-0845
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Pages</div>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li><Link className="hover:text-white" href="/product/">Product</Link></li>
            <li><Link className="hover:text-white" href="/pricing/">Pricing</Link></li>
            <li><Link className="hover:text-white" href="/resources/">Resources</Link></li>
            <li><Link className="hover:text-white" href="/about/">About</Link></li>
            <li><Link className="hover:text-white" href="/contact/">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li><Link className="hover:text-white" href="/privacy/">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" href="/terms/">Terms of Use</Link></li>
          </ul>

          <div className="mt-6 text-xs text-neutral-400 leading-relaxed">
            Built with production-grade engineering practices: performance, accessibility,
            and security-first.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-neutral-500 flex flex-col md:flex-row gap-2 md:justify-between">
          <div>© {new Date().getFullYear()} CommonCounsel AI (placeholder). All rights reserved.</div>
          <div>Not affiliated with any court or government agency.</div>
        </div>
      </div>
    </footer>
  );
}
