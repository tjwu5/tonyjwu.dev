import { Navbar } from "../components/Navbar"
import { ThemeToggle } from "../components/ThemeToggle"
import { HeroSection } from "@/components/HeroSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
        </main>
        {/* Footer */}
    </div>
}