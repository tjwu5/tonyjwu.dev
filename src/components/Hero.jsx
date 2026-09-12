import { useEffect, useRef, useState } from "react";
import { hero, profile } from "@/content";
import portrait from "@/assets/images/profilephoto.jpg";
import sfuLogo from "@/assets/images/SFU.png";
import hkuLogo from "@/assets/images/HKU.png";

const schoolLogos = {
  sfu: sfuLogo,
  hku: hkuLogo,
};

function trimKnockout(source, knock) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        reject(new Error("canvas"));
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const knockWhite = knock === "white";

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const kill = knockWhite
          ? r > 238 && g > 238 && b > 238
          : r < 28 && g < 28 && b < 28;
        if (kill) pixels[i + 3] = 0;
      }

      let minX = width;
      let minY = height;
      let maxX = 0;
      let maxY = 0;
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          if (pixels[(y * width + x) * 4 + 3] > 12) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (maxX <= minX || maxY <= minY) {
        resolve(canvas.toDataURL("image/png"));
        return;
      }

      const pad = 4;
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(width - 1, maxX + pad);
      maxY = Math.min(height - 1, maxY + pad);
      const trimW = maxX - minX + 1;
      const trimH = maxY - minY + 1;
      const out = document.createElement("canvas");
      out.width = trimW;
      out.height = trimH;
      out.getContext("2d").drawImage(
        canvas,
        minX,
        minY,
        trimW,
        trimH,
        0,
        0,
        trimW,
        trimH,
      );
      resolve(out.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = source;
  });
}

function Wordmark({ src, knock, alt, className }) {
  const [href, setHref] = useState(null);

  useEffect(() => {
    let cancelled = false;
    trimKnockout(src, knock)
      .then((url) => {
        if (!cancelled) setHref(url);
      })
      .catch(() => {
        if (!cancelled) setHref(src);
      });
    return () => {
      cancelled = true;
    };
  }, [src, knock]);

  if (!href) {
    return <div className={className} aria-hidden="true" />;
  }

  return <img src={href} alt={alt} className={className} />;
}

const externalProps = (isExternal) =>
  isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

const ctaClass =
  "os-button inline-flex min-h-11 items-center rounded-sm border px-4 py-2 text-sm font-semibold";

const ctaPrimaryClass =
  "inline-flex min-h-11 items-center rounded-sm bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors duration-150 hover:bg-accent hover:text-accent-foreground";

function EmailCta({ href, email }) {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(0);

  useEffect(() => {
    return () => window.clearTimeout(copiedTimer.current);
  }, []);

  const onClick = async (event) => {
    if (!navigator.clipboard?.writeText) return;

    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 1000);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <a href={href} onClick={onClick} className={ctaClass} aria-live="polite">
      {copied ? "Copied" : "Email"}
    </a>
  );
}

export const Hero = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <p className="inline-flex w-fit rounded-sm border border-foreground/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] os-muted">
            {hero.kicker}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {hero.name}
          </h1>
          <p className="max-w-xl text-base leading-relaxed os-muted sm:text-lg">
            {hero.headline}
          </p>
          <div className="flex flex-wrap gap-2">
            {hero.primaryCtas.map((cta) =>
              cta.label === "Email" ? (
                <EmailCta key={cta.label} href={cta.href} email={profile.email} />
              ) : cta.label === "Resume PDF" ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  {...externalProps(cta.external)}
                  className={ctaPrimaryClass}
                >
                  {cta.label}
                </a>
              ) : (
                <a
                  key={cta.label}
                  href={cta.href}
                  {...externalProps(cta.external)}
                  className={ctaClass}
                >
                  {cta.label}
                </a>
              ),
            )}
            {hero.secondaryCtas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                {...externalProps(cta.external)}
                className="inline-flex min-h-11 items-center px-3 py-2 text-sm os-muted underline-offset-4 hover:underline"
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[16rem] shrink-0 self-center overflow-hidden rounded-sm border border-foreground/20 sm:mx-0 sm:w-56 sm:max-w-none sm:self-auto">
          <img
            src={portrait}
            alt="Tony Wu"
            width={640}
            height={640}
            className="aspect-square w-full object-cover object-[center_20%]"
          />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {hero.education.map((row) => (
          <figure
            key={row.school}
            className="rounded-sm border border-foreground/20 px-5 py-5 transition-[border-color] duration-150 hover:border-accent/55"
          >
            <Wordmark
              src={schoolLogos[row.logo]}
              knock={row.knock}
              alt=""
              className="h-14 w-auto max-w-[11.5rem] object-contain object-left"
            />
            <figcaption className="mt-4">
              <p className="text-sm font-medium">{row.school}</p>
              <p className="mt-1 text-sm leading-snug os-muted">{row.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="text-sm os-muted">
        {hero.location} · {hero.awards.join(" · ")}
      </p>
    </section>
  );
};
