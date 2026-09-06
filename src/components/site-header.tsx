"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is Nanoplasty?", href: "/nanoplasty" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FACEBOOK = "https://www.facebook.com/floractivephilippines";
const INSTAGRAM = "https://www.instagram.com/floractivephilippines/";
const TIKTOK = "https://www.tiktok.com/@floractivephilippines";

function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={FACEBOOK}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook — Floractive Philippines"
        className="transition-colors hover:text-gold"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.2H7.4V13h2.6v8h3.5z" />
        </svg>
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram — @floractivephilippines"
        className="transition-colors hover:text-gold"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={TIKTOK}
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok — @floractivephilippines"
        className="transition-colors hover:text-gold"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16.5 3c.3 2 1.5 3.5 3.5 3.8v2.5c-1.3 0-2.5-.4-3.5-1v5.9c0 3-2.2 5.3-5.1 5.3S6.3 19.2 6.3 16.4c0-2.7 2.1-4.9 4.8-4.9.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.4-1 2.4-2.5V3h3z" />
        </svg>
      </a>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-gold text-noir transition-all duration-500 ${
        scrolled
          ? "shadow-[0_2px_18px_rgba(36,28,22,0.22)]"
          : "shadow-[0_1px_0_rgba(36,28,22,0.12)]"
      }`}
    >
      {/* Top utility bar — social prominent */}
      <div className="border-b border-noir/15 bg-noir text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 lg:px-10">
          <p className="hidden text-xs tracking-[0.18em] text-cream/75 sm:block">
            The Original Brazilian Nanoplasty
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 sm:inline">
              Follow us
            </span>
            <Socials className="text-cream/90" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-noir">
            FLORACTIVE
          </span>
          <span className="eyebrow mt-1 text-noir/65">Philippines</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold tracking-wide text-noir/80 transition-colors hover:text-noir after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-noir after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-noir transition-all ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-noir transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-noir transition-all ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-noir/15 bg-gold transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-noir/15 py-3 text-sm font-semibold tracking-wide text-noir/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
