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
    id: "2026-09-14-hamster-reacts",
    date: "2026-09-14",
    tags: ["learning", "project"],
    summary:
      "hamster reacts",
    highlights: [
      "so i saw a post on instagram from gazisj a few days ago about implementing meme reactions for zoom meetings and i thought: 'i gotta remake that'. so that's exactly what i did, but i added my own spin to it. instead of memes, i uploaded a bunch of a viral hamster pics. i tried it on my friend yesterday through facetime and it worked pretty okay! lots of false detections though, but at least it was detecting something. ok that's it bye.",
    ],
  }
  
  {
    id: "2026-09-12-kill-tjwu-os",
    date: "2026-09-12",
    tags: ["site", "decision"],
    summary:
      "hello, world?",
    highlights: [
      "first blog post, kinda nervous! so the old website was too gimmicky. i tried to make it look like something maybe tony stark built, but it was too much. end of that, it was nice while it lasted. the new version is (hopefully) a lot better. i made sure it's still personal in the voice and the calls i am willing to put in public. professional in what it puts first. there's a lot of updates i want to make, so look out for more version updates. i'm keeping this log here instead of updates on linkedin. at times can be way too intimidating. i'm also gonna keep notes on ships and decisions, including this one. okay that's it bye.",
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
