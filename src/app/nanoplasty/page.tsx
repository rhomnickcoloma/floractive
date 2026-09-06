import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "What is Nanoplasty? — Floractive Philippines",
  description:
    "Floractive's Nanoplasty is the original nanotechnology hair straightening treatment — smooth, frizz-free hair without damage. Formaldehyde-free, vegan-friendly.",
};

const INGREDIENTS = [
  "Ultraviolet pigments to neutralise unwanted tones",
  "Ojon Oil for hydration",
  "Hydrolysed vegetable keratin",
  "Essential amino acids",
];

export default function NanoplastyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="/images/web-images/Floractive_08.jpg"
            alt="Smooth, frizz-free hair"
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
            <p className="eyebrow text-gold-light">The Original Solution</p>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              What is <span className="italic text-foil">Nanoplasty</span> by
              Floractive?
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Body copy */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              <p className="dropcap">
                Floractive&apos;s Nanoplasty is the original solution, introduced
                to the Australian market by MJ and Sam in 2019. Originally called
                Nanoplastia, the name was later changed to better suit
                English-speaking countries. Today, it has become a widely
                recognized and popular hair straightening solution.
              </p>
              <p>
                Nanoplasty by Floractive is an exclusive and innovative hair
                straightening treatment that utilizes nanotechnology to achieve
                smooth, frizz-free hair without causing damage. Unlike
                traditional keratin treatments, Nanoplasty employs nanoparticles
                combined with intracellular nutrition to penetrate deep into the
                hair fiber, delivering essential nutrients without the need to
                open the cuticle. This approach not only straightens the hair but
                also enhances its health and shine.
              </p>
              <p>
                The treatment is formaldehyde-free and incorporates natural,
                organically sourced ingredients, making it a vegan-friendly
                option.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 border-t border-ink/10 pt-10">
              <p className="text-lg leading-relaxed text-ink-soft">
                Depending on the specific product variant, such as{" "}
                <span className="font-semibold text-ink">W Two Plex</span>,
                designed for blonde and grey hair, the formula may include
                components like:
              </p>
              <ul className="mt-6">
                {INGREDIENTS.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 border-b border-ink/10 py-4"
                  >
                    <span className="font-serif text-xl text-gold">
                      0{i + 1}
                    </span>
                    <span className="pt-0.5 text-lg text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="btn-shine inline-flex items-center justify-center gap-3 bg-rose px-9 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all hover:bg-rose-deep"
              >
                Explore Products <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-ink/25 px-9 py-4 text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-gold"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
