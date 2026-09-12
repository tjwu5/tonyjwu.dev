import { formatLogDate } from "@/log";

export function LogEntry({ id, date, tags, summary, highlights }) {
  return (
    <article
      id={id}
      className="rounded-[32px] border border-foreground/20 px-5 py-4"
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-mono text-xs os-muted">{formatLogDate(date)}</p>
        {tags.map((tag) => (
          <span key={tag} className="os-chip border px-2 py-0.5 font-mono text-xs">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mt-2 text-sm font-semibold sm:text-base">{summary}</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
