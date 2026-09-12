import { useState } from "react";
import { additionalProjects, featuredProjects } from "@/content";

function ProjectLinks({ live, repo }) {
  if (!live && !repo) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="os-button inline-flex min-h-11 items-center border px-3 py-1 text-sm"
        >
          Live
        </a>
      ) : null}
      {repo ? (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="os-button inline-flex min-h-11 items-center border px-3 py-1 text-sm"
        >
          Repo
        </a>
      ) : null}
    </div>
  );
}

function DevNote({ id, lines }) {
  const [open, setOpen] = useState(false);

  if (!Array.isArray(lines) || lines.length === 0) return null;

  const noteId = `dev-note-${id}`;

  return (
    <div className="mt-4">
      <button
        type="button"
        className="inline-flex min-h-11 items-center text-sm os-muted underline-offset-4 hover:underline"
        aria-expanded={open}
        aria-controls={noteId}
        onClick={() => setOpen((value) => !value)}
      >
        Dev note
      </button>
      {open ? (
        <ul id={noteId} className="mt-2 list-disc space-y-1 pl-5 text-sm os-muted">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function FeaturedCard({
  id,
  name,
  role,
  org,
  dates,
  award,
  summary,
  tags,
  bullets,
  live,
  repo,
  devNote,
}) {
  return (
    <article className="border border-border p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm">{role}</p>
          <p className="text-xs os-muted">
            {org}
            {award ? ` · ${award}` : ""}
            {" · "}
            {dates}
          </p>
          <p className="pt-2 text-sm">{summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="os-chip border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <DevNote id={id} lines={devNote} />
      <ProjectLinks live={live} repo={repo} />
    </article>
  );
}

function AdditionalCard({ name, role, dates, context, summary, tags, bullets, live, repo }) {
  return (
    <article className="border-l border-border py-1 pl-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-sm">{role}</p>
          <p className="text-xs os-muted">
            {context ? `${context} · ` : ""}
            {dates}
          </p>
          <p className="mt-2 text-sm">{summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="os-chip border px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm os-muted">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <ProjectLinks live={live} repo={repo} />
    </article>
  );
}

export const ProjectsSection = () => {
  return (
    <section id="work" className="scroll-mt-24 space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold sm:text-xl">Selected work</h2>
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.id} {...project} />
        ))}
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-semibold tracking-wide os-muted">Additional</h3>
        <div className="space-y-5">
          {additionalProjects.map((project) => (
            <AdditionalCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
