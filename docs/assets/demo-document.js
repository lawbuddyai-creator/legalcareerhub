
(() => {
  const $ = (s, r=document)=>r.querySelector(s);
  const input = $("#docInput");
  const analyzeBtn = $("#analyzeBtn");
  const out = $("#docOut");
  const dlBtn = $("#downloadBtn");

  const escapeHtml = (str) => str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function mockAnalyze(text){
    const t = text.trim();
    const lines = t.split(/\n+/).map(l=>l.trim()).filter(Boolean);
    const excerpt = lines.slice(0, 8).join(" • ");
    const hasDeadline = /(within|no later than|by\s+\w+\s+\d{1,2}|deadline|due on|must be received)/i.test(t);
    const hasFees = /(fee|penalty|late charge|interest|attorney'?s fees)/i.test(t);
    const hasAuto = /(automatic renewal|auto-renew|renew automatically)/i.test(t);
    const hasVenue = /(venue|jurisdiction|governing law|virginia)/i.test(t);

    const red = [];
    if (hasDeadline) red.push("Time-sensitive language detected — verify all dates and notice rules.");
    if (hasFees) red.push("Fees / penalties mentioned — confirm triggers, caps, and notice requirements.");
    if (hasAuto) red.push("Automatic renewal language — confirm opt‑out procedure and lead time.");
    if (!hasVenue) red.push("Governing law / venue not obvious — check for a clause that controls jurisdiction.");
    if (!red.length) red.push("No obvious red flags detected from this excerpt — still verify full document.");

    const missing = [];
    if (!/termination|end|cancel/i.test(t)) missing.push("Termination / cancellation terms");
    if (!/notice/i.test(t)) missing.push("Notice method (email/mail) and where to send");
    if (!/dispute|arbitration|court/i.test(t)) missing.push("Dispute resolution / forum clause");
    if (!/privacy|confidential/i.test(t)) missing.push("Confidentiality / privacy terms (if relevant)");

    const key = [];
    const clauseMatches = t.match(/\b(shall|must|may not|agree to|responsible for)\b[^.]{0,120}/gi);
    (clauseMatches || []).slice(0, 5).forEach(c => key.push(c.replace(/\s+/g," ").trim()));

    return {
      summary: `This appears to be a contractual excerpt. Here’s a structured, plain‑English read focused on clarity and potential risk areas (Virginia context where relevant).`,
      keyClauses: key.length ? key : ["Key obligations and permissions appear in the excerpt, but no single clause strongly dominates without more context."],
      deadlines: hasDeadline ? ["Deadlines or timing language detected. Extract exact dates and confirm the notice method required."] : ["No explicit deadline language detected in this excerpt."],
      redFlags: red,
      missing: missing.length ? missing : ["None obvious from this excerpt — confirm with the full document."],
      questions: [
        "Which clause controls governing law and venue? (Is it Virginia?)",
        "What notice method is required, and when is notice considered “received”?",
        "Are there fees/penalties, and what triggers them?",
        "What are the termination or cure options, and what timelines apply?"
      ],
      excerpt
    };
  }

  function render(report){
    out.innerHTML = `
      <div class="reportHead">
        <div class="badge dot"><span>Analysis report</span></div>
        <div class="small">Demo output • verify all details • not legal advice</div>
      </div>

      <div class="reportGrid">
        <section class="reportCard">
          <h3>Plain‑English summary</h3>
          <p>${escapeHtml(report.summary)}</p>
          <div class="small">Excerpt signals: ${escapeHtml(report.excerpt || "—")}</div>
        </section>

        <section class="reportCard">
          <h3>Key clauses (detected)</h3>
          <ul>${report.keyClauses.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </section>

        <section class="reportCard">
          <h3>Deadlines & obligations</h3>
          <ul>${report.deadlines.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </section>

        <section class="reportCard">
          <h3>Red flags</h3>
          <ul>${report.redFlags.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </section>

        <section class="reportCard">
          <h3>Missing terms to confirm</h3>
          <ul>${report.missing.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </section>

        <section class="reportCard">
          <h3>Questions for a lawyer</h3>
          <ul>${report.questions.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>
        </section>
      </div>
    `;
  }

  function download(){
    const data = out.getAttribute("data-last") || "";
    if (!data) return;
    const blob = new Blob([data], {type:"text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "commoncounsel-summary.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 800);
  }

  function analyze(){
    const t = input.value;
    if (!t.trim()){
      out.innerHTML = `<div class="callout warn"><b>Add text to analyze.</b> Paste a non-sensitive excerpt (no SSNs, account numbers, or private identifiers).</div>`;
      return;
    }
    const report = mockAnalyze(t);
    render(report);
    out.setAttribute("data-last", 
`CommonCounsel AI — Document Summary (Demo)
Not a law firm. Not legal advice. Verify with a licensed Virginia attorney.

Plain-English Summary:
${report.summary}

Key Clauses:
- ${report.keyClauses.join("\n- ")}

Deadlines & Obligations:
- ${report.deadlines.join("\n- ")}

Red Flags:
- ${report.redFlags.join("\n- ")}

Missing Terms:
- ${report.missing.join("\n- ")}

Questions for a Lawyer:
- ${report.questions.join("\n- ")}
`);
  }

  analyzeBtn.addEventListener("click", analyze);
  dlBtn.addEventListener("click", download);

  // seed
  input.value = `LEASE EXCERPT (sample)
Tenant shall pay rent on the 1st of each month. A late charge may apply after 5 days.
Landlord may terminate for nonpayment with written notice as required by Virginia law.
Automatic renewal applies unless either party provides notice at least 60 days before term end.`;
})();
