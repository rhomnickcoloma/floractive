import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import productsData from "@/data/products.json";

const PRODUCTS = productsData.products;

function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found — Floractive" };
  return {
    title: `${product.name} — ${product.subtitle} | Floractive`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) => p.collection === product.collection && p.id !== product.id,
  ).slice(0, 4);

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-soft">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="transition-colors hover:text-gold">
              Products
            </Link>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream-deep">
              <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative h-full w-full">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.subtitle}`}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-10"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="eyebrow text-gold">{product.category}</p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-tight text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-serif text-2xl font-light italic text-ink-soft">
              {product.subtitle}
            </p>
            <span className="hairline mt-8 block w-16" />
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              {product.description}
            </p>

            {product.sizes?.length > 0 && (
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-soft/70">
                  Available Sizes
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="border border-ink/15 px-5 py-2 text-sm text-ink"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <dl className="mt-10 grid grid-cols-2 gap-y-4 border-t border-ink/10 pt-8 text-sm">
              <dt className="text-ink-soft">Collection</dt>
              <dd className="text-right font-medium text-ink">
                {product.collection}
              </dd>
              <dt className="text-ink-soft">Category</dt>
              <dd className="text-right font-medium text-ink">
                {product.category}
              </dd>
            </dl>

            <Link
              href="mailto:floractive@filiamph.com"
              className="btn-shine mt-10 inline-flex items-center justify-center gap-3 bg-rose px-9 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all hover:bg-rose-deep"
            >
              Inquire to Order <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-deep">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <Reveal>
              <div className="mb-12 flex items-end justify-between gap-6">
                <h2 className="text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  From the {product.collection} collection
                </h2>
                <Link
                  href="/products"
                  className="hidden shrink-0 items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold transition-all hover:gap-5 sm:inline-flex"
                >
                  View all <span>→</span>
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item, i) => (
                <Reveal key={item.id} delay={i * 90}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="group block"
                  >
                    <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream">
                      <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={item.image}
                          alt={`${item.name} — ${item.subtitle}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain p-8"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-serif text-xl font-semibold text-ink">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
