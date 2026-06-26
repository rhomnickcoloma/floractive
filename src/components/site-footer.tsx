import Link from "next/link";

const FACEBOOK = "https://www.facebook.com/floractivephilippines";
const INSTAGRAM = "https://www.instagram.com/floractivephilippines/";

export function SiteFooter() {
  return (
    <footer className="bg-noir text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-semibold tracking-wide">
              FLORACTIVE
            </p>
            <p className="eyebrow mt-1 text-gold">Philippines</p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              The original Brazilian Nanoplasty. Formaldehyde-free, vegan &amp;
              halal-friendly hair reconstruction trusted by professionals
              worldwide.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <Link href="/products" className="hover:text-gold">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/nanoplasty" className="hover:text-gold">
                  What is Nanoplasty?
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-gold">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">For Salons</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <Link href="/login" className="hover:text-gold">
                  Salon Login
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Wholesale Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Connect</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              <li>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-gold">
                  Facebook
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold">
                  Instagram
                </a>
              </li>
              <li>
                <span className="text-cream/70">TikTok — Floractive Philippines</span>
              </li>
              <li>
                <a href="mailto:hello@floractive.ph" className="hover:text-gold">
                  hello@floractive.ph
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Floractive Philippines. Exclusively
            distributed by FILIAM Business Ventures, Inc.
          </p>
          <p className="tracking-[0.2em] uppercase">
            The Origin of Nanoplasty · Since 2011
          </p>
        </div>
      </div>
    </footer>
  );
}
