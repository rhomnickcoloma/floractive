import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "Products — Floractive Philippines",
  description:
    "Explore the full Floractive collection — Nanoplasty straightening, reconstruction, treatments, home care and finishing products. 100% pure, formaldehyde-free, vegan & halal-friendly.",
};

type Product = (typeof productsData.products)[number];

const PRODUCTS = [...productsData.products].sort((a, b) => a.order - b.order);

const CATEGORY_ORDER = [
  "Straightening",
  "Reconstruction",
  "Treatment",
  "Home Care",
  "Finishing",
] as const;

const CATEGORIES = CATEGORY_ORDER.map((category) => ({
  category,
  items: PRODUCTS.filter((p) => p.category === category),
})).filter((group) => group.items.length > 0);

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal delay={(index % 4) * 90}>
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream-deep">
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-gold/15 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
          <span className="absolute left-5 top-5 z-10 text-[10px] uppercase tracking-[0.2em] text-gold">
            {product.category}
          </span>
          <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={product.image}
              alt={`${product.name} — ${product.subtitle}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-8"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="font-serif text-2xl font-semibold text-ink">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-ink-soft">{product.subtitle}</p>
          {product.sizes?.length > 0 && (
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-soft/70">
              {product.sizes.join(" · ")}
            </p>
          )}
          <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold transition-all group-hover:gap-4">
            Discover <span>→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ProductsPage() {
  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <section className="relative isolate overflow-hidden bg-noir text-cream">
        <div className="absolute inset-y-0 right-0 hidden w-2/5 lg:block">
          <Image
            src="/images/web-images/Floractive_04.jpg"
            alt="Healthy, reconstructed hair"
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
            <p className="eyebrow font-semibold text-gold-light">The Collection</p>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Professional formulas,{" "}
              <span className="italic text-foil">crafted in Brazil</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
              From the original Nanoplasty to reconstruction, treatments and
              home care — every Floractive formula is 100% pure,
              formaldehyde-free, vegan &amp; halal-friendly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CATEGORY NAV ---------------- */}
      <section className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 lg:px-10">
          {CATEGORIES.map((group) => (
            <a
              key={group.category}
              href={`#${group.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold"
            >
              {group.category}
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- PRODUCT GROUPS ---------------- */}
      <div className="bg-cream">
        {CATEGORIES.map((group, gi) => (
          <section
            key={group.category}
            id={group.category.toLowerCase().replace(/\s+/g, "-")}
            className="scroll-mt-24"
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
              <Reveal>
                <div className="mb-12 flex items-end justify-between gap-6">
                  <div>
                    <p className="eyebrow text-gold">
                      {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                      {group.category}
                    </h2>
                  </div>
                  <span className="hidden shrink-0 text-sm text-ink-soft sm:block">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "product" : "products"}
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            </div>
            {gi < CATEGORIES.length - 1 && (
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <span className="hairline block w-full" />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ---------------- CTA ---------------- */}
      <section className="bg-cream-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Professional Inquiries</p>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Bring the Original Nanoplasty to your salon
            </h2>
            <p className="mt-6 text-lg text-ink-soft">
              Reach out for partnership, wholesale and professional pricing.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <Link
              href="mailto:hello@floractive.ph"
              className="btn-shine inline-flex items-center justify-center gap-3 bg-noir px-10 py-5 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold hover:text-noir"
            >
              hello@floractive.ph <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
