import { Link, useLocation } from "react-router-dom";
import { nav, profile } from "@/content";

const linkClass =
  "inline-flex min-h-11 items-center px-2 font-mono text-xs uppercase tracking-[0.14em] text-background/70 hover:text-background";
const activeLinkClass =
  "inline-flex min-h-11 items-center px-2 font-mono text-xs uppercase tracking-[0.14em] font-medium text-background";

function BrandMark() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3.5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" fill="currentColor" />
    </svg>
  );
}

function BrandLink({ className, toHome }) {
  const content = (
    <>
      <BrandMark />
      {profile.name}
    </>
  );

  const shared = {
    className: `inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-background ${className ?? ""}`.trim(),
  };

  if (toHome) {
    return (
      <Link to="/" {...shared}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#top" {...shared}>
      {content}
    </a>
  );
}

export const Nav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <>
      <div className="h-[4.75rem]" aria-hidden="true" />
      <header className="fixed top-0 right-0 left-0 z-20 px-6 pt-4">
        <nav
          className="mx-auto flex min-h-14 w-full max-w-3xl items-center justify-between gap-3 rounded-[32px] border border-foreground/20 bg-foreground/90 px-4 text-background backdrop-blur-md sm:h-14 sm:px-5"
          aria-label="Primary"
        >
          <BrandLink toHome={!onHome} />
          <ul className="flex flex-wrap items-center justify-end gap-x-0.5">
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
    </>
  );
};
