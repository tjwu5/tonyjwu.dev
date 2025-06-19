import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ContactSection } from "../components/ContactSection"


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection /> 
            <ContactSection />
        </main>
        {/* Footer */}
    </div>
}