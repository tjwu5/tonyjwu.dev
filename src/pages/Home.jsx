import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LatestShip } from "@/components/LatestShip";
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
      <main className="flex flex-col gap-16 overflow-x-visible py-10">
        <div className="flex flex-col gap-8">
          <Hero />
          <div className="mx-auto w-full max-w-3xl px-6">
            <LatestShip />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6">
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </main>
      <ContactSection />
    </div>
  );
};
