"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "What is Nanoplasty?", href: "/nanoplasty" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

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
          ? "shadow-[0_2px_18px_rgba(28,25,22,0.22)]"
          : "shadow-[0_1px_0_rgba(28,25,22,0.12)]"
      }`}
    >
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
              className="relative text-sm tracking-wide text-noir/75 transition-colors hover:text-noir after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-noir after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden items-center gap-2 border border-noir/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-noir transition-colors hover:bg-noir hover:text-gold sm:inline-flex"
          >
            Salon Login
          </Link>

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
              className="border-b border-noir/15 py-3 text-sm tracking-wide text-noir/75"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit items-center border border-noir/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-noir"
          >
            Salon Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
