import { skills } from "@/content";

const groups = [
  { id: "strategy", label: "Strategy", items: skills.strategy },
  { id: "analytics", label: "Analytics", items: skills.analytics },
  { id: "technical", label: "Technical", items: skills.technical },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold sm:text-xl">Skills</h2>
      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.id}>
            <p className="text-sm font-semibold tracking-wide os-muted">{group.label}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="border border-border px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
