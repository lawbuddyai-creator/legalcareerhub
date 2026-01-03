
(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Theme
  const themeKey = "cc_theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(themeKey);
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  const setTheme = (t) => {
    root.dataset.theme = t;
    localStorage.setItem(themeKey, t);
    const btn = $("#themeToggle");
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    $$(".themeLabel").forEach(el => el.textContent = t === "dark" ? "Dark" : "Light");
  };

  window.toggleTheme = () => {
    const t = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(t);
  };

  // Mobile menu
  const mobileBtn = $("#mobileMenuBtn");
  const mobileMenu = $("#mobileMenu");
  if (mobileBtn && mobileMenu){
    mobileBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // Reveal-on-scroll (lightweight)
  const els = $$(".reveal");
  if ("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.12});
    els.forEach(el => io.observe(el));
  } else {
    els.forEach(el => el.classList.add("visible"));
  }

  // Mark current nav link
  const path = location.pathname.replace(/\/+$/, "/");
  $$(".navlinks a, .mobilemenu a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http")) return;
    const resolved = new URL(href, location.origin).pathname.replace(/\/+$/, "/");
    if (resolved === path) a.setAttribute("aria-current", "page");
  });

})();
