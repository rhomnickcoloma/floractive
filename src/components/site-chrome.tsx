"use client";

import { useEffect, useState } from "react";

const FACEBOOK = "https://www.facebook.com/floractivephilippines";
const INSTAGRAM = "https://www.instagram.com/floractivephilippines/";

export function SiteChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      setProgress(pct);
      setShowTop(doc.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-gold to-gold-light transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Vertical social rail */}
      <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex">
        <span className="h-16 w-px bg-ink/20" />
        <a
          href={FACEBOOK}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-ink/60 transition-colors hover:text-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.2H7.4V13h2.6v8h3.5z" />
          </svg>
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-ink/60 transition-colors hover:text-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@floractivephilippines"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
          className="text-ink/60 transition-colors hover:text-gold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16.5 3c.3 2 1.5 3.5 3.5 3.8v2.5c-1.3 0-2.5-.4-3.5-1v5.9c0 3-2.2 5.3-5.1 5.3S6.3 19.2 6.3 16.4c0-2.7 2.1-4.9 4.8-4.9.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.4-1 2.4-2.5V3h3z" />
          </svg>
        </a>
        <span className="h-16 w-px bg-ink/20" />
      </div>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-rose text-cream shadow-lg transition-all duration-500 hover:bg-rose-deep ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
