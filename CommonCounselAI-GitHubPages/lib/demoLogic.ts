import { DISCLAIMER_SHORT, PII_WARNING } from "./seo";

export type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const highStakesTriggers = [
  "court tomorrow",
  "represent me",
  "what should i do",
  "tell me what to do",
  "tell me what to say",
  "guarantee",
  "beat the charge",
  "immigration",
  "eviction",
  "protective order",
  "domestic violence",
  "criminal",
  "deadline",
  "serve papers",
  "file this"
];

export function shouldRefuse(userText: string) {
  const t = userText.toLowerCase();
  return highStakesTriggers.some((k) => t.includes(k));
}

export function assistantResponse(userText: string) {
  const refused = shouldRefuse(userText);

  if (refused) {
    return [
      "I can’t provide instructions for what to do in court or specific legal advice. I *can* help with Virginia-focused legal information, explain terms, and help you prepare questions for a licensed Virginia attorney.",
      "",
      "**What I can do right now (informational):**",
      "- Explain the relevant legal concepts in plain English",
      "- Help you summarize what happened and identify missing facts",
      "- Draft a list of questions to ask a licensed VA attorney",
      "",
      "**If this involves urgent deadlines or safety:** please contact a licensed Virginia attorney or local legal aid as soon as possible.",
      "",
      `**Reminder:** ${DISCLAIMER_SHORT}`
    ].join("\\n");
  }

  return [
    "**Quick summary (informational):**",
    "Here’s how this topic is commonly framed under Virginia law *at a high level*. I’m not a lawyer and this isn’t legal advice.",
    "",
    "**Virginia context to consider:**",
    "- What county/city is involved (local court rules can vary)",
    "- Whether there are deadlines, notices, or required forms",
    "- What documents or communications matter most",
    "",
    "**Possible options (not directives):**",
    "- Compare common pathways people use in similar Virginia scenarios",
    "- Identify likely documents, definitions, and typical timelines",
    "- Outline risks to confirm with a licensed Virginia attorney",
    "",
    "**Clarifying questions (to tighten the analysis):**",
    "1) What kind of matter is this (lease, consumer dispute, small claims, family, etc.)?",
    "2) Are there written documents (contract, notice, emails)?",
    "3) What is your timeline—any upcoming dates?",
    "",
    `**Privacy note:** ${PII_WARNING}`,
    `**Reminder:** ${DISCLAIMER_SHORT}`
  ].join("\\n");
}

export function documentAnalyze(text: string) {
  const trimmed = text.trim();
  const short = trimmed.length < 60;

  const base = {
    summary:
      short
        ? "This text is very short. Paste more of the document for a meaningful summary."
        : "This looks like a general agreement/notice. Below is an informational, plain-English breakdown to help you understand what the document appears to say.",
    keyClauses: [
      "Parties and scope (who is agreeing and what the document covers)",
      "Payment/consideration (fees, deposits, amounts, reimbursement language)",
      "Termination/cancellation (how to end the agreement, notice requirements)",
      "Dispute resolution (venue, arbitration, attorney’s fees clauses)"
    ],
    deadlines: [
      "Look for dates like “within X days” and defined notice methods (mail/email).",
      "Confirm any required notice addresses and delivery requirements."
    ],
    redFlags: [
      "One-sided attorney’s fees clause",
      "Automatic renewal without clear cancellation terms",
      "Broad indemnity or waiver language",
      "Vague or missing deliverables/services"
    ],
    missingTerms: [
      "Clear definitions section",
      "What happens if a party breaches",
      "Data handling / privacy terms (if personal info is involved)",
      "Governing law / venue (Virginia-specific or not)"
    ],
    questions: [
      "What obligations do I have, and what happens if I miss one?",
      "Are there penalties, fees, or acceleration clauses?",
      "Does the document specify Virginia law or a different jurisdiction?",
      "What would a licensed Virginia attorney flag as unusual here?"
    ]
  };

  return base;
}
