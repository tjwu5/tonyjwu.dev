import { nav, profile } from "@/content";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-2"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground"
        >
          {profile.name}
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-1">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex min-h-11 items-center px-2 text-sm text-foreground/70 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
