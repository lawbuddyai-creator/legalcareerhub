import { useState } from "react";
import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { TextArea, TextInput } from "../components/Input";
import { Button } from "../components/Button";
import { Callout } from "../components/Callout";
import { DISCLAIMER_SHORT } from "../lib/seo";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AppShell>
      <Meta
        title="Contact — CommonCounsel AI"
        description="Contact CommonCounsel AI. For legal advice, consult a licensed Virginia attorney."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
          Questions about the product, pricing, or responsible usage? Send a message below.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <Card className="p-6">
              {sent ? (
                <div>
                  <div className="text-sm font-semibold">Message received (demo)</div>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    This form is a front-end placeholder for GitHub Pages. Wire it to your email provider or backend later.
                  </p>
                  <div className="mt-4">
                    <Button variant="secondary" onClick={() => setSent(false)}>
                      Send another
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div>
                    <label className="text-xs text-neutral-400" htmlFor="name">Name</label>
                    <div className="mt-2">
                      <TextInput id="name" required placeholder="Your name" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400" htmlFor="email">Email</label>
                    <div className="mt-2">
                      <TextInput id="email" type="email" required placeholder="you@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-neutral-400" htmlFor="message">Message</label>
                    <div className="mt-2">
                      <TextArea id="message" required rows={6} placeholder="How can we help?" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="text-xs text-neutral-400">
                      Business email (placeholder): <span className="text-neutral-200">hello@commoncounsel.ai</span>
                    </div>
                    <Button>Send message</Button>
                  </div>
                </form>
              )}
            </Card>
          </div>

          <div className="md:col-span-5 space-y-4">
            <Callout tone="warning" title="Legal advice reminder">
              For legal advice, contact a licensed Virginia attorney. This product provides general information only.
            </Callout>

            <Card className="p-6">
              <div className="text-sm font-semibold">Disclaimer</div>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{DISCLAIMER_SHORT}</p>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
