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
    return <section id="skills" className="py-20 bg-background">
        <div className="container">
            <h2 className="text-5xl font-bold text-center mt-10 mb-10 text-primary">
                <span className="text-foreground">My </span>Skills
            </h2>
            
            <div className="p-6 bg-card rounded-lg shadow-md">
                <h2 className="text-2xl text-glow font-semibold mb-6 text-center">
                    Technical Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Web Development */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span className="text-glow text-foreground">Web</span> Development
                        </h3>
                        <SkillBar skills={webDevSkills}/>
                    </div>

                    {/* Data Science & AI */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span className="text-glow text-foreground">AI &</span> Data Science
                        </h3>
                        <SkillBar skills={dataAndAISkills}/>
                    </div>
                    
                    {/* Tools & Infrastructure */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span className="text-glow text-foreground">Cloud &</span> Infrastructure
                        </h3>
                        <SkillBar skills={infrastructureSkills}/>
                    </div>
                </div>
            </div>
            
            {/* Design & Leadership (Replacing "Other Skills") */}
            <div className="p-6 bg-card rounded-lg shadow-md mt-5">
                <h2 className="text-2xl text-glow font-semibold mb-6 text-center">
                    Design & Product Management
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Use these as simple badges/tags instead of bars */}
                    {["Figma", "Adobe Creative Cloud", "UI/UX Design", "PRD Writing", "Agile/Kanban", "User Research"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-background border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div> 
        </div>
    </section>
}

