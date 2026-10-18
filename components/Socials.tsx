import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Socials() {
  const base =
    "hover-red cut-sm grid h-13 w-13 place-items-center border transition-colors";
  return (
    <div className="flex gap-3">
      <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className={`${base} border-line bg-surface-2 text-fg hover:text-accent`}>
        <GitHubIcon className="h-6 w-6" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={`${base} border-accent bg-accent text-white hover:bg-bg`}>
        <LinkedInIcon className="h-6 w-6" />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email" className={`${base} border-line bg-fg text-bg hover:bg-bg hover:text-accent`}>
        <MailIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
