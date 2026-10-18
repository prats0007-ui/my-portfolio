"use client";

import { useEffect, useState } from "react";

export default function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let r = 0;
    let i = roles[0].length;
    let deleting = true;
    let timer: number;
    const tick = () => {
      const word = roles[r];
      if (deleting) {
        i -= 1;
        setText(word.slice(0, i));
        if (i === 0) {
          deleting = false;
          r = (r + 1) % roles.length;
          timer = window.setTimeout(tick, 300);
          return;
        }
        timer = window.setTimeout(tick, 40);
      } else {
        const next = roles[r];
        i += 1;
        setText(next.slice(0, i));
        if (i === next.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1800);
          return;
        }
        timer = window.setTimeout(tick, 85);
      }
    };
    timer = window.setTimeout(tick, 2200);
    return () => window.clearTimeout(timer);
  }, [roles]);

  return (
    <p className="font-mono text-lg text-accent sm:text-2xl" aria-label={roles.join(", ")}>
      <span aria-hidden>
        &lt;{text}
        <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent" /> /&gt;
      </span>
    </p>
  );
}
