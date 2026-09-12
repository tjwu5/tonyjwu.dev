import { experience } from "@/content";

function RoleCard({ role, org, context, dates, location, bullets }) {
  return (
    <article className="border border-border p-4">
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
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold sm:text-xl">Experience</h2>
      <div className="space-y-4">
        {experience.map((item) => (
          <RoleCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
