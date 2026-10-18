import { profile } from "@/lib/data";

// Pure-CSS splash screen: fades out on its own, so the page never depends on JS to appear
export default function Loader() {
  return (
    <div aria-hidden className="loader fixed inset-0 z-[300] grid place-items-center bg-bg">
      <div className="flex flex-col items-center gap-5">
        <span className="loader-hex font-display text-6xl text-accent">⬡</span>
        <p className="font-mono text-sm tracking-[0.15em] text-muted">
          <span className="text-accent">&lt;</span> {profile.name} <span className="text-accent">/&gt;</span>
        </p>
      </div>
    </div>
  );
}
