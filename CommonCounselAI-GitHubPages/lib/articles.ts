export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  updated: string;
  readingTime: string;
  body: Array<{ h?: string; p: string }>;
};

export const articles: Article[] = [
  {
    slug: "understanding-a-lease-in-virginia",
    title: "Understanding a Lease in Virginia (Informational Guide)",
    excerpt:
      "A practical, plain-English walkthrough of common lease sections and what to verify before signing.",
    updated: "2026-01-03",
    readingTime: "6 min",
    body: [
      { p: "This article provides general legal information for Virginia. It is not legal advice and does not create an attorney-client relationship." },
      { h: "What a lease usually contains", p: "Most residential leases include rent, term length, deposits, maintenance responsibilities, entry rules, and termination terms. Focus on what you must do (obligations) and what happens if you don’t (remedies/fees)." },
      { h: "Important sections to read twice", p: "Look closely at late fees, notice requirements, automatic renewal, utilities, repairs, and any attorney’s fees language. If something is unclear, get it clarified in writing." },
      { h: "When to consult a Virginia attorney", p: "If you face an eviction notice, court deadlines, or safety issues, consult a licensed Virginia attorney or local legal aid promptly." }
    ]
  },
  {
    slug: "what-a-demand-letter-means",
    title: "What a Demand Letter Means (and What It Usually Includes)",
    excerpt:
      "Demand letters can be legitimate—and they can also be sloppy. Learn what to look for and what to verify.",
    updated: "2026-01-03",
    readingTime: "5 min",
    body: [
      { p: "This is general information for Virginia. Not legal advice." },
      { h: "Typical parts of a demand letter", p: "A demand letter often states facts, a legal theory, a requested outcome, and a deadline. Verify the sender’s identity and supporting documents." },
      { h: "How to use a document reader safely", p: "Use a tool to extract claims, dates, and missing information—but confirm everything independently and consult a licensed Virginia attorney for strategy." }
    ]
  },
  {
    slug: "how-to-read-a-contract-clause",
    title: "How to Read a Contract Clause Like a Pro",
    excerpt:
      "A structured approach for interpreting definitions, obligations, exceptions, and hidden risk in one paragraph.",
    updated: "2026-01-03",
    readingTime: "7 min",
    body: [
      { p: "General legal information only. Not legal advice." },
      { h: "Step 1: Identify defined terms", p: "Definitions can change the meaning of ordinary words. Find where terms are defined and read those first." },
      { h: "Step 2: Translate obligations", p: "Rewrite the clause as: who must do what, by when, using what method, with what consequence if not." },
      { h: "Step 3: Find carve-outs", p: "Exceptions, limitations, and cross-references are where risk hides. Follow them even if it’s annoying." }
    ]
  },
  {
    slug: "when-to-hire-a-virginia-attorney",
    title: "When to Hire a Virginia Attorney (and Why Timing Matters)",
    excerpt:
      "High-stakes situations have deadlines and consequences. Here’s when a lawyer is the right next step.",
    updated: "2026-01-03",
    readingTime: "6 min",
    body: [
      { p: "General information only. Not legal advice." },
      { h: "High-stakes scenarios", p: "Criminal charges, immigration matters, eviction notices, domestic violence, and court deadlines typically require a licensed attorney. A tool can help you get organized—but not replace counsel." },
      { h: "What to bring to a consult", p: "Bring key documents, a timeline, and your goals. Prepare questions about risks, options, deadlines, and expected cost." }
    ]
  }
];
