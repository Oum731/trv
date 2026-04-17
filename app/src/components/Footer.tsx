import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e00000] text-white">
      <div className="mx-auto grid max-w-295 gap-10 px-5 py-11 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8 lg:py-12">
        <div>
          <div className="flex items-start gap-4">
            <div className="relative h-21.5 w-27 shrink-0 overflow-hidden bg-[#e00000]">
              <Image
                src="/images/logo.jpg"
                alt="TRV Riyad"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <p className="mt-2 max-w-130 text-[13px] leading-[1.55] text-white">
            TRV Riyad est une entreprise de construction et rénovation basée à
            Casablanca, spécialisée dans les projets de villas, d’aménagement
            et de travaux sur mesure. Forte d’un savoir-faire transmis et d’une
            expertise en menuiserie, vitrage et installations électriques, elle
            garantit des réalisations durables et de qualité.
          </p>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex text-white transition hover:opacity-80"
            >
              <Facebook size={28} strokeWidth={2.2} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="inline-flex text-white transition hover:opacity-80"
            >
              <Twitter size={28} strokeWidth={2.2} />
            </a>

            <a
              href="https://wa.me/212600000000"
              aria-label="WhatsApp"
              className="inline-flex text-white transition hover:opacity-80"
            >
              <MessageCircle size={28} strokeWidth={2.2} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex text-white transition hover:opacity-80"
            >
              <Instagram size={28} strokeWidth={2.2} />
            </a>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="grid content-start gap-2 text-left lg:justify-end lg:text-left">
            <p className="mb-1 text-[16px] font-bold uppercase tracking-[-0.01em]">
              TRV RIYAD
            </p>

            <Link
              href="#accueil"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Accueil
            </Link>

            <Link
              href="#entreprise"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Entreprise
            </Link>

            <Link
              href="#services"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Nos Services
            </Link>

            <Link
              href="#realisations"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Réalisations
            </Link>

            <Link
              href="#methode"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Méthode
            </Link>

            <Link
              href="#contact"
              className="text-[14px] leading-[1.65] text-white transition hover:opacity-80"
            >
              Devis
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black px-4 py-4 text-center text-[12px] text-white/90 sm:px-6 lg:px-8">
        © 2026 TRV Riyad – Entreprise de construction et rénovation à
        Casablanca. Tous droits réservés.
      </div>
    </footer>
  );
}