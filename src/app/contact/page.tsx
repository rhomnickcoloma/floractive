import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact Us — Floractive Philippines",
  description:
    "Get in touch with Floractive Philippines through our distributor FILIAM Business Ventures Inc. Email floractive@filiamph.com.",
};

const FACEBOOK = "https://www.facebook.com/floractivephilippines";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="/images/web-images/Floractive_21.jpg"
            alt="Floractive Philippines"
            fill
            priority
            quality={90}
            sizes="40vw"
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-noir via-noir/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="eyebrow text-gold-light">Contact Us</p>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              We look forward to{" "}
              <span className="italic text-foil">hearing from you</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">
              Exceptional service is at the heart of the Floractive experience.
              Whether you&apos;re looking for expert product advice, professional
              support, or simply have a question, our dedicated team is always
              happy to assist.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Get in touch with us through our distributor{" "}
              <span className="font-semibold text-ink">
                FILIAM Business Ventures Inc.
              </span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="eyebrow text-gold">Email</span>
                <a
                  href="mailto:floractive@filiamph.com"
                  className="font-serif text-2xl text-ink transition-colors hover:text-gold"
                >
                  floractive@filiamph.com
                </a>
              </div>
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="eyebrow text-gold">Facebook</span>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-2xl text-ink transition-colors hover:text-gold"
                >
                  Floractive Philippines
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12">
              <Link
                href="mailto:floractive@filiamph.com"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-noir px-10 py-5 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold hover:text-noir"
              >
                Email Us <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
