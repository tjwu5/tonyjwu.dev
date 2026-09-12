import { useEffect, useRef, useState } from "react";
import { additionalProjects, featuredProjects } from "@/content";
import typrDemo from "@/assets/videos/typr.mp4";

const demos = {
  typr: typrDemo,
};

function LoopingDemo({ src, label }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (motion.matches) {
        video.pause();
        return;
      }
      video.play().catch(() => {});
    };

    sync();
    video.addEventListener("loadeddata", sync);
    motion.addEventListener("change", sync);
    return () => {
      video.removeEventListener("loadeddata", sync);
      motion.removeEventListener("change", sync);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="mt-4 aspect-video w-full rounded-sm border border-border object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

const outboundLink =
  "os-button inline-flex h-8 items-center rounded-sm border px-2.5 text-sm";
const disclosure =
  "inline-flex h-8 items-center text-sm os-muted underline-offset-4 hover:underline";

function OutboundLinks({ live, repo }) {
  if (!live && !repo) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {live ? (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={outboundLink}
        >
          Live
        </a>
      ) : null}
      {repo ? (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className={outboundLink}
        >
          Repo
        </a>
      ) : null}
    </div>
  );
}

function ActionRow({ live, repo, children }) {
  const hasOutbound = Boolean(live || repo);

  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
      <OutboundLinks live={live} repo={repo} />
      {hasOutbound && children ? (
        <span className="hidden h-3.5 w-px bg-border sm:block" aria-hidden="true" />
      ) : null}
      {children}
    </div>
  );
}

function DevNote({ id, lines }) {
  const [open, setOpen] = useState(false);

  if (!Array.isArray(lines) || lines.length === 0) return null;

  const noteId = `dev-note-${id}`;

  return (
    <>
      <button
        type="button"
        className={disclosure}
        aria-expanded={open}
        aria-controls={noteId}
        onClick={() => setOpen((value) => !value)}
      >
        Dev note
      </button>
      {open ? (
        <ul
          id={noteId}
          className="mt-1 w-full basis-full list-disc space-y-1 pl-5 text-sm os-muted"
        >
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
    </>
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
  demo,
  devNote,
}) {
  return (
    <article id={id} className="scroll-mt-24 border border-border p-5">
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
      {demos[demo] ? (
        <LoopingDemo src={demos[demo]} label={`${name} demo`} />
      ) : null}
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <ActionRow live={live} repo={repo}>
        <DevNote id={id} lines={devNote} />
      </ActionRow>
    </article>
  );
}

function AdditionalCard({
  id,
  name,
  role,
  dates,
  context,
  summary,
  tags,
  bullets,
  live,
  repo,
  devNote,
  open,
  onToggle,
}) {
  const [noteOpen, setNoteOpen] = useState(false);
  const bulletsId = `project-bullets-${id}`;
  const noteId = `dev-note-${id}`;
  const hasNote = Array.isArray(devNote) && devNote.length > 0;

  return (
    <article id={id} className="scroll-mt-24 border-l border-border py-1 pl-4">
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
      <ActionRow live={live} repo={repo}>
        <button
          type="button"
          className={disclosure}
          aria-expanded={open}
          aria-controls={bulletsId}
          onClick={onToggle}
        >
          Details
        </button>
        {hasNote ? (
          <button
            type="button"
            className={disclosure}
            aria-expanded={noteOpen}
            aria-controls={noteId}
            onClick={() => setNoteOpen((value) => !value)}
          >
            Dev note
          </button>
        ) : null}
        {open ? (
          <ul
            id={bulletsId}
            className="mt-1 w-full basis-full list-disc space-y-1 pl-5 text-sm os-muted"
          >
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
        {noteOpen ? (
          <ul
            id={noteId}
            className="mt-1 w-full basis-full list-disc space-y-1 pl-5 text-sm os-muted"
          >
            {devNote.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : null}
      </ActionRow>
    </article>
  );
}

export const ProjectsSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
            <AdditionalCard
              key={project.id}
              {...project}
              open={openId === project.id}
              onToggle={() => toggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
