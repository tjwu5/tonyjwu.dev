import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="relative py-12 px-4 bg-card border-t border-border mt-12 pt-8">
            <a
                href="#hero"
                className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Back to top"
            >
                <ArrowUp />
            </a>

            <p className="text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} Tony Wu. All rights reserved.
            </p>
        </footer>
    );
};