import enactus1 from '../assets/images/enactus1.JPEG';
import enactus2 from '../assets/images/enactus2.jpeg';
import pivot1 from '../assets/images/pivot1.jpg';
import pivot2 from '../assets/images/pivot2.jpg';

export const ExperienceSection = () => {
    return <section id="experiences" className="py-20 bg-background">
        <div className="container">
            <h2 className="text-5xl font-semibold text-primary mt-10 mb-10">
                <span>
                    <span className="text-foreground">My </span>Experiences
                </span>
            </h2>              
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Case Competition */}
                <div className="p-6 bg-card rounded-lg shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-glow">PIVOT BMT Case Competition</h3>
                        <p className="text-muted-foreground">SFU PIVOT {"\u2014"} February 2025</p>
                        <p className="mt-2 text-left">• Collaborated with a team of 4 to analyze a case on SAP Concur, focusing on how to bring reporting expenses to new levels, and develop a solution.</p>
                        <p className="mt-2 text-left">• Conducted market research, financial analysis, and strategic planning regarding the company and market to address the case challenges.</p>
                        <p className="mt-2 text-left">• Presented our findings and recommendations to a panel of judges, receiving positive feedback for our innovative approach.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto mt-10">
                        <img src={pivot1} alt="Top right" className="scale-100 rounded-lg shadow-md" />
                        <img src={pivot2} alt="Bottom left" className="scale-100 rounded-lg shadow-md" />
                    </div>
                    <div className="p-2 bg-card rounded-lg shadow-md mt-4">
                        <a
                            href="https://docs.google.com/presentation/d/1xi0IB7l74mVbKhg7ExgeeFitXmC6eCA6NC0dYo2P-6k/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition"
                        >
                            See Our Work
                        </a>
                    </div>
                </div>

                {/* Enactus */}
                <div className="p-6 bg-card rounded-xl shadow-md">
                    <div>
                        <h3 className="text-xl font-semibold text-glow">Forward Vision Pitch Competition</h3>
                        <p className="text-muted-foreground">SFU Enactus {"\u2014"} February 2025</p>
                        <p className="mt-2 text-left">• Focused on one of United Nations' Sustainable Development Goal to create a solution to a local challenge that is both feasible and impactful with a teammate and mentor.</p>
                        <p className="mt-2 text-left">• Finalized a mulit-purpose application to promote and raise awareness of local dog shelters and useful tools for existing owners.</p>
                        <p className="mt-2 text-left">• Presented our pitch to a panel of judges in a Dragon's Den style event, seeking interest and investments.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto mt-10">
                        <img src={enactus1} alt="Top right" className="scale-100 rounded-lg shadow-md" />
                        <img src={enactus2} alt="Bottom left" className="scale-100 rounded-lg shadow-md" />
                    </div>
                    <div className="p-2 bg-card rounded-lg shadow-md mt-4">
                        <a
                            href="https://docs.google.com/presentation/d/1b5YTGLfcDpSNuzP_qS80ERuEsxIqT7XoUfjMuaQYby0/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition"
                        >
                            See Our Work
                        </a>
                    </div>
                </div>

                {/* Hackathon */}
                <div className="p-6 bg-card rounded-xl shadow-md">
                    <div> 
                        <h3 className="text-xl font-semibold text-glow">ChaosHacks Hackathon</h3>
                        <p className="text-muted-foreground">SFU Software Systems SystemsHacks {"\u2014"} March 2024</p>
                        <p className="mt-2 text-left">• Developed a website using HTML and JavaScript, allowing users to choose their desired music genres from a list of options to create a chaotic mix and playback a preset audio file.</p>
                        <p className="mt-2 text-left">• Utilized Adobe After Effects to combine music from different genres.</p>
                        <p className="mt-2 text-left">• Collaborated with a teammate to brainstorm, code, compile, and present the finished project within 12 hours.</p>
                    </div>
                    <div className="p-2 bg-card rounded-lg shadow-md mt-4">
                        <a
                            href="https://github.com/StevenDuong04/SystemHacks-Chaos-Hacks-Steven-Tony-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-primary/90 transition"
                        >
                            See Our Work
                        </a>
                    </div>
                </div>

                {/* To be continued */}
                <div className="p-6 bg-card rounded-xl shadow-md h-64 flex items-center justify-center text-center">
                    <div style={{ animation: "float 3s ease-in-out infinite" }}>
                        <h3 className="text-xl font-semibold text-glow">To Be Continued...</h3>
                        <p className="text-muted-foreground">Stay tuned for more experiences!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}