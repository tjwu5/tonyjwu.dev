import { Nav } from "@/components/Nav";
import { ContactSection } from "@/components/ContactSection";
import { LogEntry } from "@/components/LogEntry";
import { sortedEntries } from "@/log";

export const Log = () => {
  return (
    <div className="min-h-screen text-left">
      <Nav />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-10">
        <header className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] os-muted">
            Running record
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Log
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed os-muted">
            Ships, decisions, and work — a quieter trail than LinkedIn, not a
            second resume.
          </p>
        </header>
        <div className="flex flex-col gap-6">
          {sortedEntries().map((entry) => (
            <LogEntry key={entry.id} {...entry} />
          ))}
        </div>
      </main>
      <ContactSection />
    </div>
  );
};
