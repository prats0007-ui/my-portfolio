"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const openPalette = () => window.dispatchEvent(new Event("open-palette"));

  return (
    <header className="fixed inset-x-0 z-50 px-3 sm:px-4" style={{ top: "calc(0.75rem + env(safe-area-inset-top, 0px))" }}>
      <nav aria-label="Main" className="cut mx-auto flex h-16 max-w-6xl items-center justify-between border border-line bg-bg/80 px-4 backdrop-blur-xl sm:px-5">
        <a href="#top" className="font-display text-2xl uppercase">
          <span className="text-accent">&lt;</span> {profile.initials} <span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  active === n.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {n.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-0.5 h-[2px] -skew-x-[30deg] bg-accent transition-transform ${
                    active === n.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            className="hidden h-10 items-center gap-2 border border-line px-3 font-mono text-xs uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent hover:text-fg sm:flex"
          >
            Search
            <kbd className="border border-line bg-surface-2 px-1.5 py-0.5 text-[0.7rem]">{isMac ? "⌘" : "Ctrl"} K</kbd>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center border border-line text-fg md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="cut mx-auto mt-2 max-w-6xl border border-line bg-bg/95 p-2 backdrop-blur-xl md:hidden">
          {navItems.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 px-4 py-3 hover:bg-surface-2"
              >
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl uppercase">{n.label}</span>
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openPalette();
              }}
              className="block w-full px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.14em] text-muted hover:bg-surface-2"
            >
              Search and quick actions
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
