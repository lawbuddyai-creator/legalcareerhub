import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

const tiers = [
  {
    name: "Starter",
    price: "$12",
    note: "per month",
    features: [
      "30 document analyses / month",
      "AI chat explanations (limited)",
      "Copy/export summary (TXT)",
      "Basic guardrails"
    ],
    cta: "Start Starter",
    href: "/contact/"
  },
  {
    name: "Pro",
    price: "$29",
    note: "per month",
    features: [
      "200 document analyses / month",
      "Saved history (local device)",
      "Export: TXT + structured sections",
      "Priority guardrails + refusal flows"
    ],
    cta: "Choose Pro",
    href: "/contact/",
    highlight: true
  },
  {
    name: "Team",
    price: "$79",
    note: "per month",
    features: [
      "1,000 document analyses / month",
      "Team workspace (coming soon)",
      "Priority support (business hours)",
      "Admin usage visibility (coming soon)"
    ],
    cta: "Talk to us",
    href: "/contact/"
  }
];

export default function Pricing() {
  return (
    <AppShell>
      <Meta
        title="Pricing — CommonCounsel AI"
        description="Simple pricing tiers for Virginia-focused legal information and document understanding. Not legal advice."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
          Choose a plan for structured document understanding and Virginia-focused legal information.
          These plans do not include legal advice or representation.
        </p>

        <div className="mt-6">
          <Callout tone="warning" title="Important">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>
      </div>

      <Section title="Plans" kicker="Transparent tiers">
        <div className="grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={[
                "p-6",
                t.highlight ? "ring-2 ring-indigo-300/50 bg-indigo-400/10" : ""
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="mt-3 flex items-end gap-2">
                    <div className="text-3xl font-semibold tracking-tight">{t.price}</div>
                    <div className="text-sm text-neutral-400 mb-1">{t.note}</div>
                  </div>
                </div>
                {t.highlight && (
                  <div className="text-xs rounded-full bg-indigo-300/20 ring-1 ring-indigo-200/30 px-3 py-1">
                    Most popular
                  </div>
                )}
              </div>

              <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-indigo-300">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href={t.href} variant={t.highlight ? "primary" : "secondary"}>
                  {t.cta}
                </Button>
              </div>

              <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                No attorney-client relationship. For legal advice, consult a licensed Virginia attorney.
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
