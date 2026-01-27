import SkillBar from "./SkillBar.jsx"

const webDevSkills = [
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TailwindCSS", level: 90 },
    { name: "HTML/CSS", level: 95 },
]

const dataAndAISkills = [
    { name: "Python", level: 90 },
    { name: "Scikit-learn", level: 80 },
    { name: "pandas", level: 85 },
    { name: "LightGBM", level: 75 },
    { name: "SQL (MySQL)", level: 80 },
]

const infrastructureSkills = [
    { name: "AWS", level: 70 },
    { name: "Docker", level: 75 },
    { name: "Git/GitHub Actions", level: 85 },
    { name: "Linux (Ubuntu)", level: 80 },
    { name: "C/C++", level: 80 },
]

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-4">
            <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                    <div>
                        <p className="text-xs os-muted">SKILL INVENTORY</p>
                        <h2 className="text-xl font-semibold os-text">Core Systems</h2>
                    </div>
                    <p className="text-xs os-muted">LAST UPDATED: 2026</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="border border-border p-4">
                        <p className="text-xs os-muted">WEB DEV</p>
                        <SkillBar skills={webDevSkills}/>
                    </div>
                    <div className="border border-border p-4">
                        <p className="text-xs os-muted">AI & DATA</p>
                        <SkillBar skills={dataAndAISkills}/>
                    </div>
                    <div className="border border-border p-4">
                        <p className="text-xs os-muted">CLOUD & TOOLS</p>
                        <SkillBar skills={infrastructureSkills}/>
                    </div>
                </div>

                <div className="border border-border p-4">
                    <p className="text-xs os-muted">DESIGN & PRODUCT</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm os-text">
                        {["Figma", "Adobe CC", "UI/UX Design", "PRD Writing", "Agile/Kanban", "User Research"].map((skill) => (
                            <span key={skill} className="border border-border px-3 py-1">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

