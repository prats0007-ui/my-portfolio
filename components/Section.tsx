const order = ["about", "experience", "projects", "skills", "research", "contact"];

export function SectionHead({
  id,
  comment,
  title,
  sub,
  align = "center",
}: {
  id: string;
  comment?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const num = String(order.indexOf(id) + 1).padStart(2, "0");
  const center = align === "center";
  return (
    <div className={`relative mb-14 ${center ? "text-center" : ""}`}>
      <span
        aria-hidden
        className={`outline-text pointer-events-none absolute -top-10 -z-10 select-none font-display text-[7rem] leading-none opacity-25 sm:-top-14 sm:text-[10rem] ${
          center ? "left-1/2 -translate-x-1/2" : "-left-2"
        }`}
      >
        {num}
      </span>
      {comment && <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">// {comment}</p>}
      <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl">{title}</h2>
      <div aria-hidden className={`mt-6 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <span className="h-[3px] w-2 -skew-x-[30deg] bg-accent/30" />
        <span className="h-[3px] w-4 -skew-x-[30deg] bg-accent/60" />
        <span className="h-[3px] w-16 -skew-x-[30deg] bg-accent" />
        <span className="h-[3px] w-4 -skew-x-[30deg] bg-accent/60" />
        <span className="h-[3px] w-2 -skew-x-[30deg] bg-accent/30" />
      </div>
      {sub && <p className={`mt-5 max-w-2xl text-lg text-muted ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export default function Section({
  id,
  comment,
  title,
  sub,
  children,
}: {
  id: string;
  comment: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative isolate border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead id={id} comment={comment} title={title} sub={sub} />
        {children}
      </div>
    </section>
  );
}
