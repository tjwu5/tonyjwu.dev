export const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-2 border-b border-border pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs os-muted">PROJECT LOG</p>
            <h2 className="text-lg font-semibold os-text sm:text-xl">Active & Recent Builds</h2>
          </div>
          <p className="text-xs os-muted">STATUS: ONLINE</p>
        </div>

        <div className="space-y-4 text-sm os-text">
          
          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">KeyboardTrainer</p>
                <p className="text-xs os-muted">SFU Surge · Jan 2026 – Present</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Electron</span>
                <span className="border border-border px-2 py-0.5">OpenCV</span>
                <span className="border border-border px-2 py-0.5">MediaPipe</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Defined product vision and roadmap for an AI-assisted keyboard training platform, coordinating a team of 4 developers to deliver core features and milestones.</li>
              <li>Built a real-time hand placement detection system using OpenCV and MediaPipe, training a computer vision model on 50+ labelled keyboard hand-placement images I personally captured and annotated.</li>
              <li>Ran regular sprint check-ins and defined development milestones to keep the team aligned and maintain delivery timelines.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://github.com/angelo-yap/keyboard-trainer" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">SafeDrive AI — Driver Safety Monitor</p>
                <p className="text-xs os-muted">Personal Project · Jan 2026</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">React</span>
                <span className="border border-border px-2 py-0.5">Vite</span>
                <span className="border border-border px-2 py-0.5">Tailwind CSS</span>
                <span className="border border-border px-2 py-0.5">Node.js</span>
                <span className="border border-border px-2 py-0.5">JavaScript (ES6+)</span>
                <span className="border border-border px-2 py-0.5">Google MediaPipe Face Mesh</span>
                <span className="border border-border px-2 py-0.5">Web APIs</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Real-time biometrics: Eye Aspect Ratio (EAR) for blink/drowsiness + yaw/pitch for distraction.</li>
              <li>Smart alert system: Tier 1 alerts (2s response window), Tier 2 “3rd strike” triggers immediate SOS mode.</li>
              <li>Persistent status UI: high-contrast orange state after repeated drowsiness events.</li>
              <li>Emergency SOS sequence: 3-second countdown that triggers a simulated emergency contact protocol if unresponsive.</li>
              <li>Runs fully in-browser with webcam permissions (Chrome/Edge recommended).</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://github.com/tjwu5/SafeDrive-AI" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">FindMyPath — Career Path Recommender</p>
                <p className="text-xs os-muted">CMPT 310 · Sep - Nov 2025</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Python</span>
                <span className="border border-border px-2 py-0.5">LightGBM</span>
                <span className="border border-border px-2 py-0.5">ML</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Built a pipeline with pandas feature engineering for 4,000+ records.</li>
              <li>Improved accuracy by 15% via LightGBM hyperparameter tuning.</li>
              <li>Integrated UI + preprocessing + model for live recommendations.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://findmypath.streamlit.app/" target="_blank" rel="noopener noreferrer">Live</a>
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://github.com/tjwu5/CMPT310-Project" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">EasyChart — Data Visualization Made Easy</p>
                <p className="text-xs os-muted">CMPT 276 · Jun - Aug 2025</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">React</span>
                <span className="border border-border px-2 py-0.5">API</span>
                <span className="border border-border px-2 py-0.5">Charts</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Built a web app for chart generation from uploaded data.</li>
              <li>Led front-end delivery and API integration.</li>
              <li>Shipped in 2 months with Agile practices.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://easychart-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://github.com/CMPT-276-SUMMER-2025/final-project-5-lakes" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">PIVOT BMT Case Competition</p>
                <p className="text-xs os-muted">SFU PIVOT · Feb 2025</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Strategy</span>
                <span className="border border-border px-2 py-0.5">Finance</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Analyzed SAP Concur case with a 4-person team.</li>
              <li>Delivered market research and reporting strategy.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://docs.google.com/presentation/d/1xi0IB7l74mVbKhg7ExgeeFitXmC6eCA6NC0dYo2P-6k/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Deck</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">Forward Vision Pitch Competition</p>
                <p className="text-xs os-muted">SFU Enactus · Feb 2025</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Pitch</span>
                <span className="border border-border px-2 py-0.5">Product</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Designed a multi-purpose app to support local dog shelters.</li>
              <li>Presented to judges in a Dragon’s Den format.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://docs.google.com/presentation/d/1b5YTGLfcDpSNuzP_qS80ERuEsxIqT7XoUfjMuaQYby0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Deck</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold">ChaosHacks Hackathon</p>
                <p className="text-xs os-muted">SFU SystemsHacks · Mar 2024</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">HTML</span>
                <span className="border border-border px-2 py-0.5">JS</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Built a music-mix web app in 12 hours.</li>
              <li>Coordinated UI and audio workflow.</li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 text-xs sm:flex-row sm:gap-3">
              <a className="os-button border px-2 py-1 text-center w-full sm:w-auto" href="https://github.com/StevenDuong04/SystemHacks-Chaos-Hacks-Steven-Tony-" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};