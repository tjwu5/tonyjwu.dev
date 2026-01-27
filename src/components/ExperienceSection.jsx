export const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div>
            <p className="text-xs os-muted">PROJECT LOG</p>
            <h2 className="text-xl font-semibold os-text">Active & Recent Builds</h2>
          </div>
          <p className="text-xs os-muted">STATUS: ONLINE</p>
        </div>

        <div className="space-y-4 text-sm os-text">
          <div className="border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">FindMyPath — Career Path Recommender</p>
                <p className="text-xs os-muted">CMPT 310 · Sep - Nov 2025</p>
              </div>
              <div className="flex gap-2 text-xs">
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
            <div className="mt-3 flex gap-3 text-xs">
              <a className="os-button border px-2 py-1" href="https://findmypath.streamlit.app/" target="_blank" rel="noopener noreferrer">Live</a>
              <a className="os-button border px-2 py-1" href="https://github.com/tjwu5/CMPT310-Project" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">EasyChart — Data Visualization Made Easy</p>
                <p className="text-xs os-muted">CMPT 276 · Jun - Aug 2025</p>
              </div>
              <div className="flex gap-2 text-xs">
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
            <div className="mt-3 flex gap-3 text-xs">
              <a className="os-button border px-2 py-1" href="https://easychart-omega.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>
              <a className="os-button border px-2 py-1" href="https://github.com/CMPT-276-SUMMER-2025/final-project-5-lakes" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">PIVOT BMT Case Competition</p>
                <p className="text-xs os-muted">SFU PIVOT · Feb 2025</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Strategy</span>
                <span className="border border-border px-2 py-0.5">Finance</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Analyzed SAP Concur case with a 4-person team.</li>
              <li>Delivered market research and reporting strategy.</li>
            </ul>
            <div className="mt-3 flex gap-3 text-xs">
              <a className="os-button border px-2 py-1" href="https://docs.google.com/presentation/d/1xi0IB7l74mVbKhg7ExgeeFitXmC6eCA6NC0dYo2P-6k/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Deck</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">Forward Vision Pitch Competition</p>
                <p className="text-xs os-muted">SFU Enactus · Feb 2025</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">Pitch</span>
                <span className="border border-border px-2 py-0.5">Product</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Designed a multi-purpose app to support local dog shelters.</li>
              <li>Presented to judges in a Dragon’s Den format.</li>
            </ul>
            <div className="mt-3 flex gap-3 text-xs">
              <a className="os-button border px-2 py-1" href="https://docs.google.com/presentation/d/1b5YTGLfcDpSNuzP_qS80ERuEsxIqT7XoUfjMuaQYby0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Deck</a>
            </div>
          </div>

          <div className="border border-border p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">ChaosHacks Hackathon</p>
                <p className="text-xs os-muted">SFU SystemsHacks · Mar 2024</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className="border border-border px-2 py-0.5">HTML</span>
                <span className="border border-border px-2 py-0.5">JS</span>
              </div>
            </div>
            <ul className="mt-3 space-y-1 os-muted">
              <li>Built a music-mix web app in 12 hours.</li>
              <li>Coordinated UI and audio workflow.</li>
            </ul>
            <div className="mt-3 flex gap-3 text-xs">
              <a className="os-button border px-2 py-1" href="https://github.com/StevenDuong04/SystemHacks-Chaos-Hacks-Steven-Tony-" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};