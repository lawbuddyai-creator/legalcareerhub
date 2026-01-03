import Link from "next/link";
import { AppShell } from "../components/AppShell";
import { Meta } from "../components/Meta";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export default function NotFound() {
  return (
    <AppShell>
      <Meta title="Page not found — CommonCounsel AI" />
      <div className="mx-auto max-w-6xl px-5 pt-14">
        <Card className="p-6">
          <div className="text-sm font-semibold">404 — Page not found</div>
          <p className="mt-2 text-sm text-neutral-300">
            The page you’re looking for doesn’t exist.
          </p>
          <div className="mt-4 flex gap-2">
            <Button href="/">Go home</Button>
            <Link
              className="px-4 py-2.5 text-sm rounded-xl bg-white/6 hover:bg-white/10 ring-1 ring-white/10 transition"
              href="/resources/"
            >
              Browse resources
            </Link>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
