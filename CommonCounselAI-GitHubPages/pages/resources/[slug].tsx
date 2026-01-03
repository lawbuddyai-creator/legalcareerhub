import { useRouter } from "next/router";
import Link from "next/link";
import { AppShell } from "../../components/AppShell";
import { Meta } from "../../components/Meta";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { articles } from "../../lib/articles";
import { DISCLAIMER_SHORT } from "../../lib/seo";

export default function ArticlePage() {
  const router = useRouter();
  const slug = typeof router.query.slug === "string" ? router.query.slug : "";
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <AppShell>
        <Meta title="Resource not found — CommonCounsel AI" />
        <div className="mx-auto max-w-6xl px-5 pt-14">
          <Card className="p-6">
            <div className="text-sm font-semibold">Not found</div>
            <p className="mt-2 text-sm text-neutral-300">
              That resource doesn’t exist. Return to{" "}
              <Link className="text-indigo-300 hover:text-indigo-200" href="/resources/">
                Resources
              </Link>.
            </p>
          </Card>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <Meta title={`${article.title} — CommonCounsel AI`} description={article.excerpt} />

      <div className="mx-auto max-w-3xl px-5 pt-14">
        <Link className="text-sm text-neutral-400 hover:text-neutral-200" href="/resources/">
          ← Back to Resources
        </Link>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{article.title}</h1>
        <p className="mt-3 text-neutral-300 leading-relaxed">{article.excerpt}</p>

        <div className="mt-6">
          <Callout tone="warning" title="Informational use only">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>

        <Card className="mt-6 p-6">
          <div className="text-xs text-neutral-500">Updated {article.updated} • {article.readingTime}</div>
          <div className="mt-5 space-y-6">
            {article.body.map((b, idx) => (
              <div key={idx}>
                {b.h && <h2 className="text-lg font-semibold tracking-tight">{b.h}</h2>}
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{b.p}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
