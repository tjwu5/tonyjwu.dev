import { useState } from "react";
import { skillNotes, skills } from "@/content";

const groups = [
  { id: "strategy", label: "Strategy", items: skills.strategy },
  { id: "analytics", label: "Analytics", items: skills.analytics },
  { id: "technical", label: "Technical", items: skills.technical },
];

const chipClass = "os-chip border px-3 py-1 text-sm";

function SkillChip({ skill, open, onToggle }) {
  const note = skillNotes[skill];

  if (!note) {
    return <span className={chipClass}>{skill}</span>;
  }

  const noteId = `skill-note-${skill}`;

  return (
    <button
      type="button"
      className={chipClass}
      aria-expanded={open}
      aria-controls={noteId}
      onClick={onToggle}
    >
      {skill}
    </button>
  );
}

export const SkillsSection = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggle = (skill) => {
    setOpenSkill((current) => (current === skill ? null : skill));
  };

  return (
    <section id="skills" className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold sm:text-xl">Skills</h2>
      <div className="space-y-5">
        {groups.map((group) => {
          const openNote =
            openSkill && group.items.includes(openSkill)
              ? skillNotes[openSkill]
              : null;

          return (
            <div key={group.id}>
              <p className="text-sm font-semibold tracking-wide os-muted">
                {group.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <SkillChip
                    key={skill}
                    skill={skill}
                    open={openSkill === skill}
                    onToggle={() => toggle(skill)}
                  />
                ))}
                {openNote ? (
                  <p
                    id={`skill-note-${openSkill}`}
                    className="basis-full text-sm os-muted"
                  >
                    {openNote}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
