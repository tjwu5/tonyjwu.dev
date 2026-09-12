import { formatLogDate } from "@/log";

export function LogEntry({ id, date, tags, summary, highlights }) {
  return (
    <article id={id} className="border-l border-border py-1 pl-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="font-mono text-xs os-muted">{formatLogDate(date)}</p>
          <h2 className="mt-1 text-sm font-semibold sm:text-base">{summary}</h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="os-chip border px-2 py-0.5 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
