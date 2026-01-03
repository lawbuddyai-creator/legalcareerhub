import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function Terms() {
  return (
    <AppShell>
      <Meta
        title="Terms of Use — CommonCounsel AI"
        description="Terms of use (placeholder) emphasizing no legal advice and no attorney-client relationship."
      />

      <div className="mx-auto max-w-3xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Terms of Use</h1>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          Placeholder terms for demo deployment. Replace with your actual terms before launch.
        </p>

        <div className="mt-6">
          <Callout tone="warning" title="Core terms (summary)">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>

        <Card className="mt-6 p-6 space-y-4">
          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">No legal advice:</span> Content is general legal information and may be inaccurate or incomplete.
            You are responsible for verifying information and obtaining advice from a licensed Virginia attorney.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">No attorney-client relationship:</span> Using this site does not create an attorney-client relationship.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">High-stakes scenarios:</span> For court deadlines, safety issues, criminal matters, immigration, eviction, or domestic violence,
            consult qualified professionals promptly.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">Demo limitations:</span> Demo outputs are illustrative and should not be relied upon for decisions.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
