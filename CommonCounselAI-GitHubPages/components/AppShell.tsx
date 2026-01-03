import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell(props: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
