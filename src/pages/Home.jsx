import { Nav } from "@/components/Nav";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export const Home = () => {
  return (
    <div id="top" className="min-h-screen text-left">
      <Nav />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-10">
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <section>
          <a
            href="/Resume_TonyWu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="os-button inline-block border px-3 py-2 text-sm font-semibold"
          >
            Open Resume PDF
          </a>
        </section>
        <ContactSection />
      </main>
    </div>
  );
};
