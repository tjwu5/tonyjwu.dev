import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-foreground">
      <p className="text-xs os-muted">404</p>
      <h1 className="text-lg font-semibold">Page not found</h1>
      <p className="text-sm os-muted">This page does not exist.</p>
      <Link
        to="/"
        className="os-button mt-2 inline-flex border px-4 py-2 text-sm font-semibold"
      >
        Back to home
      </Link>
    </div>
  );
};
