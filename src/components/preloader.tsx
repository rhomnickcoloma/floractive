"use client";

import { useEffect, useRef } from "react";

export function Preloader() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only show the intro once per browsing session
    if (sessionStorage.getItem("floractive:intro") === "seen") {
      el.style.display = "none";
      return;
    }
    sessionStorage.setItem("floractive:intro", "seen");

    // Remove from the DOM after it has faded out so it can't trap clicks
    const timer = window.setTimeout(() => {
      el.style.display = "none";
    }, 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="preloader" aria-hidden>
      <p className="preloader__word font-serif text-3xl font-semibold tracking-[0.35em] text-cream">
        FLORACTIVE
      </p>
      <span className="preloader__line" />
      <p
        className="preloader__word eyebrow text-gold-light"
        style={{ animationDelay: "150ms" }}
      >
        The Origin of Nanoplasty
      </p>
    </div>
  );
}
