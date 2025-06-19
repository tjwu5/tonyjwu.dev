import SkillBar from "./Skillsbar"

const frontendSkills = [
    { name: "HTML", level: 60 },
    { name: "CSS", level: 60 },
    { name: "JavaScript", level: 20 },
    { name: "React.js", level: 25 },
    { name: "Tailwind", level: 25 },
]

const backendSkills = [
    { name: "Python", level: 70 },
    { name: "C/C++", level: 75 },
    { name: "Kotlin", level: 10 },
]

const operatingSystems = [
    { name: "MacOS 26 Tahoe", level: 90 },
    { name: "Windows 11", level: 75 },
    { name: "Linux Ubuntu", level: 50 },
    { name: "Git/GitHub", level: 40 },
]

const otherSkills1 = [
    { name: "UI/UX Design", level: 75 },
    { name: "Creativity", level: 90 },
    { name: "Problem Solving", level: 80 },
    { name: "Critical Thinking", level: 90 },
]


const otherSkills2 = [
    { name: "Communication", level: 90 },
    { name: "Time Management", level: 75 },
    { name: "Teamwork/Leadership", level: 85 },
    { name: "Adaptability", level: 80 },
]

export const SkillsSection = () => {
    return <section id="skills" className="py-20 bg-background">
        <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-glow text-primary">
                <span>
                    <span className="text-glow text-foreground">My </span>Skills
                </span>
            </h2>
            <div className="p-6 bg-card rounded-lg shadow-md">
                <h2 className="text-2xl text-glow font-semibold mb-6 text-center">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Frontend Skills */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span>
                                <span className="text-glow text-foreground">Frontend</span> Languages
                            </span>
                        </h3>
                        <SkillBar skills={frontendSkills}/>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span>
                                <span className="text-glow text-foreground">Backend</span> Languages
                            </span>
                        </h3>
                        <SkillBar skills={backendSkills}/>
                    </div>
                    
                    {/* Operating Systems */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            <span>
                                <span className="text-glow text-foreground">Tools/Operating </span>Systems
                            </span>
                        </h3>
                        <SkillBar skills={operatingSystems}/>
                    </div>
                </div>
            </div>
            
            <div className="p-6 bg-card rounded-lg shadow-md mt-5">
                <h2 className="text-2xl text-glow font-semibold mb-6 text-center">
                    Other Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Other Skills */}
                    <div>
                        <SkillBar skills={otherSkills1}/>
                    </div>
                    <div>
                        <SkillBar skills={otherSkills2}/>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
}