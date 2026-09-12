import { Link } from "react-router-dom";
import { formatLogDate, latestEntry } from "@/log";

export function LatestShip() {
  const entry = latestEntry();
  if (!entry) return null;

  return (
    <aside className="rounded-[32px] border border-foreground/20 px-5 py-4 transition-[border-color] duration-150 hover:border-accent/55 focus-within:border-accent/55">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
        Latest
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <p className="font-mono text-xs os-muted">{formatLogDate(entry.date)}</p>
        <span className="os-chip border px-2 py-0.5 font-mono text-xs">
          {entry.tags[0]}
        </span>
      </div>
      <p className="mt-2 text-sm">{entry.summary}</p>
      <Link
        to="/log"
        className="mt-1 inline-flex min-h-11 items-center text-sm os-muted underline-offset-4 hover:underline"
      >
        Full log
      </Link>
    </aside>
  );
}
