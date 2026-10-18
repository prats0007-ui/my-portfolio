import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";
import { SectionHead } from "./Section";
import Socials from "./Socials";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="min-w-0">
          <SectionHead
            id="contact"
            comment="let's connect"
            title="Contact me 📬"
            sub="Open to Summer 2027 SDE and AI/ML internships, co-ops, and collaborations."
            align="left"
          />
          <a href={`mailto:${profile.email}`} className="block break-all font-display text-2xl transition-colors hover:text-accent sm:text-4xl">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="mt-3 block font-display text-2xl transition-colors hover:text-accent sm:text-4xl">
            {profile.phone}
          </a>
          <div className="mt-9">
            <Socials />
          </div>
        </div>
        <div className="min-w-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
