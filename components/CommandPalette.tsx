"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/lib/data";

type Command = { id: string; label: string; hint: string; run: () => void | Promise<void> };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const flash = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2200);
  }, []);

  const commands: Command[] = [
    ...navItems.map((n) => ({
      id: n.id,
      label: `Go to ${n.label}`,
      hint: "Navigate",
      run: () => document.getElementById(n.id)?.scrollIntoView({ behavior: "smooth" }),
    })),
    {
      id: "copy",
      label: "Copy email address",
      hint: profile.email,
      run: async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          flash("Email copied to clipboard");
        } catch {
          flash(`Copy blocked by the browser. Email: ${profile.email}`);
        }
      },
    },
    { id: "resume", label: "Download resume", hint: "PDF", run: () => void window.open(profile.resume, "_blank") },
    { id: "github", label: "Open GitHub", hint: "github.com/lolipie007", run: () => void window.open(profile.github, "_blank") },
    { id: "linkedin", label: "Open LinkedIn", hint: "linkedin.com/in/pratikkkk", run: () => void window.open(profile.linkedin, "_blank") },
  ];

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  const runAt = (i: number) => {
    const cmd = results[i];
    if (!cmd) return;
    setOpen(false);
    void cmd.run();
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runAt(index);
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-[14vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search and quick actions"
            className="w-full max-w-lg overflow-hidden cut border border-line bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Type a section or action…"
                className="h-14 w-full bg-transparent text-fg outline-none placeholder:text-muted"
                aria-label="Search commands"
              />
              <kbd className="border border-line px-1.5 py-0.5 font-mono text-xs text-muted">Esc</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-muted">No matches. Try “projects” or “email”.</li>
              )}
              {results.map((c, i) => (
                <li key={c.id} role="option" aria-selected={i === index}>
                  <button
                    type="button"
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => runAt(i)}
                    className={`flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left ${
                      i === index ? "border-l-2 border-accent bg-surface-2 text-fg" : "border-l-2 border-transparent text-muted"
                    }`}
                  >
                    <span className="font-medium">{c.label}</span>
                    <span className="truncate font-mono text-xs text-muted">{c.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 border-l-2 border-accent bg-surface px-4 py-3 text-sm text-fg shadow-xl"
        >
          {toast}
        </div>
      )}
    </>
  );
}
