import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="os-screen fixed inset-0 flex flex-col items-center justify-center gap-4 px-6 text-foreground">
      <div className="os-boot w-full max-w-md border px-6 py-5 text-center">
        <p className="text-xs os-muted">ERROR 404</p>
        <h1 className="mt-2 text-lg font-semibold os-text">Page not found</h1>
        <p className="mt-2 text-sm os-muted">
          This path is not mapped in tjwu.OS. Return to the desktop to continue.
        </p>
        <Link
          to="/"
          className="os-button mt-4 inline-flex border px-4 py-2 text-sm font-semibold"
        >
          Back to tjwu.OS
        </Link>
      </div>
    </div>
  );
};
