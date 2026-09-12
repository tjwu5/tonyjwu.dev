/**
 * Personal shipping log — not recruiter copy, not a second resume.
 * Edit this file to add an entry. Keep summaries to one line and highlights
 * to 2–4 bullets: what shipped, or the trade-off.
 */

/** @typedef {"work" | "project" | "leadership" | "learning" | "decision" | "site"} LogTag */

/**
 * @typedef {object} LogEntry
 * @property {string} id
 * @property {string} date ISO date (YYYY-MM-DD)
 * @property {LogTag[]} tags
 * @property {string} summary One-line TL;DR
 * @property {string[]} highlights
 */

/** @type {LogEntry[]} */
export const entries = [
  {
    id: "2026-09-12-kill-tjwu-os",
    date: "2026-09-12",
    tags: ["site", "decision"],
    summary:
      "Kill tjwu.OS. Rebuild the site so it can be personal without being a gimmick.",
    highlights: [
      "The old site was a fake desktop: windows, background music, click-to-open apps. Fun to build. Exhausting to screen. In eight seconds a recruiter learned I could make a novelty, not who I am or what I have shipped.",
      "The rebuild is a scrolling page — name, intern ask, work, resume — light type, no chrome. Personal in the voice and the calls I am willing to put in public. Professional in what it puts first.",
      "I am keeping this log here instead of performing updates on LinkedIn. Dated notes on ships and decisions, including this one.",
    ],
  },
];

function byDateDesc(a, b) {
  if (a.date === b.date) return 0;
  return a.date < b.date ? 1 : -1;
}

/** @returns {LogEntry | undefined} */
export function latestEntry() {
  return sortedEntries()[0];
}

/** @returns {LogEntry[]} */
export function sortedEntries() {
  return [...entries].sort(byDateDesc);
}

/** @param {string} isoDate */
export function formatLogDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
