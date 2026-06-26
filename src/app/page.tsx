import Image from "next/image";
import Link from "next/link";

const MARQUEE_ITEMS = [
  "Formaldehyde-Free",
  "Glyoxylic Acid Free",
  "Vegan & Halal-Friendly",
  "70,000+ Salons Worldwide",
  "100+ Countries",
  "The Original Nanoplasty",
  "100% Pure · Chemical-Free",
];

const BENEFITS = [
  "Smooth, straight, and frizz-free hair",
  "Intense shine and softness",
  "Deep hair reconstruction and repair",
  "Reduced hair breakage and damage",
  "Long-lasting results of up to 6–10 months",
  "Suitable for a wide range of hair types",
];

const STATS = [
  { value: "70,000+", label: "Salons worldwide" },
  { value: "100+", label: "Countries available" },
  { value: "2011", label: "Pioneering since" },
  { value: "1st", label: "Original Nanoplasty" },
];

const GALLERY = [
  { src: "/images/wash.jpg", caption: "Cleanse & Prepare" },
  { src: "/images/styling.jpg", caption: "Apply & Reconstruct" },
  { src: "/images/blowdry.jpg", caption: "Seal & Finish" },
];

const REVIEWS = [
  {
    quote:
      "My hair has always been dry and frizzy. After Nanoplasty it looks perfect — healthy, shiny, and effortless. Nothing else has worked like this.",
    author: "Marichu D.",
    role: "Quezon City",
  },
  {
    quote:
      "The only treatment that truly lasts. My hair feels silky and smooth, and waking up to perfectly straight hair every day is so worth it.",
    author: "Ana Patricia L.",
    role: "Makati",
  },
  {
    quote:
      "As a stylist, Floractive lets me offer a 100% safe, premium straightening service. My clients are obsessed and so am I.",
    author: "Joanna R.",
    role: "Salon Owner, Cebu",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-portrait.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-noir/90 via-noir/60 to-noir/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-28 lg:px-10">
          <p className="eyebrow font-semibold text-gold-light">
            The Origin of Nanoplasty · Brazil
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            The Original{" "}
            <span className="italic text-gold-light">Brazilian Nanoplasty</span>{" "}
            by Floractive
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-cream/85">
            100% pure, chemical-free, formaldehyde-free and glyoxylic acid free —
            delivering powerful hair reconstruction and straightening. Vegan
            &amp; halal-friendly.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-xs uppercase tracking-[0.22em] text-noir transition-all hover:bg-gold-light"
            >
              Discover Products
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/nanoplasty"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 px-9 py-4 text-xs uppercase tracking-[0.22em] text-cream backdrop-blur-sm transition-colors hover:border-gold-light hover:text-gold-light"
            >
              What is Nanoplasty?
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-cream/55">
            <span>Formaldehyde-Free</span>
            <span className="hidden h-3 w-px bg-cream/25 sm:block" />
            <span>Vegan &amp; Halal</span>
            <span className="hidden h-3 w-px bg-cream/25 sm:block" />
            <span>Trusted by 70,000+ Salons</span>
          </div>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <section className="overflow-hidden border-y border-ink/10 bg-cream-deep py-5">
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-sm uppercase tracking-[0.22em] text-ink-soft"
            >
              {item}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- BRAND STATEMENT ---------------- */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-10 lg:py-36">
        <p className="eyebrow text-gold">Floractive — The Origin of Nanoplasty</p>
        <p className="mt-8 text-balance font-serif text-3xl font-light leading-[1.35] text-ink sm:text-4xl lg:text-[2.7rem]">
          A revolutionary hair straightening and reconstruction treatment
          designed to replace traditional chemical straightening and keratin
          treatments — preserving the{" "}
          <span className="italic text-gold">health and integrity</span> of the
          hair.
        </p>
      </section>

      {/* ---------------- FULL-BLEED IMAGE BAND ---------------- */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/hero-band.jpg"
          alt="Long, healthy, reconstructed hair"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <p className="max-w-2xl font-serif text-3xl font-light italic leading-snug text-cream sm:text-4xl">
            Hair transformed from within — repaired, nourished, and beautifully
            smooth.
          </p>
        </div>
      </section>

      {/* ---------------- WHAT IS NANOPLASTY ---------------- */}
      <section className="bg-noir text-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/nanoplasty.jpg"
              >
                <source src="/videos/flowing.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold-light">What is Nanoplasty?</p>
            <h2 className="mt-6 text-balance text-4xl font-light leading-tight sm:text-5xl">
              The next generation of hair straightening &amp; reconstruction
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/70">
              Developed by Floractive, Nanoplasty uses advanced nano-molecular
              technology and naturally derived active ingredients to transform
              hair from within — repairing, nourishing and smoothing the hair
              fiber without fumes, discomfort or harsh chemicals.
            </p>

            <p className="mt-12 border-b border-cream/15 pb-4 text-sm uppercase tracking-[0.2em] text-cream/50">
              The Benefits
            </p>
            <ul className="mt-2">
              {BENEFITS.map((benefit, i) => (
                <li
                  key={benefit}
                  className="group flex items-start gap-6 border-b border-cream/10 py-5"
                >
                  <span className="font-serif text-2xl text-gold-light">
                    0{i + 1}
                  </span>
                  <span className="pt-1 text-lg text-cream/85 transition-colors group-hover:text-cream">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- WHY PROFESSIONALS / STATS ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">Why Professionals Choose Floractive</p>
          <h2 className="mt-6 text-balance text-4xl font-light leading-tight text-ink sm:text-5xl">
            Premium Brazilian haircare, trusted around the world
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-ink/10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-cream px-6 py-12 text-center">
              <p className="font-serif text-5xl font-light text-gold lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Original creator of Nanoplasty technology",
            "Formaldehyde-free & glyoxylic acid-free formulas",
            "Vegan and Halal-friendly",
            "Advanced reconstruction & straightening solutions",
            "Premium Brazilian professional haircare brand",
            "Long-lasting, salon-grade results",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 border border-ink/10 bg-cream-deep/40 px-6 py-6"
            >
              <span className="mt-1 text-gold">✦</span>
              <span className="text-ink-soft">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SALON PROCESS GALLERY ---------------- */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-gold">The Salon Experience</p>
            <h2 className="mt-6 text-balance text-4xl font-light leading-tight text-ink sm:text-5xl">
              A one-step, professional ritual
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {GALLERY.map((item, i) => (
              <figure key={item.src} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent" />
                </div>
                <figcaption className="absolute bottom-0 left-0 p-6">
                  <span className="font-serif text-3xl text-gold-light">
                    0{i + 1}
                  </span>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-cream">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- THE STORY ---------------- */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10 lg:py-36">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-noir">
              <Image
                src="/images/salon.jpg"
                alt="A modern professional salon"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-10 text-center">
                <p className="font-serif text-3xl font-light italic leading-tight text-cream">
                  “Innovation, safety &amp; sustainable beauty.”
                </p>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-gold-light">
                  Jane Sarassi · Founder
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:py-6">
            <p className="eyebrow text-gold">The Floractive Story</p>
            <h2 className="mt-6 text-balance text-4xl font-light leading-tight text-ink sm:text-5xl">
              A global leader in high-performance hair treatment
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Founded in Brazil by visionary entrepreneur Jane Sarassi,
                Floractive has become a global leader in professional hair
                treatment. Since its inception in 2011, we have been committed to
                developing innovative, safe and effective cosmetic solutions.
              </p>
              <p>
                Combining cutting-edge technology with carefully selected natural
                ingredients, Floractive ranks among Brazil&apos;s leading
                exporters of professional haircare — trusted by distributors,
                salon owners, hairstylists and clients around the world.
              </p>
              <p>
                Today, Floractive continues to expand internationally, earning
                recognition for its quality, innovation and dedication to
                sustainable beauty.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold hover:gap-5 transition-all"
            >
              About Floractive <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FLORACTIVE PHILIPPINES ---------------- */}
      <section className="relative overflow-hidden bg-noir text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
          <div className="relative aspect-[4/5] w-full overflow-hidden lg:order-2">
            <Image
              src="/images/filipina.jpg"
              alt="Celebrating diverse, beautiful hair"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>

          <div className="lg:order-1">
            <p className="eyebrow text-gold-light">Floractive Philippines</p>
            <h2 className="mt-6 text-balance text-4xl font-light leading-tight sm:text-5xl">
              A crown that matches her{" "}
              <span className="italic text-gold-light">global standard</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-cream/75">
              FILIAM Business Ventures, Inc. is the exclusive distributor of
              Floractive in the Philippines, bringing world-class Brazilian hair
              innovation to professional salons nationwide. Whether her hair is
              wavy, curly, or straight, the modern Filipina deserves
              high-performance, nourishing solutions that protect her hair&apos;s
              natural integrity.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center gap-3 bg-gold px-9 py-4 text-xs uppercase tracking-[0.22em] text-noir transition-all hover:bg-gold-light"
            >
              Partner With Us <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="text-center">
          <p className="eyebrow text-gold">Loved by Clients &amp; Salons</p>
          <h2 className="mt-6 text-balance text-4xl font-light leading-tight text-ink sm:text-5xl">
            Transformations that speak for themselves
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.author}
              className="flex flex-col border border-ink/10 bg-cream-deep/40 p-9"
            >
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-6 flex-1 font-serif text-xl font-light italic leading-relaxed text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-ink/10 pt-6">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink">
                  {review.author}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT CTA ---------------- */}
      <section className="border-t border-ink/10 bg-cream-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Contact Us</p>
            <h2 className="mt-6 text-balance text-4xl font-light leading-tight text-ink sm:text-5xl">
              Bring the Original Nanoplasty to your salon
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              Reach out for partnership, wholesale and professional inquiries.
            </p>
          </div>
          <Link
            href="mailto:hello@floractive.ph"
            className="inline-flex items-center justify-center gap-3 bg-noir px-10 py-5 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold hover:text-noir"
          >
            hello@floractive.ph <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
