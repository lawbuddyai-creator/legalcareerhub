import Link from "next/link";
import { AppShell } from "../../components/AppShell";
import { Meta } from "../../components/Meta";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { articles } from "../../lib/articles";
import { DISCLAIMER_SHORT } from "../../lib/seo";
import { Callout } from "../../components/Callout";

export default function Resources() {
  return (
    <AppShell>
      <Meta
        title="Resources — CommonCounsel AI"
        description="Virginia-focused educational resources: leases, demand letters, contract clauses, and when to hire a Virginia attorney."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Resources</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
          Educational articles for understanding legal language in a Virginia context. Informational only—no legal advice.
        </p>
        <div className="mt-6">
          <Callout tone="warning" title="Reminder">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>
      </div>

      <Section title="Articles" kicker="Learn the language">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((a) => (
            <Link key={a.slug} href={`/resources/${a.slug}/`} className="group">
              <Card className="p-5 transition hover:bg-white/6">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-semibold group-hover:text-white">{a.title}</div>
                  <div className="text-xs text-neutral-400">{a.readingTime}</div>
                </div>
                <div className="mt-2 text-sm text-neutral-300 leading-relaxed">{a.excerpt}</div>
                <div className="mt-3 text-xs text-neutral-500">Updated {a.updated}</div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
