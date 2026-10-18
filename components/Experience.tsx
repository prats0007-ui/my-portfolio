import { experience } from "@/lib/data";
import Section from "./Section";
import ExperienceArt from "./ExperienceArt";
import Rich from "./Rich";

export default function Experience() {
  return (
    <Section id="experience" comment="where I've worked" title="Experience" sub="Where I learned that fewer, better tests beat more tests.">
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((job) => (
          <article key={job.title} className="hover-red cut flex flex-col overflow-hidden border border-line bg-surface">
            <div className="h-40 border-b border-line sm:h-44">
              <ExperienceArt art={job.art} />
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="cut-sm grid h-14 w-14 place-items-center bg-surface-2 text-2xl" aria-hidden>
                  {job.icon}
                </span>
                {job.when && <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:text-sm">{job.when}</span>}
              </div>
              <h3 className="font-display text-3xl uppercase leading-[0.95]">{job.title}</h3>
              <p className="mt-2 font-mono text-sm text-accent">{job.org}</p>
              <ul className="mt-6 space-y-3.5">
                {job.points.map((p) => (
                  <li key={p} className="relative pl-6 text-muted">
                    <span aria-hidden className="absolute left-0 top-[0.15em] text-accent">▸</span>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {job.tags.map((t) => (
                  <span key={t} className="border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent transition-colors hover:border-accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
