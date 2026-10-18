import type { Job } from "@/lib/data";

export default function ExperienceArt({ art }: { art: Job["art"] }) {
  if (art === "sdet") {
    return (
      <svg viewBox="0 0 480 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="480" height="180" className="fill-surface-2" />
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={i} d={`M${i * 36 - 70} 180 L${i * 36 + 30} 0`} className="stroke-line" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(36 ${26 + i * 28})`}>
            <rect width="16" height="16" className={i === 4 ? "fill-accent" : "fill-bg stroke-line"} />
            <text x="8" y="12.5" textAnchor="middle" fontSize="11" className={i === 4 ? "fill-white" : "fill-accent"}>✓</text>
            <rect x="26" y="5" width={140 - i * 14} height="6" className="fill-line" />
          </g>
        ))}
        <text x="330" y="96" textAnchor="middle" className="fill-fg font-display" fontSize="64">756→25</text>
        <text x="330" y="126" textAnchor="middle" className="fill-accent font-mono" fontSize="12" letterSpacing="2">FEATURE FILES</text>
      </svg>
    );
  }
  const nodes = [
    [90, 60], [150, 40], [210, 70], [130, 120], [70, 130], [270, 40], [300, 110], [360, 70], [400, 130], [200, 140],
  ];
  return (
    <svg viewBox="0 0 480 180" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="480" height="180" className="fill-surface-2" />
      {nodes.map(([x, y], i) => (
        <line key={i} x1="240" y1="90" x2={x} y2={y} className="stroke-line" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <rect key={i} x={x - 9} y={y - 9} width="18" height="18" transform={`rotate(45 ${x} ${y})`} className="fill-bg stroke-muted" />
      ))}
      <rect x="222" y="72" width="36" height="36" transform="rotate(45 240 90)" className="fill-accent" />
      <text x="240" y="168" textAnchor="middle" className="fill-accent font-mono" fontSize="12" letterSpacing="2">LEAD · 10-PERSON TEAM</text>
    </svg>
  );
}
