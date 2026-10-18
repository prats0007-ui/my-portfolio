import type { Project } from "@/lib/data";

export default function ProjectArt({ slug, title = "" }: { slug: Project["slug"]; title?: string }) {
  if (slug === "email") {
    return (
      <svg viewBox="0 0 480 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="480" height="300" className="fill-surface-2" />
        <rect x="40" y="40" width="300" height="220" rx="14" className="fill-surface stroke-line" />
        <rect x="40" y="40" width="88" height="220" rx="14" className="fill-bg" />
        <rect x="56" y="64" width="56" height="8" rx="4" className="fill-accent" />
        <rect x="56" y="88" width="44" height="6" rx="3" className="fill-line" />
        <rect x="56" y="104" width="50" height="6" rx="3" className="fill-line" />
        <rect x="56" y="120" width="40" height="6" rx="3" className="fill-line" />
        <rect x="146" y="64" width="170" height="10" rx="5" className="fill-fg" opacity=".8" />
        <rect x="146" y="88" width="176" height="6" rx="3" className="fill-line" />
        <rect x="146" y="102" width="150" height="6" rx="3" className="fill-line" />
        <rect x="146" y="116" width="164" height="6" rx="3" className="fill-line" />
        <rect x="146" y="214" width="80" height="26" rx="8" className="fill-accent" />
        <g transform="translate(270 132)">
          <rect width="176" height="64" rx="14" className="fill-surface stroke-accent" strokeWidth="1.5" />
          <text x="16" y="27" className="fill-accent font-mono" fontSize="13">✨ smart-compose</text>
          <rect x="16" y="40" width="130" height="6" rx="3" className="fill-line" />
        </g>
        <g transform="translate(222 30)">
          <rect width="200" height="40" rx="12" className="fill-surface stroke-pass" strokeWidth="1.5" />
          <text x="16" y="25" className="fill-pass font-mono" fontSize="13">⌘K  search inbox…</text>
        </g>
      </svg>
    );
  }
  if (slug === "slrcnn") {
    return (
      <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="400" height="220" className="fill-surface-2" />
        <g>
          <rect x="34" y="44" width="120" height="120" rx="8" className="fill-bg stroke-line" />
          {Array.from({ length: 25 }).map((_, i) => (
            <rect key={i} x={42 + (i % 5) * 22} y={52 + Math.floor(i / 5) * 22} width="18" height="18" className="fill-line" opacity={((i * 7) % 5) / 5 + 0.2} />
          ))}
          <text x="94" y="190" textAnchor="middle" className="fill-muted font-mono" fontSize="12">low-res frame</text>
        </g>
        <path d="M170 104h48" className="stroke-accent" strokeWidth="3" strokeLinecap="round" />
        <path d="M210 96l10 8-10 8" className="stroke-accent" fill="none" strokeWidth="3" strokeLinecap="round" />
        <rect x="236" y="44" width="130" height="120" rx="8" className="fill-accent" opacity=".85" />
        <circle cx="276" cy="84" r="14" className="fill-bg" opacity=".85" />
        <path d="M246 154l30-46 26 22 22-34 32 58z" className="fill-bg" opacity=".5" />
        <text x="301" y="190" textAnchor="middle" className="fill-accent font-mono" fontSize="12">+9.3 dB PSNR</text>
      </svg>
    );
  }
  if (slug === "polyp") {
    return (
      <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <radialGradient id="tissue" cx=".5" cy=".5" r=".7">
            <stop offset="0" stopColor="#e8806f" />
            <stop offset=".6" stopColor="#8e2f45" />
            <stop offset="1" stopColor="#2a0e1d" />
          </radialGradient>
        </defs>
        <rect width="400" height="220" className="fill-surface-2" />
        <circle cx="120" cy="110" r="76" fill="url(#tissue)" />
        <ellipse cx="138" cy="96" rx="22" ry="17" fill="#f2b5a0" />
        <ellipse cx="138" cy="96" rx="29" ry="23" fill="none" className="stroke-pass" strokeWidth="3" strokeDasharray="6 4" />
        <circle cx="284" cy="110" r="76" className="fill-bg stroke-line" />
        <ellipse cx="302" cy="96" rx="22" ry="17" className="fill-fg" />
        <text x="284" y="206" textAnchor="middle" className="fill-muted font-mono" fontSize="12">predicted mask</text>
      </svg>
    );
  }
  if (slug !== "library") {
    // Generated cover for any new project: its initials over a red slash
    const initials = title
      .split(/\s+/)
      .filter((w) => /^[A-Za-z0-9]/.test(w))
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
    return (
      <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <rect width="400" height="220" className="fill-surface-2" />
        {Array.from({ length: 14 }).map((_, i) => (
          <path key={i} d={`M${i * 34 - 60} 220 L${i * 34 + 40} 0`} className="stroke-line" strokeWidth="1" />
        ))}
        <path d="M-20 150 L420 70" className="stroke-accent" strokeWidth="4" />
        <text x="200" y="138" textAnchor="middle" className="fill-fg font-display" fontSize="92">{initials || "⚔"}</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="220" className="fill-surface-2" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={70 + i * 38} y={60 + (i % 3) * 8} width="30" height={110 - (i % 3) * 8} rx="4" className={i % 3 === 0 ? "fill-warn" : i % 3 === 1 ? "fill-accent" : "fill-pass"} opacity=".85" />
      ))}
      <rect x="56" y="170" width="290" height="10" rx="3" className="fill-line" />
    </svg>
  );
}
