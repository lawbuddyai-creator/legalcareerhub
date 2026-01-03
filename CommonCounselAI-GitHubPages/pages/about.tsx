import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function About() {
  return (
    <AppShell>
      <Meta
        title="About — CommonCounsel AI"
        description="Our mission: make legal language understandable with privacy-forward, guardrails-first AI. Virginia-focused. Not legal advice."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
          We’re building a Virginia-focused legal information assistant that helps people understand legal language,
          summarize documents, and prepare better questions for licensed counsel—without pretending to be a lawyer.
        </p>

        <div className="mt-6">
          <Callout tone="warning" title="Non-negotiable boundary">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>
      </div>

      <Section title="Mission" kicker="Why this exists">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-sm font-semibold">Make legal language understandable</div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              Legal documents often bury meaning in dense phrasing. We translate into plain English and structured sections
              so you can read faster and ask better questions.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Privacy-forward, guardrails-first</div>
            <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
              The UX discourages sensitive inputs and clearly marks demo limitations. High-stakes scenarios get redirected
              to licensed Virginia attorneys or legal aid.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Build philosophy" kicker="Craftsmanship">
        <Card className="p-6">
          <div className="text-sm font-semibold">Production-grade engineering</div>
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Built with performance, accessibility, and security-first practices—intentional UI, fast pages, clean semantics,
            and guardrails placed where users make decisions.
          </p>
        </Card>
      </Section>
    </AppShell>
  );
}
