"use client";

import Image from "next/image";
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
      <Image
        src="/images/brand/logo-w.png"
        alt="Floractive"
        width={1187}
        height={901}
        priority
        className="preloader__word h-16 w-auto sm:h-20"
      />
      <p
        className="preloader__word font-serif text-3xl font-semibold tracking-[0.35em] text-cream"
        style={{ animationDelay: "120ms" }}
      >
        FLORACTIVE
      </p>
      <span className="preloader__line" />
      <p
        className="preloader__word eyebrow text-gold-light"
        style={{ animationDelay: "220ms" }}
      >
        The Origin of Nanoplasty
      </p>
    </div>
  );
}
