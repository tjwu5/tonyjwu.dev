import { useMemo, useState } from "react";
import { experience, featuredProjects, leadership } from "@/content";

const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const LABELS = {
  tsbc: "TSBC",
  bereal: "BeReal",
  caseit: "CaseIT",
  esports: "Esports",
  cadets: "Cadets",
  typr: "Typr",
};

const LANE_PX = 20;
const LANE_GAP = 2;

function endOfMonth(year, month) {
  return new Date(year, month + 1, 0);
}

function parseRange(dates, now) {
  if (dates === "Present") {
    return { start: now, end: now };
  }

  const summers = /^Summers (\d{4}) – (\d{4})$/.exec(dates);
  if (summers) {
    return {
      start: new Date(Number(summers[1]), 5, 1),
      end: endOfMonth(Number(summers[2]), 7),
    };
  }

  const toPresent = /^([A-Za-z]{3}) (\d{4}) – Present$/.exec(dates);
  if (toPresent && toPresent[1] in MONTHS) {
    return {
      start: new Date(Number(toPresent[2]), MONTHS[toPresent[1]], 1),
      end: now,
    };
  }

  const range = /^([A-Za-z]{3}) (\d{4}) – ([A-Za-z]{3}) (\d{4})$/.exec(dates);
  if (range && range[1] in MONTHS && range[3] in MONTHS) {
    return {
      start: new Date(Number(range[2]), MONTHS[range[1]], 1),
      end: endOfMonth(Number(range[4]), MONTHS[range[3]]),
    };
  }

  return null;
}

function packLanes(items) {
  const laneEnds = [];

  return [...items]
    .sort((a, b) => a.start - b.start || a.end - b.end)
    .map((item) => {
      let lane = laneEnds.findIndex((end) => end < item.start);
      if (lane === -1) {
        lane = laneEnds.length;
        laneEnds.push(item.end);
      } else {
        laneEnds[lane] = item.end;
      }
      return { ...item, lane };
    });
}

function buildEntries(now) {
  const rows = [
    ...experience.map((item) => ({
      id: item.id,
      label: LABELS[item.id] ?? item.org,
      lede: item.lede,
      dates: item.dates,
    })),
    ...leadership.map((item) => ({
      id: item.id,
      label: LABELS[item.id] ?? item.org,
      lede: item.lede,
      dates: item.dates,
    })),
    ...featuredProjects.map((item) => ({
      id: item.id,
      label: LABELS[item.id] ?? item.name,
      lede: item.summary,
      dates: item.dates,
    })),
  ];

  return rows.flatMap((row) => {
    const span = parseRange(row.dates, now);
    if (!span) return [];
    return [{ ...row, ...span }];
  });
}

function pct(date, axisStart, axisEnd) {
  return ((date - axisStart) / (axisEnd - axisStart)) * 100;
}

export const TimelineRail = () => {
  const [activeId, setActiveId] = useState(null);

  const { bars, years, trackHeight } = useMemo(() => {
    const now = new Date();
    const entries = buildEntries(now);
    const axisStart = new Date(
      Math.min(...entries.map((item) => item.start.getFullYear())),
      0,
      1,
    );
    const lastYear = Math.max(
      ...entries.map((item) => item.end.getFullYear()),
    );
    const axisEnd = new Date(lastYear + 1, 0, 1);
    const packed = packLanes(entries);
    const laneCount = Math.max(...packed.map((item) => item.lane), 0) + 1;
    const span = axisEnd - axisStart;

    return {
      years: Array.from(
        { length: lastYear - axisStart.getFullYear() + 1 },
        (_, i) => axisStart.getFullYear() + i,
      ).map((year) => ({
        year,
        left: pct(new Date(year, 0, 1), axisStart, axisEnd),
      })),
      trackHeight: laneCount * LANE_PX + Math.max(laneCount - 1, 0) * LANE_GAP,
      bars: packed.map((item) => {
        const left = pct(item.start, axisStart, axisEnd);
        const rawWidth = ((item.end - item.start) / span) * 100;
        return {
          ...item,
          left,
          width: Math.max(rawWidth, 1.6),
          top: item.lane * (LANE_PX + LANE_GAP),
        };
      }),
    };
  }, []);

  const active = bars.find((item) => item.id === activeId);

  return (
    <nav aria-label="Timeline of experience and work">
      <div className="relative h-4 font-mono text-[10px] os-muted">
        {years.map(({ year, left }) => (
          <span
            key={year}
            className="absolute -translate-x-1/2 first:translate-x-0"
            style={{ left: `${left}%` }}
          >
            {year}
          </span>
        ))}
      </div>
      <div
        className="relative mt-1 border-b border-border"
        style={{ height: trackHeight }}
      >
        {bars.map((item) => {
          const showLabel = item.width >= 5;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="absolute rounded-sm border border-border bg-card text-left hover:z-10 hover:border-accent hover:bg-accent/10 focus-visible:z-10"
              title={`${item.label} — ${item.lede}`}
              style={{
                left: `${item.left}%`,
                width: `${item.width}%`,
                top: item.top,
                height: LANE_PX,
              }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(item.id)}
              onBlur={() => setActiveId(null)}
            >
              <span
                className={
                  showLabel
                    ? "block truncate px-1 text-[10px] font-medium leading-5"
                    : "sr-only"
                }
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
      <p className="mt-1 min-h-4 truncate text-xs os-muted" aria-live="polite">
        {active ? `${active.label} — ${active.lede}` : "\u00a0"}
      </p>
    </nav>
  );
};
