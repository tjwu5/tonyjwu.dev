import { useEffect, useRef, useState } from "react";
import { hero, profile } from "@/content";
import sfuLogo from "@/assets/images/SFU.png";
import hkuLogo from "@/assets/images/HKU.png";

const schoolLogos = {
  sfu: sfuLogo,
  hku: hkuLogo,
};

function cropClass(crop) {
  if (crop === "hku") {
    return "size-full origin-left scale-[5] object-cover object-[12%_center]";
  }
  return "size-full object-cover object-left";
}

function SchoolMark({ src, crop, school }) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-foreground/15 bg-card">
      {src ? (
        <img src={src} alt="" className={cropClass(crop)} />
      ) : (
        <span className="font-mono text-[9px] font-medium os-muted">
          {school.slice(0, 3).toUpperCase()}
        </span>
      )}
    </div>
  );
}

const externalProps = (isExternal) =>
  isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

const ctaClass =
  "os-button inline-flex min-h-11 items-center border px-4 py-2 text-sm font-semibold";

function EmailCta({ href, email }) {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(0);

  useEffect(() => {
    return () => window.clearTimeout(copiedTimer.current);
  }, []);

  const onClick = async (event) => {
    if (!navigator.clipboard?.writeText) return;

    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 1000);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a href={href} onClick={onClick} className={ctaClass} aria-live="polite">
      {copied ? "Copied" : "Email"}
    </a>
  );
}

export const Hero = () => {
  return (
    <section className="flex flex-col gap-5">
      <p className="text-xs uppercase tracking-wide os-muted">{hero.kicker}</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {hero.name}
      </h1>
      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">
        {hero.headline}
      </p>
      <div className="flex flex-col gap-2">
        {hero.education.map((row) => (
          <div key={row.school} className="flex items-start gap-2.5">
            <SchoolMark
              src={schoolLogos[row.logo]}
              crop={row.logoCrop}
              school={row.school}
            />
            <p className="min-w-0 text-sm leading-snug">
              <span className="font-medium">{row.school}</span>
              <span className="os-muted"> — {row.detail}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm os-muted">
        {hero.location} · {hero.awards.join(" · ")}
      </p>
      <div className="flex flex-wrap gap-2">
        {hero.primaryCtas.map((cta) =>
          cta.label === "Email" ? (
            <EmailCta key={cta.label} href={cta.href} email={profile.email} />
          ) : (
            <a
              key={cta.label}
              href={cta.href}
              {...externalProps(cta.external)}
              className={ctaClass}
            >
              {cta.label}
            </a>
          ),
        )}
        {hero.secondaryCtas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            {...externalProps(cta.external)}
            className="inline-flex min-h-11 items-center px-3 py-2 text-sm os-muted underline-offset-4 hover:underline"
          >
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
};
