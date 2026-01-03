import { useMemo, useRef, useState } from "react";
import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Callout } from "../components/Callout";
import { TextArea } from "../components/Input";
import { DISCLAIMER_SHORT, PII_WARNING } from "../lib/seo";
import { ChatMessage, assistantResponse } from "../lib/demoLogic";

function uid() {
  return Math.random().toString(16).slice(2);
}

export default function DemoChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: "system",
      content:
        "System guardrails: This demo provides general Virginia-focused legal information. It is not a law firm, not a lawyer, and does not provide legal advice."
    },
    {
      id: uid(),
      role: "assistant",
      content:
        "Hi — I’m CommonCounsel AI (demo). Ask a Virginia-focused legal information question or paste a clause. I’ll respond with a structured explanation and questions to ask a licensed Virginia attorney."
    }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const suggested = useMemo(
    () => [
      "What does “indemnify and hold harmless” usually mean?",
      "How should I read a Virginia lease late-fee clause?",
      "Explain “venue” and “governing law” in plain English.",
      "What questions should I ask a lawyer about a demand letter?"
    ],
    []
  );

  function scrollToBottom() {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }

  function send() {
    const text = input.trim();
    if (!text || typing) return;

    setMessages((m) => [...m, { id: uid(), role: "user", content: text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const resp = assistantResponse(text);
      setMessages((m) => [...m, { id: uid(), role: "assistant", content: resp }]);
      setTyping(false);
      scrollToBottom();
    }, 650);

    scrollToBottom();
  }

  return (
    <AppShell>
      <Meta
        title="AI Chat Demo — CommonCounsel AI"
        description="A production-style chat demo with Virginia-focused informational guardrails. Not legal advice."
      />

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">AI Chat Demo</h1>
            <p className="mt-3 text-neutral-300 max-w-3xl leading-relaxed">
              This is a demo interface. Responses are informational, Virginia-focused, and may be imperfect.
              No legal advice. No representation.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/6 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-200">
            Demo mode • Placeholder backend
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <Card className="p-0 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="text-sm font-semibold">Conversation</div>
                <div className="text-xs text-neutral-400">Guardrails enabled</div>
              </div>

              <div ref={listRef} className="h-[420px] md:h-[520px] overflow-auto px-5 py-4 space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[85%] rounded-xl2 bg-indigo-400/15 ring-1 ring-indigo-200/20 px-4 py-3 text-sm leading-relaxed"
                          : m.role === "system"
                            ? "max-w-[85%] rounded-xl2 bg-white/6 ring-1 ring-white/10 px-4 py-3 text-xs text-neutral-200 leading-relaxed"
                            : "max-w-[85%] rounded-xl2 bg-white/4 ring-1 ring-white/10 px-4 py-3 text-sm leading-relaxed"
                      }
                    >
                      <pre className="whitespace-pre-wrap font-sans">{m.content}</pre>
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-xl2 bg-white/4 ring-1 ring-white/10 px-4 py-3 text-sm text-neutral-300">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-300/80 animate-pulse" />
                        Thinking…
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 px-5 py-4 space-y-3">
                <Callout tone="warning" title="Before you type">
                  {PII_WARNING}
                </Callout>

                <div className="grid gap-3">
                  <label className="text-xs text-neutral-400" htmlFor="chatInput">
                    Message (do not include sensitive personal information)
                  </label>
                  <TextArea
                    id="chatInput"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask for an explanation, definition, or a structured breakdown…"
                    rows={3}
                  />
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="text-xs text-neutral-400 max-w-xl leading-relaxed">
                      {DISCLAIMER_SHORT}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="secondary" onClick={() => setInput("")}>
                        Clear
                      </Button>
                      <Button onClick={send}>Send</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-4 space-y-4">
            <Card className="p-5">
              <div className="text-sm font-semibold">Suggested prompts</div>
              <div className="mt-3 space-y-2">
                {suggested.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setInput(s)}
                    className="w-full text-left rounded-xl bg-white/4 hover:bg-white/6 ring-1 ring-white/10 px-3 py-2 text-sm text-neutral-200 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-5">
              <div className="text-sm font-semibold">What this demo will refuse</div>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Requests for direct legal advice, court instructions, representation, or high-stakes directives
                will be redirected to licensed Virginia counsel.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
