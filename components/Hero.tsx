import { profile } from "@/lib/data";
import RoleRotator from "./RoleRotator";
import Terminal from "./Terminal";
import Socials from "./Socials";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="slash-bg absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -right-48 -top-24 -z-10 h-[620px] w-[620px] rounded-full bg-accent/20 blur-3xl" />
      <div aria-hidden className="hero-slash absolute left-[-15%] top-[55%] -z-10 h-[3px] w-[140%] bg-accent shadow-[0_0_30px_6px_var(--accent)] lg:top-[50%]" />

      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-28">
        <div className="min-w-0">
          <p className="hover-red cut-sm mb-8 inline-flex items-center gap-2.5 border border-line bg-surface/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted sm:text-sm">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            {profile.availability}
          </p>

          <p className="mb-2 text-xl text-muted sm:text-2xl">Hi all, I&apos;m</p>
          <h1 className="font-display uppercase leading-[0.86]">
            <span className="block text-[clamp(3.8rem,15vw,8.5rem)] text-fg">{profile.first}</span>
            <span className="outline-text block text-[clamp(3rem,12.5vw,6.25rem)]">
              {profile.last}
              <span className="ml-2 inline-block h-[0.14em] w-[0.14em] bg-accent align-baseline [-webkit-text-stroke:0]" />
            </span>
          </h1>

          <div className="mb-6 mt-8 min-h-8">
            <RoleRotator roles={profile.roles} />
          </div>

          <p className="mb-9 max-w-xl text-base text-muted sm:text-lg">{profile.lede}</p>

          <div className="mb-9">
            <Socials />
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#contact" className="btn-slash bg-accent py-4 font-mono text-sm font-medium uppercase tracking-[0.14em] text-accent-fg transition-colors hover:bg-pass">
              Contact me
            </a>
            <a href={profile.resume} target="_blank" rel="noopener" className="btn-slash bg-fg py-4 font-mono text-sm font-medium uppercase tracking-[0.14em] text-bg transition-colors hover:bg-accent hover:text-white">
              Download resume
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
