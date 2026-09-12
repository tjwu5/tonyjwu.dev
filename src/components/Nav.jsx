import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/content";

const linkClass =
  "inline-flex min-h-11 items-center justify-center px-2 font-mono text-xs uppercase tracking-[0.14em] text-background/70 hover:text-background";
const activeLinkClass =
  "inline-flex min-h-11 items-center justify-center px-2 font-mono text-xs uppercase tracking-[0.14em] font-medium text-background";

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

function BrandLink({ toHome }) {
  const content = (
    <>
      <BrandMark />
      {profile.name}
    </>
  );

  const className =
    "inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-background";

  if (toHome) {
    return (
      <Link to="/" className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#top" className={className}>
      {content}
    </a>
  );
}

export const Nav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="h-[4.75rem]" aria-hidden="true" />
      <header className="fixed top-0 right-0 left-0 z-20 px-6 pt-4">
        <nav
          className={`mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-foreground/20 bg-foreground/90 text-background backdrop-blur-md transition-all duration-300 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
            open ? "h-[26rem]" : "h-14"
          }`}
          aria-label="Primary"
        >
          <div className="flex h-14 w-full shrink-0 items-center justify-between gap-3 px-4 sm:contents sm:px-0">
            <BrandLink toHome={!onHome} />
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center sm:hidden"
              aria-expanded={open}
              aria-controls="primary-nav-links"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
            </button>
          </div>
          <ul
            id="primary-nav-links"
            className={
              open
                ? "flex flex-1 flex-col items-center justify-center gap-6 px-4 pb-4 sm:flex-none sm:flex-row sm:items-center sm:gap-0 sm:px-0 sm:pb-0"
                : "hidden sm:flex sm:flex-row sm:items-center"
            }
          >
            {nav.map((item) => (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={onHome ? item.href : `/${item.href}`}
                    className={linkClass}
                    onClick={close}
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
                onClick={close}
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
