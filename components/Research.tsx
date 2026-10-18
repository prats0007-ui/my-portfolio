import { papers } from "@/lib/data";
import Section from "./Section";
import { ArrowUpRight } from "./Icons";

export default function Research() {
  return (
    <Section id="research" comment="published work" title="Research" sub="Where curiosity turned into peer-reviewed contributions.">
      <div className="space-y-10">
        {papers.map((p) => (
          <article
            key={p.title}
            className="hover-red cut relative mx-auto max-w-5xl overflow-hidden border border-accent/60 bg-[linear-gradient(135deg,#150406,#5a0912_55%,#0a0505)] p-7 text-white sm:p-14"
          >
            <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-25" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="#ff2a40">
                {[120, 180, 240, 300, 360].map((r) => (
                  <circle key={r} cx="700" cy="60" r={r} />
                ))}
              </g>
            </svg>
            <div className="relative">
              <div className="mb-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="border border-white/30 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] sm:text-sm">{p.badge}</span>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-white/75 sm:text-sm">{p.venue}</span>
              </div>
              <h3 className="max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-6xl">{p.title}</h3>
              <p className="mt-4 max-w-2xl text-lg italic text-[#ffb7be]">{p.tagline}</p>
              <p className="mt-8 max-w-3xl bg-[#0a0505]/60 p-6 text-white/85">{p.abstract}</p>
              <dl className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {p.metrics.map((m) => (
                  <div key={m.label} className="bg-[#0a0505]/75 p-5 text-center sm:p-6">
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl text-[#ff4d61] sm:text-4xl">{m.value}</span>
                      <span className="mt-1 block text-xs text-white/70 sm:text-sm">{m.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="border border-white/15 bg-[#0a0505]/60 px-3.5 py-1.5 text-sm transition-colors hover:border-[#ff4d61]">{t}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noopener" className="btn-slash mt-9 inline-flex items-center gap-2 bg-white py-4 font-mono text-sm uppercase tracking-[0.14em] text-[#b00c20] transition-colors hover:bg-accent hover:text-white">
                Read the paper <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
