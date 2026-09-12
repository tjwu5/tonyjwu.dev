import { useState } from "react";
import { experience, leadership } from "@/content";
import tsbcLogo from "@/assets/images/TSBC.svg";
import berealLogo from "@/assets/images/BEREAL.jpg";

const logos = {
  tsbc: tsbcLogo,
  bereal: berealLogo,
};

function OrgMark({ src, crop, initials, org }) {
  return (
    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-foreground/15 bg-card">
      {src ? (
        <img
          src={src}
          alt=""
          className={
            crop === "left"
              ? "size-full object-cover object-left"
              : "max-h-7 max-w-8 object-contain"
          }
        />
      ) : (
        <span className="px-0.5 text-center font-mono text-[10px] font-medium leading-none tracking-wide os-muted">
          {initials ?? org.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function ExperienceCard({
  id,
  role,
  org,
  context,
  dates,
  location,
  lede,
  logo,
  logoCrop,
  logoInitials,
  bullets,
  open,
  onToggle,
}) {
  const bulletsId = `experience-bullets-${id}`;

  return (
    <article id={id} className="border border-border p-4">
      <div className="flex items-start gap-3">
        <OrgMark
          src={logos[logo]}
          crop={logoCrop}
          initials={logoInitials}
          org={org}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div>
              <h3 className="font-semibold">{role}</h3>
              <p className="text-sm">{org}</p>
              {context ? <p className="text-xs os-muted">{context}</p> : null}
            </div>
            <p className="text-xs os-muted sm:text-right">
              {dates}
              {location ? (
                <>
                  <br />
                  {location}
                </>
              ) : null}
            </p>
          </div>
          {lede ? <p className="mt-3 text-sm">{lede}</p> : null}
          <button
            type="button"
            className="mt-1 inline-flex min-h-11 items-center text-sm os-muted underline-offset-4 hover:underline"
            aria-expanded={open}
            aria-controls={bulletsId}
            onClick={onToggle}
          >
            Details
          </button>
          {open ? (
            <ul
              id={bulletsId}
              className="mt-2 list-disc space-y-1 pl-5 text-sm"
            >
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export const ExperienceSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="scroll-mt-24 space-y-10">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold sm:text-xl">Experience</h2>
        <div className="space-y-4">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              {...item}
              open={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-wide os-muted">
          Leadership
        </h2>
        <div className="space-y-4">
          {leadership.map((item) => (
            <ExperienceCard
              key={item.id}
              {...item}
              open={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
