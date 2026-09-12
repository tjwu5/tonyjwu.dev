import { hero } from "@/content";

const externalProps = (isExternal) =>
  isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

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
      <ul className="space-y-1 text-sm os-muted">
        {hero.meta.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <p className="text-sm os-muted">{hero.awards.join(" · ")}</p>
      <div className="flex flex-wrap gap-2">
        {hero.primaryCtas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            {...externalProps(cta.external)}
            className="os-button inline-flex min-h-11 items-center border px-4 py-2 text-sm font-semibold"
          >
            {cta.label}
          </a>
        ))}
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
