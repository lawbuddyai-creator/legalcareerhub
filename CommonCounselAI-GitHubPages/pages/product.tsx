import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function Product() {
  return (
    <AppShell>
      <Meta
        title="Product — CommonCounsel AI"
        description="A Virginia-focused legal information assistant with guardrails: plain-English explanations, structured summaries, and document understanding."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Product</h1>
        <p className="mt-3 text-base text-neutral-300 max-w-3xl leading-relaxed">
          CommonCounsel AI is a responsible assistant for Virginia-focused legal information and document understanding.
          It is designed to help you read, organize, and understand—while clearly avoiding legal advice, representation, or creating an attorney-client relationship.
        </p>

        <div className="mt-6">
          <Callout tone="warning" title="Clear boundary">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>
      </div>

      <Section title="What it does" kicker="Capabilities">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Plain-English explanations (Virginia framing)",
              d: "Breaks down concepts, definitions, and typical legal document language in readable, structured steps."
            },
            {
              t: "Structured summaries",
              d: "Creates scannable outputs: key points, obligations, deadlines, and missing terms to confirm."
            },
            {
              t: "Risk flags (informational)",
              d: "Surfaces clauses that are commonly risky or one-sided so you know what to ask about."
            },
            {
              t: "Questions to ask a lawyer",
              d: "Turns confusing language into a practical list of questions to bring to a licensed Virginia attorney."
            }
          ].map((x) => (
            <Card key={x.t} className="p-5">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{x.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Who it’s for" kicker="Audience">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Individuals", d: "People trying to understand a notice, clause, or agreement before speaking to counsel." },
            { t: "Small businesses", d: "Teams that need structured summaries and consistent language understanding." },
            { t: "Professionals", d: "Anyone who needs quick explanations and cleaner questions for legal review." }
          ].map((x) => (
            <Card key={x.t} className="p-5">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{x.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="What it’s not" kicker="No ‘AI lawyer’ marketing">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Not legal advice", d: "It does not tell you what to do, what to file, or how to appear in court." },
            { t: "Not representation", d: "No attorney-client relationship. No negotiation, filing, or case handling." },
            { t: "Not a substitute for counsel", d: "High-stakes matters require a licensed Virginia attorney." },
            { t: "Not guaranteed accurate", d: "Outputs can be imperfect. Verify with primary sources and counsel." }
          ].map((x) => (
            <Card key={x.t} className="p-5">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{x.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Guardrails & safety" kicker="High-stakes scenarios">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <Card className="p-5">
              <div className="text-sm font-semibold">Automatic redirect to licensed counsel</div>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                For sensitive or high-stakes scenarios—criminal charges, immigration, eviction, domestic violence,
                and court deadlines—the assistant should recommend contacting a licensed Virginia attorney (or legal aid),
                and avoid instructing users on what to do.
              </p>
              <ul className="mt-4 text-sm text-neutral-300 space-y-2 list-disc pl-5">
                <li>Refuses “tell me what to do” requests.</li>
                <li>Provides informational context only.</li>
                <li>Outputs “questions to ask a lawyer” instead of directives.</li>
              </ul>
            </Card>
          </div>
          <div className="md:col-span-5">
            <Callout title="Professional UX disclaimers" tone="neutral">
              Disclaimers appear where decisions happen—near inputs, on demos, and in the footer—so users get clarity without fear-based messaging.
            </Callout>
            <div className="mt-4">
              <Callout title="Sensitive info warning" tone="warning">
                Do not share sensitive personal information in the demo. Keep it high-level and remove identifying details.
              </Callout>
            </div>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
