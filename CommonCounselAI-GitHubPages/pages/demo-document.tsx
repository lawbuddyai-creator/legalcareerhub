import { useMemo, useState } from "react";
import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Callout } from "../components/Callout";
import { TextArea } from "../components/Input";
import { Button } from "../components/Button";
import { DISCLAIMER_SHORT, PII_WARNING } from "../lib/seo";
import { documentAnalyze } from "../lib/demoLogic";

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function DemoDocument() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ReturnType<typeof documentAnalyze> | null>(null);
  const [busy, setBusy] = useState(false);

  const example = useMemo(
    () =>
      `Example clause (placeholder):
The tenant shall provide written notice of intent to vacate at least 30 days prior to the termination date.
Late fees may be assessed after the 5th day of the month at $50 plus $10 per day thereafter.`,
    []
  );

  function run() {
    setBusy(true);
    setResult(null);
    setTimeout(() => {
      setResult(documentAnalyze(input));
      setBusy(false);
    }, 650);
  }

  const exportText = result
    ? [
        "CommonCounsel AI — Document Summary (Demo)",
        "",
        `Disclaimer: ${DISCLAIMER_SHORT}`,
        "",
        "Plain-English Summary:",
        result.summary,
        "",
        "Key Clauses:",
        ...result.keyClauses.map((x) => `- ${x}`),
        "",
        "Deadlines & Obligations:",
        ...result.deadlines.map((x) => `- ${x}`),
        "",
        "Red Flags (informational):",
        ...result.redFlags.map((x) => `- ${x}`),
        "",
        "Missing Terms / Ambiguities:",
        ...result.missingTerms.map((x) => `- ${x}`),
        "",
        "Questions for a Licensed Virginia Attorney:",
        ...result.questions.map((x) => `- ${x}`)
      ].join("\n")
    : "";

  return (
    <AppShell>
      <Meta
        title="Document Reader Demo — CommonCounsel AI"
        description="Paste text to generate a structured, plain-English summary with risk flags and questions for a licensed Virginia attorney. Not legal advice."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Document Reader Demo</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
              Paste text to get a structured, professional-style report: summary, key clauses,
              obligations, red flags, missing terms, and questions for a licensed Virginia attorney.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/6 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-200">
            Demo mode • File upload coming soon
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <Card className="p-5">
              <div className="text-sm font-semibold">Input</div>
              <div className="mt-3">
                <Callout tone="warning" title="Privacy & safety">
                  {PII_WARNING}
                </Callout>
              </div>

              <label className="mt-4 block text-xs text-neutral-400" htmlFor="docInput">
                Document text (paste excerpts; remove identifying details)
              </label>
              <div className="mt-2">
                <TextArea
                  id="docInput"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Paste contract clauses, notices, letters, or terms…"
                  rows={10}
                />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Button variant="secondary" onClick={() => setInput(example)}>
                  Insert example
                </Button>
                <Button variant="secondary" onClick={() => setInput("")}>
                  Clear
                </Button>
                <Button onClick={run}>Analyze</Button>
              </div>

              <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                Analysis may be imperfect. Verify against the source document and consult a licensed Virginia attorney for decisions.
              </div>
            </Card>

            <Card className="p-5">
              <div className="text-sm font-semibold">File upload</div>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Coming soon: upload PDF/DOCX for extraction and analysis. This demo supports paste-only to keep deployment simple on GitHub Pages.
              </p>
            </Card>
          </div>

          <div className="md:col-span-7">
            <Card className="p-5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-sm font-semibold">Analysis Report</div>
                  <div className="mt-1 text-xs text-neutral-400">Structured output • Scannable sections</div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => result && downloadText("commoncounsel-summary-demo.txt", exportText)}
                    ariaLabel="Download summary"
                  >
                    Download summary
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <Callout title="Disclaimer" tone="warning">
                  {DISCLAIMER_SHORT}
                </Callout>
              </div>

              {busy && (
                <div className="mt-6 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-300/80 animate-pulse" />
                    Generating structured report…
                  </span>
                </div>
              )}

              {!busy && !result && (
                <div className="mt-6 text-sm text-neutral-300 leading-relaxed">
                  Paste text and click <span className="text-neutral-50 font-semibold">Analyze</span>. Output will appear here.
                </div>
              )}

              {result && (
                <div className="mt-6 space-y-5">
                  {[
                    ["Plain-English Summary", result.summary],
                    ["Key Clauses", result.keyClauses.map((x) => `• ${x}`).join("\n")],
                    ["Deadlines & Obligations", result.deadlines.map((x) => `• ${x}`).join("\n")],
                    ["Red Flags (informational)", result.redFlags.map((x) => `• ${x}`).join("\n")],
                    ["Missing Terms / Ambiguities", result.missingTerms.map((x) => `• ${x}`).join("\n")],
                    ["Questions for a Lawyer", result.questions.map((x) => `• ${x}`).join("\n")]
                  ].map(([title, content]) => (
                    <div key={title}>
                      <div className="text-sm font-semibold">{title}</div>
                      <pre className="mt-2 whitespace-pre-wrap rounded-xl bg-black/30 ring-1 ring-white/10 px-4 py-3 text-sm text-neutral-200 leading-relaxed font-sans">
                        {content}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
