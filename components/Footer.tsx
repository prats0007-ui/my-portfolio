import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pb-10 pt-16">
      <p aria-hidden className="outline-text pointer-events-none select-none text-center font-display text-[22vw] uppercase leading-none opacity-30">
        {profile.first}
      </p>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, React &amp; Tailwind</p>
      </div>
    </footer>
  );
}
