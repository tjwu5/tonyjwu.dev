/**
 * Recruiter-facing copy freeze (P0).
 * Source of truth: public/Resume_TonyWu.pdf (KPMG-targeted, 2026) plus
 * two site-only facts you supplied: Typr is the KeyboardTrainer rename,
 * and External Coordinator — SFU Esports.
 *
 * Site bullets keep the PDF facts but drop resume-speak (spearheaded,
 * comprehensive, 100% adherence, high-retention, elevate visibility).
 * Do not add metrics that are not on the PDF.
 *
 * Open items:
 * - SFU Esports is not on the PDF; bullets are factual placeholders.
 *   Send 1–2 real bullets (dates, what you actually own) before P3 ships.
 * - Plan4SFU still has no live/repo URL; it is omitted from featured work.
 * - Phone stays on the PDF only.
 */

export const profile = {
  name: "Tony Wu",
  legalName: "Tony J. Wu",
  headline:
    "Developer with a product mindset, bridging solid technical systems with user-first design. Seeking software and tech consulting internships.",
  school: "Simon Fraser University",
  degree: "BSc Computing Science",
  minor: "Business Administration",
  graduation: "Expected 2027",
  exchange: "University of Hong Kong — Computing Science exchange, Fall 2026",
  location: "Vancouver, BC",
  email: "tonyjwu05@gmail.com",
  linkedin: "https://www.linkedin.com/in/tonyjxwu/",
  github: "https://github.com/tjwu5",
  resumePath: "/Resume_TonyWu.pdf",
  resumeLabel: "Resume PDF",
};

export const nav = [
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Work", href: "#work" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "resume", label: "Resume", href: "/Resume_TonyWu.pdf", external: true },
];

export const hero = {
  kicker: "CS + Business @ SFU",
  name: profile.name,
  headline: profile.headline,
  education: [
    {
      logo: "sfu",
      knock: "white",
      school: profile.school,
      detail: `${profile.degree}, Minor in ${profile.minor} · ${profile.graduation}`,
    },
    {
      logo: "hku",
      knock: "black",
      school: "University of Hong Kong",
      detail: "Computing Science exchange · Fall 2026",
    },
  ],
  location: profile.location,
  primaryCtas: [
    { label: "Resume PDF", href: profile.resumePath, external: true },
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.linkedin, external: true },
  ],
  secondaryCtas: [{ label: "GitHub", href: profile.github, external: true }],
};

export const experience = [
  {
    id: "tsbc",
    role: "Project Consultant",
    org: "Technical Safety BC",
    context: "Strategic advisory engagement",
    dates: "May 2026 – Aug 2026",
    location: "Burnaby, BC",
    lede: "5-person consulting team on an executive-search visibility strategy, tied to provincial regulatory requirements.",
    logo: "tsbc",
    logoCrop: "left",
    bullets: [
      "Led a 5-person consulting team on an executive-search visibility strategy, tying internal discovery workflows to provincial regulatory requirements.",
      "Wrote the project charter, work breakdown structure, and delivery roadmap for a 13-week engagement, and hit the agreed milestones.",
      "Presented 3 recommendations to executive evaluators; leadership used the roadmap for rollout after the engagement.",
    ],
  },
  {
    id: "bereal",
    role: "Product Management Extern",
    org: "BeReal",
    context: "Extern engagement",
    dates: "Nov 2025 – Dec 2025",
    location: "Remote",
    lede: "User research and competitive benchmarking to prioritize 3 features with a projected 10% lift in daily active users.",
    logo: "bereal",
    bullets: [
      "Combined user research and competitive benchmarking to prioritize 3 features with a projected 10% lift in daily active users.",
      "Iterated prototypes through 5+ review cycles with senior product leads to check what was technically feasible.",
      "Closed with KPI-based recommendations so the proposed work lined up with growth targets.",
    ],
  },
];

export const leadership = [
  {
    id: "caseit",
    role: "Marketing Strategies Director",
    org: "CaseIT — International MIS Case Competition",
    dates: "Aug 2026 – Present",
    location: "Burnaby, BC",
    onResume: true,
    lede: "Marketing and outreach across 16+ university teams, sponsors, and industry partners.",
    logo: "caseit",
    bullets: [
      "Run marketing and outreach for CaseIT across 16+ university teams, sponsors, and industry partners.",
      "Own channel analytics, the content calendar, and brand positioning across student touchpoints.",
    ],
  },
  {
    id: "esports",
    role: "External Coordinator",
    org: "SFU Esports",
    dates: "Present",
    location: "Burnaby, BC",
    onResume: false,
    needsCopy: true,
    lede: "Coordinate external partnerships and outreach for SFU Esports.",
    logo: "esports",
    logoCrop: "cover",
    bullets: [
      "Coordinate external partnerships and outreach for SFU Esports.",
    ],
  },
  {
    id: "cadets",
    role: "Cadet Company Sergeant Major",
    org: "Government of Canada — Department of National Defence",
    dates: "Summers 2022 – 2024",
    location: "Comox / Vernon, BC",
    onResume: true,
    lede: "Promoted twice across 3 summer deployments to Company Sergeant Major, responsible for 100+ staff and 1,000+ cadets.",
    logo: "cadets",
    logoCrop: "cover",
    bullets: [
      "Promoted twice across 3 summer deployments to Company Sergeant Major, responsible for 100+ staff and 1,000+ cadets.",
      "Moved from classroom instruction to operations: daily stand-ups, cross-unit planning, and performance reviews to unstick logistics between groups.",
    ],
  },
];

export const featuredProjects = [
  {
    id: "typr",
    name: "Typr",
    formerName: "KeyboardTrainer",
    role: "Product Manager, Software Developer",
    org: "SFU Surge — StormForge Hackathon",
    dates: "Jan 2026 – Apr 2026",
    award: "2nd place",
    summary: "Desktop MVP that uses computer vision to coach keyboard posture in real time.",
    tags: ["Electron", "OpenCV", "MediaPipe", "PRD"],
    onResume: true,
    bullets: [
      "Set the product direction from a scan of education tools, and led a team of 4 to an MVP desktop app.",
      "Wrote PRDs and ran Agile sprints over 4 months; 8 user tests drove the UX changes.",
      "Built real-time posture detection with MediaPipe and OpenCV, trained on 50+ labeled images.",
    ],
    live: null,
    repo: "https://github.com/angelo-yap/keyboard-trainer",
    devNote: [
      "No live demo — it’s an Electron desktop MVP, so the proof is the repo.",
      "The posture model was trained on 50+ labeled images: enough to run in real time, not a production set.",
    ],
  },
];

export const additionalProjects = [
  {
    id: "findmypath",
    name: "FindMyPath",
    role: "Machine Learning Engineer, Software Developer",
    dates: "Sep 2025 – Nov 2025",
    context: "CMPT 310",
    summary: "Career-path recommender trained on 4,000+ records.",
    tags: ["Python", "pandas", "LightGBM"],
    onResume: false,
    bullets: [
      "Built a Python pipeline with pandas cleaning and features on 4,000+ records.",
      "Raised classification accuracy 15% by tuning LightGBM against KNN and decision-tree baselines.",
      "Wired the UI, preprocessing, and model so recommendations run live.",
    ],
    live: "https://findmypath.streamlit.app/",
    repo: "https://github.com/tjwu5/CMPT310-Project",
    devNote: [
      "The 15% accuracy lift is LightGBM tuned against KNN and decision-tree baselines on this 4,000+ record set.",
    ],
  },
  {
    id: "easychart",
    name: "EasyChart",
    role: "Frontend Software Developer",
    dates: "Jun 2025 – Aug 2025",
    context: "CMPT 276",
    summary: "Chart generator from uploaded datasets.",
    tags: ["React", "REST APIs", "GitHub Actions"],
    onResume: false,
    bullets: [
      "Led the React frontend and async chart rendering against the QuickChart API.",
      "Set up GitHub Actions so a 4-person team could test and deploy without a manual release step.",
      "Ran weekly sprint planning and code review so the course requirements actually shipped.",
    ],
    live: "https://easychart-omega.vercel.app/",
    repo: "https://github.com/CMPT-276-SUMMER-2025/final-project-5-lakes",
    devNote: [
      "Charts render async through the QuickChart API; GitHub Actions was how a 4-person team shipped without a manual release.",
    ],
  },
];

export const omittedFromSite = [
  "Plan4SFU (no public live/repo URL; not on the current PDF)",
  "SafeDrive AI",
  "ChaosHacks",
  "PIVOT BMT",
  "Forward Vision",
];

export const skills = {
  strategy: [
    "PRDs",
    "Work breakdown structures",
    "User stories",
    "Agile / Scrum",
    "Stakeholder alignment",
    "KPI definition",
  ],
  analytics: ["SQL", "Python", "Excel", "Market benchmarking", "Figma"],
  technical: [
    "React",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "Git",
    "PostgreSQL",
    "Electron",
  ],
};

/** One-line chip notes. Keys must match a skill label. Skills with nothing real to say stay mute. */
export const skillNotes = {
  PRDs: "Typr — wrote the PRDs and ran Agile sprints for 4 months; 8 user tests changed the UX.",
  "Work breakdown structures":
    "Technical Safety BC — wrote the charter, work breakdown structure, and delivery roadmap for a 13-week engagement.",
  "Agile / Scrum":
    "Typr — ran Agile sprints over 4 months with a team of 4.",
  "Stakeholder alignment":
    "Technical Safety BC — presented 3 recommendations to executive evaluators; leadership used the roadmap after the engagement.",
  "KPI definition":
    "BeReal — closed with KPI-based recommendations so the proposed work lined up with growth targets.",
  Python:
    "FindMyPath — a Python pipeline with pandas cleaning and features on 4,000+ records.",
  "Market benchmarking":
    "BeReal — user research and competitive benchmarking to prioritize 3 features with a projected 10% lift in daily active users.",
  React: "EasyChart — led the React frontend and async chart rendering against QuickChart.",
  "REST APIs":
    "EasyChart — charts render async through the QuickChart API.",
  Electron:
    "Typr — Electron desktop MVP; no live demo, the proof is the repo.",
};

export const contact = {
  email: profile.email,
  linkedin: profile.linkedin,
  github: profile.github,
  location: profile.location,
};

export const seo = {
  title: "Tony Wu — SFU Computing Science intern",
  description:
    "Tony Wu, Computing Science student at SFU (Business minor). Seeking internships in software, product, and tech consulting. Resume, consulting and product work, and selected projects.",
};
