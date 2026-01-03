import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function Home() {
  return (
    <AppShell>
      <Meta
        title="CommonCounsel AI — Virginia Legal Information + Document Understanding"
        description="Virginia-focused legal information assistant for plain-English explanations and structured document understanding. Not a law firm. Not legal advice."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/6 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-200">
              Virginia-focused • Guardrails-first • Demo experience
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Legal language, clarified—<span className="text-indigo-300">Virginia-focused</span>.
            </h1>

            <p className="mt-4 text-base md:text-lg text-neutral-300 leading-relaxed">
              CommonCounsel AI helps you understand legal terms and documents in plain English,
              generate structured summaries, and surface questions to bring to a licensed Virginia attorney.
              Built for clarity, not courtroom tactics.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button href="/demo-chat/">Try AI Chat Demo</Button>
              <Button href="/demo-document/" variant="secondary">
                Try Document Reader
              </Button>
              <Button href="/product/" variant="ghost">
                See product details
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { t: "Built with guardrails", d: "Refuses legal advice and redirects to attorneys for high-stakes matters." },
                { t: "Designed for clarity", d: "Structured summaries, definitions, and readable outputs." },
                { t: "Privacy-forward approach", d: "Prompts discourage sensitive personal info in demos." }
              ].map((x) => (
                <Card key={x.t} className="p-4">
                  <div className="text-sm font-semibold">{x.t}</div>
                  <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{x.d}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <Card className="p-5">
              <div className="text-sm font-semibold">How it works</div>
              <ol className="mt-3 space-y-3 text-sm text-neutral-300 leading-relaxed">
                <li><span className="text-neutral-50 font-medium">1)</span> Ask a question or paste a clause.</li>
                <li><span className="text-neutral-50 font-medium">2)</span> Get a plain-English explanation + Virginia framing.</li>
                <li><span className="text-neutral-50 font-medium">3)</span> Review risk flags and “questions to ask a lawyer.”</li>
              </ol>

              <div className="mt-5">
                <Callout tone="warning" title="Virginia disclaimer (prominent, professional)">
                  {DISCLAIMER_SHORT}
                </Callout>
              </div>

              <div className="mt-5 text-xs text-neutral-400 leading-relaxed">
                No attorney-client relationship. The demos are illustrative and may be inaccurate—verify with primary sources and a licensed Virginia attorney.
              </div>
            </Card>

            <div className="mt-4 grid gap-3">
              <Card className="p-4">
                <div className="text-sm font-semibold">Performance-conscious UI</div>
                <div className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Fast pages, minimal motion, accessible labels, and clean layout for excellent Lighthouse scores.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Section kicker="Trust & boundaries" title="Responsible by design">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "What it is",
              d: "A Virginia-focused legal information assistant that explains terms, summarizes documents, and helps you prepare for a conversation with counsel."
            },
            {
              t: "What it isn’t",
              d: "Not a law firm. Not a lawyer. No legal advice. No representation. No strategy for court appearances."
            },
            {
              t: "What to do next",
              d: "Use the demos to understand language faster—then consult a licensed Virginia attorney for decisions and deadlines."
            }
          ].map((x) => (
            <Card key={x.t} className="p-5">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{x.d}</div>
            </Card>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
