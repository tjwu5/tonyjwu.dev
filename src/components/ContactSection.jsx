import { contact } from "@/content";

export const ContactSection = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="font-semibold">Contact</p>
          <a className="inline-flex min-h-11 items-center" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <p className="os-muted">{contact.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <a
            className="inline-flex min-h-11 items-center"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="inline-flex min-h-11 items-center"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
