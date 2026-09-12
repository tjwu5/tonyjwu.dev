import { Link } from "react-router-dom";
import { formatLogDate, latestEntry } from "@/log";

export function LatestShip() {
  const entry = latestEntry();
  if (!entry) return null;

  return (
    <aside className="border border-border px-4 py-3">
      <p className="text-xs uppercase tracking-wide os-muted">Latest</p>
      <p className="mt-2 font-mono text-xs os-muted">
        {formatLogDate(entry.date)} · {entry.tags[0]}
      </p>
      <p className="mt-1 text-sm">{entry.summary}</p>
      <Link
        to="/log"
        className="mt-1 inline-flex min-h-11 items-center text-sm os-muted underline-offset-4 hover:underline"
      >
        Full log
      </Link>
    </aside>
  );
}
