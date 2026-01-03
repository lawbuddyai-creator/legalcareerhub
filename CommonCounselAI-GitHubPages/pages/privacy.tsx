import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function Privacy() {
  return (
    <AppShell>
      <Meta
        title="Privacy Policy — CommonCounsel AI"
        description="Privacy policy (placeholder) for a Virginia-focused legal information product."
      />

      <div className="mx-auto max-w-3xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          This is a placeholder policy for a demo deployment on GitHub Pages. Replace with your actual policy before launch.
        </p>

        <div className="mt-6">
          <Callout tone="warning" title="Important">
            {DISCLAIMER_SHORT}
          </Callout>
        </div>

        <Card className="mt-6 p-6 space-y-4">
          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">Data you provide:</span> In this demo, inputs are processed in your browser only.
            If you later add a backend, clearly disclose what you store, for how long, and who can access it.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">Sensitive information:</span> Do not submit sensitive personal information.
            If your implementation supports it, consider client-side redaction and strong logging controls.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">Tracking:</span> Avoid invasive analytics. If you add analytics, disclose it and offer opt-out where appropriate.
          </p>

          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="font-semibold text-neutral-50">Security:</span> Use TLS, least-privilege access, and secure storage if you add accounts or history.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
