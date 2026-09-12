import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView();
  }, [hash]);

  return (
    <div id="top" className="min-h-screen text-left">
      <Nav />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-10">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <ContactSection />
    </div>
  );
};
