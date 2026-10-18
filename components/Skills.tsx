import { certifications, skillGroups, whatIDo } from "@/lib/data";
import { SectionHead } from "./Section";
import Rich from "./Rich";

function Illustration() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <rect width="400" height="400" className="fill-surface-2" />
      {Array.from({ length: 18 }).map((_, i) => (
        <path key={i} d={`M${i * 30 - 120} 400 L${i * 30 + 60} 0`} className="stroke-line" />
      ))}
      <rect x="68" y="96" width="264" height="176" className="fill-bg stroke-accent" strokeWidth="2" />
      <rect x="68" y="96" width="264" height="28" className="fill-accent" />
      <rect x="82" y="107" width="7" height="7" transform="rotate(45 85.5 110.5)" className="fill-white" />
      <rect x="98" y="107" width="7" height="7" transform="rotate(45 101.5 110.5)" className="fill-white" opacity=".6" />
      <rect x="114" y="107" width="7" height="7" transform="rotate(45 117.5 110.5)" className="fill-white" opacity=".3" />
      <g className="font-mono" fontSize="13">
        <text x="86" y="154" className="fill-accent">def</text>
        <text x="118" y="154" className="fill-fg">ship(feature):</text>
        <text x="104" y="178" className="fill-muted">build(feature)</text>
        <text x="104" y="202" className="fill-muted">test(feature)</text>
        <text x="104" y="226" className="fill-muted">deploy(feature)</text>
        <text x="86" y="256" className="fill-accent">✓ all checks passed</text>
      </g>
      <rect x="180" y="272" width="40" height="34" className="fill-line" />
      <rect x="120" y="306" width="160" height="10" className="fill-line" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative isolate border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-24 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hover-red cut mx-auto aspect-square w-full max-w-md overflow-hidden border border-line">
            <Illustration />
          </div>
          <div>
            <SectionHead id="skills" comment="my toolkit" title="What I do" sub={whatIDo.lead} align="left" />
            <ul className="-mt-4 space-y-4">
              {whatIDo.points.map((p) => (
                <li key={p} className="flex gap-3 text-lg text-muted">
                  <span aria-hidden className="text-accent">⚡</span>
                  <span><Rich text={p} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 text-center">
          <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-6xl">Proficiency</h2>
          <p className="mt-4 text-lg text-muted">The tools I reach for, grouped by what they do.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="hover-red cut border border-line border-t-4 border-t-accent bg-gradient-to-b from-accent/10 to-surface p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="cut-sm grid h-14 w-14 place-items-center bg-surface-2 text-2xl" aria-hidden>{g.icon}</span>
                <h3 className="font-display text-2xl uppercase sm:text-3xl">{g.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li key={s} className="border border-line bg-bg/60 px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mb-6 mt-16 text-center font-display text-3xl uppercase">Certifications</h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="hover-red cut-sm flex items-center gap-4 border border-line bg-surface px-5 py-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-accent/15 font-mono text-sm font-medium text-accent">
                {c.issuer === "Oracle" ? "OCI" : "AZ"}
              </span>
              <span>
                <span className="block font-semibold">{c.name}</span>
                <span className="block text-sm text-muted">{c.issuer}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
