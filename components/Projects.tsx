import { projects } from "@/lib/data";
import Section from "./Section";
import ProjectArt from "./ProjectArt";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects" comment="things I've built" title="Projects" sub="Where the ideas become real, working systems.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} className="hover-red cut flex flex-col overflow-hidden border border-line bg-surface">
            <div className="relative h-52 border-b border-line">
              <ProjectArt slug={p.slug} title={p.title} />
              {p.badge && (
                <span className="absolute right-4 top-4 bg-accent px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white">
                  {p.badge}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{p.when}</p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-[1.02]">{p.title}</h3>
              <p className="mb-6 mt-3 text-muted">{p.summary}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent transition-colors hover:border-accent">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-[0.1em] text-muted hover:text-accent">
                    {p.linkLabel ?? "GitHub"} <ArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
