import { Link, useLocation } from "react-router-dom";
import { nav, profile } from "@/content";

const linkClass =
  "inline-flex min-h-11 items-center px-2 text-sm text-foreground/70 hover:text-foreground";
const activeLinkClass =
  "inline-flex min-h-11 items-center px-2 text-sm font-semibold text-foreground";

export const Nav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-2"
        aria-label="Primary"
      >
        {onHome ? (
          <a
            href="#top"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground"
          >
            {profile.name}
          </a>
        ) : (
          <Link
            to="/"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground"
          >
            {profile.name}
          </Link>
        )}
        <ul className="flex flex-wrap items-center justify-end gap-1">
          {nav.map((item) => (
            <li key={item.id}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={onHome ? item.href : `/${item.href}`}
                  className={linkClass}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/log"
              className={pathname === "/log" ? activeLinkClass : linkClass}
            >
              Log
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
