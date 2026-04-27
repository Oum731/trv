import Link from "next/link";
import Image from "next/image";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white sm:h-7 sm:w-7" aria-hidden="true">
      <path d="M15.1 4.4h2.2V1.1C16.9 1 15.7 1 14.3 1c-3 0-5 1.8-5 5.1v2.9H6v3.7h3.3V23h4V12.7h3.3l.5-3.7h-3.8V6.5c0-1.1.3-2.1 1.8-2.1Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
      <path d="M23 5.1c-.8.4-1.7.6-2.7.7 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-3 1.1A4.64 4.64 0 0 0 11.2 7.5c0 .4 0 .7.1 1A13.1 13.1 0 0 1 1.8 3.7a4.6 4.6 0 0 0 1.4 6.2c-.7 0-1.5-.2-2.1-.6v.1c0 2.2 1.6 4.1 3.7 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.2 4.4 3.2A9.34 9.34 0 0 1 1 19.3c-.4 0-.8 0-1-.1a13.12 13.12 0 0 0 7.1 2.1c8.5 0 13.2-7.1 13.2-13.2v-.6c.9-.6 1.7-1.5 2.3-2.4Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
      <path d="M16.04 3C8.86 3 3.02 8.78 3.02 15.9c0 2.28.6 4.5 1.75 6.45L3 29l6.84-1.76a13.14 13.14 0 0 0 6.2 1.56C23.22 28.8 29 23.02 29 15.9S23.22 3 16.04 3Zm0 23.58c-1.96 0-3.88-.52-5.56-1.5l-.4-.23-4.06 1.04 1.08-3.92-.26-.4a10.63 10.63 0 0 1-1.62-5.67c0-5.88 4.86-10.68 10.82-10.68s10.82 4.8 10.82 10.68-4.86 10.68-10.82 10.68Zm5.94-7.98c-.32-.16-1.92-.94-2.22-1.04-.3-.12-.52-.16-.74.16-.22.32-.84 1.04-1.04 1.26-.18.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.58-.96-.86-1.6-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.74-1.78-1.02-2.44-.26-.64-.54-.56-.74-.56h-.64c-.22 0-.56.08-.86.4-.3.32-1.14 1.1-1.14 2.68s1.16 3.12 1.32 3.34c.16.22 2.28 3.46 5.52 4.86.78.34 1.38.54 1.84.68.78.24 1.48.2 2.04.12.62-.1 1.92-.78 2.2-1.54.28-.76.28-1.4.2-1.54-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden="true">
      <path d="M7.3 2h9.4A5.3 5.3 0 0 1 22 7.3v9.4a5.3 5.3 0 0 1-5.3 5.3H7.3A5.3 5.3 0 0 1 2 16.7V7.3A5.3 5.3 0 0 1 7.3 2Zm0 3A2.3 2.3 0 0 0 5 7.3v9.4A2.3 2.3 0 0 0 7.3 19h9.4a2.3 2.3 0 0 0 2.3-2.3V7.3A2.3 2.3 0 0 0 16.7 5H7.3Zm4.7 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm4.4-3.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

const footerLinks = [
  ["#accueil", "Accueil"],
  ["#entreprise", "Entreprise"],
  ["#services", "Nos Services"],
  ["#realisations", "Réalisations"],
  ["#methode", "Méthode"],
  ["#contact", "Devis"],
];

export default function Footer() {
  return (
    <footer className="bg-[#e00000] text-white">
      <div className="mx-auto grid w-full max-w-295 gap-9 px-4 py-9 sm:px-6 sm:py-11 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="relative h-18.5 w-27 shrink-0 overflow-hidden bg-[#e00000] sm:h-21.5 sm:w-30.5 lg:h-23 lg:w-33">
            <Image
              src="/images/logo.jpg"
              alt="TRV Riyad"
              fill
              className="object-contain object-center sm:object-left"
              priority
            />
          </div>

          <p className="mt-3 max-w-140 text-[12.5px] leading-[1.65] text-white sm:text-[13px] lg:text-[13.5px]">
            TRV Riyad est une entreprise de construction et rénovation basée à
            Casablanca, spécialisée dans les projets de villas, d’aménagement
            et de travaux sur mesure. Forte d’un savoir-faire transmis et d’une
            expertise en menuiserie, vitrage et installations électriques, elle
            garantit des réalisations durables et de qualité.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:gap-5">
            <a href="#" aria-label="Facebook" className="inline-flex transition hover:opacity-80">
              <FacebookIcon />
            </a>

            <a href="#" aria-label="Twitter" className="inline-flex transition hover:opacity-80">
              <TwitterIcon />
            </a>

            <a href="https://wa.me/212600000000" aria-label="WhatsApp" className="inline-flex transition hover:opacity-80">
              <WhatsAppIcon />
            </a>

            <a href="#" aria-label="Instagram" className="inline-flex transition hover:opacity-80">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="flex justify-center sm:justify-start lg:justify-end lg:pl-8">
          <div className="w-full max-w-[320px] text-center sm:text-left lg:max-w-none">
            <p className="mb-3 text-[15px] font-bold uppercase tracking-[-0.01em] sm:text-[16px]">
              TRV RIYAD
            </p>

            <nav className="grid grid-cols-2 gap-x-5 gap-y-2 sm:block">
              {footerLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-[13px] leading-[1.65] text-white transition hover:opacity-80 sm:text-[14px]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-black px-4 py-4 text-center text-[11px] leading-[1.6] text-white/90 sm:px-6 sm:text-[12px] lg:px-8">
        © 2026 TRV Riyad – Entreprise de construction et rénovation à Casablanca.
        Tous droits réservés.
      </div>
    </footer>
  );
}