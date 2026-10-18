"use client";

import { useEffect, useState } from "react";

type Seg = { t: string; c?: "kw" | "ok" | "warn" | "fg" };
const lines: Seg[][] = [
  [{ t: "$ ", c: "kw" }, { t: "whoami", c: "fg" }],
  [{ t: "pratik, MS Information Systems @ Northeastern" }],
  [],
  [{ t: "$ ", c: "kw" }, { t: "pytest career/ -q", c: "fg" }],
  [{ t: "✓ ", c: "ok" }, { t: "test_trains_models ....... " }, { t: "TensorFlow, Keras", c: "warn" }],
  [{ t: "✓ ", c: "ok" }, { t: "test_ships_fullstack ..... " }, { t: "Next.js, React", c: "warn" }],
  [{ t: "✓ ", c: "ok" }, { t: "test_builds_rag .......... " }, { t: "LangChain, ChromaDB", c: "warn" }],
  [{ t: "✓ ", c: "ok" }, { t: "test_breaks_things ....... " }, { t: "Selenium, Robot", c: "warn" }],
  [{ t: "✓ ", c: "ok" }, { t: "test_best_paper .......... " }, { t: "IEEE ICRTAC-23", c: "warn" }],
  [],
  [{ t: "5 passed", c: "ok" }, { t: " in 0.42s" }],
  [{ t: "$ ", c: "kw" }, { t: "open --to co-op", c: "fg" }],
];

const color = { kw: "text-accent", ok: "text-pass", warn: "text-warn", fg: "text-fg" } as const;

export default function Terminal() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(lines.length);
      return;
    }
    let i = 0;
    let timer: number;
    const step = () => {
      i += 1;
      setShown(i);
      if (i < lines.length) timer = window.setTimeout(step, i < 4 ? 420 : 280);
    };
    timer = window.setTimeout(step, 500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div aria-hidden className="hover-red overflow-hidden cut border border-line bg-surface shadow-[0_30px_80px_-30px_color-mix(in_srgb,var(--accent)_55%,transparent)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rotate-45 bg-accent" />
        <span className="h-2.5 w-2.5 rotate-45 bg-muted/60" />
        <span className="h-2.5 w-2.5 rotate-45 bg-muted/30" />
        <span className="ml-auto font-mono text-xs text-muted">~/pratik · zsh</span>
      </div>
      <pre className="min-h-[19rem] overflow-x-auto whitespace-pre px-5 py-5 font-mono text-[0.82rem] leading-7 text-muted sm:text-sm">
        {lines.slice(0, shown).map((line, li) => (
          <div key={li}>
            {line.length === 0 ? "\u00a0" : line.map((s, si) => (
              <span key={si} className={s.c ? color[s.c] : undefined}>{s.t}</span>
            ))}
            {li === shown - 1 && shown === lines.length && (
              <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}
