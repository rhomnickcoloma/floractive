import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us — Floractive Philippines",
  description:
    "The Official Floractive Team in the Philippines — bringing advanced Brazilian hair technology, professional education and certification to local salons.",
};

const STANDARDS = [
  {
    title: "Halal Certification",
    body: "Floractive's ingredients, raw materials and manufacturing processes are assessed according to recognised Halal standards, reinforcing the brand's commitment to quality and responsible product formulation.",
  },
  {
    title: "ISO 9001 Certification",
    body: "Reflects Floractive's commitment to internationally recognized quality management standards, consistent processes and continuous improvement.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="/images/web-images/Floractive_15.jpg"
            alt="Floractive professional hair care"
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
            <p className="eyebrow text-gold-light">About Us</p>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              The Official Floractive Team in the{" "}
              <span className="italic text-foil">Philippines</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p className="dropcap">
                As the Official Floractive team in the Philippines, we bring
                Floractive&apos;s professional hair technology directly to the
                local salon industry through authentic products, expert
                education, certification, and dedicated local support.
              </p>
              <p>
                We bring Floractive&apos;s advanced Brazilian hair technology and
                professional salon solutions to the Philippine market, giving
                salons access to globally recognized innovation backed by
                education and expertise.
              </p>
              <p>
                We believe the Philippine market deserves world-class hair
                treatments that deliver exceptional results while embracing a
                more modern approach to professional hair care. With our tropical
                climate, high humidity, and the everyday challenges of frizz and
                unruly hair, Floractive&apos;s Nanoplasty technology offers an
                innovative solution for smoother, straighter and beautifully
                manageable hair.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">International Standards &amp; Quality</p>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Backed by internationally recognized certifications
              </h2>
              <p className="mt-6 text-lg text-ink-soft">
                Floractive&apos;s commitment to quality is supported by
                internationally recognized standards and certifications,
                including:
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {STANDARDS.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="flex h-full flex-col border border-ink/10 bg-cream p-9">
                  <span className="font-serif text-4xl text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-ink-soft">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="bg-noir text-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10 lg:py-28">
          <Reveal>
            <p className="eyebrow text-gold-light">Global Innovation, Now in the Philippines</p>
            <span className="hairline mx-auto mt-6 block w-16" />
            <p className="mt-8 text-lg leading-relaxed text-cream/80">
              With a presence in more than 100 countries worldwide, Floractive
              has become an internationally established name in professional hair
              care. Today, we are proud to bring the Floractive experience to
              salons across the Philippines — with genuine products, professional
              education, hands-on training and certification, backed by a
              dedicated local team.
            </p>
            <Link
              href="/contact"
              className="btn-shine mt-10 inline-flex items-center justify-center gap-3 bg-rose px-9 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all hover:bg-rose-deep"
            >
              Partner With Us <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
