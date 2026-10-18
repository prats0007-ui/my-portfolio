import { aboutCards, profile } from "@/lib/data";
import type { Tone } from "@/lib/data";
import Section from "./Section";

const top: Record<Tone, string> = { accent: "border-t-accent", pass: "border-t-pass", warn: "border-t-warn" };
const label: Record<Tone, string> = { accent: "text-accent", pass: "text-pass", warn: "text-warn" };
const glow: Record<Tone, string> = {
  accent: "from-accent/20",
  pass: "from-pass/15",
  warn: "from-warn/15",
};

export default function About() {
  return (
    <Section id="about" comment="about me" title="Get to know me" sub={profile.aboutTagline}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((c) => (
          <div
            key={c.label}
            className={`hover-red cut border border-line border-t-4 bg-gradient-to-b ${glow[c.tone]} to-surface p-7 sm:p-8 ${top[c.tone]}`}
          >
            <span className="cut-sm mb-6 grid h-14 w-14 place-items-center bg-surface-2 text-2xl" aria-hidden>
              {c.icon}
            </span>
            <p className={`mb-2 font-mono text-xs uppercase tracking-[0.2em] ${label[c.tone]}`}>{c.label}</p>
            <h3 className="font-display text-2xl uppercase leading-tight sm:text-3xl">{c.title}</h3>
            <p className="mt-2 text-muted">{c.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
