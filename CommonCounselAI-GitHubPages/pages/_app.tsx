import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function getInitialTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem("cc_theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const theme = getInitialTheme();
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    setReady(true);
  }, []);

  if (!ready) return <div className="min-h-screen bg-neutral-950" />;

  return <Component {...pageProps} />;
}
