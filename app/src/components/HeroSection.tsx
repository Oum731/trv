import Image from "next/image";
import { CalendarDays, Phone, MessageCircleMore } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-[#eccfd7] px-4 pb-10 pt-34.5 sm:px-6 sm:pb-12 sm:pt-35.5 lg:px-8 lg:pb-16 lg:pt-37.5"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Villa en construction"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#8f3750]/78" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(124,35,56,0.88)_0%,rgba(149,68,91,0.62)_54%,rgba(185,112,132,0.22)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-247">
        <div className="max-w-190 pt-2 lg:pt-5">
          {/* Subtitle */}
          <p className="mb-4 inline-block border-b border-white/75 pb-1 text-[13px] font-medium text-white">
            Votre partenaire en travaux et aménagement
          </p>

          {/* Title */}
          <h1 className="text-[38px] font-extrabold leading-[1.15] text-white sm:text-[46px] md:text-[54px] lg:text-[60px]">
            TRV Riyad – Entreprise de construction et rénovation de villas à
            Casablanca
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-190 text-[13px] font-semibold leading-[1.75] text-white/92 sm:text-[14px] lg:text-[15px]">
            TRV Riyad est une entreprise de construction et rénovation basée à
            Casablanca, spécialisée dans les projets de villas et
            d’aménagements sur mesure. Nous intervenons avec expertise en
            menuiserie bois et aluminium, vitrage et installations électriques,
            en garantissant des réalisations durables, soignées et adaptées aux
            exigences de chaque client.
          </p>

          {/* Buttons */}
          <div className="mt-8 grid max-w-185 grid-cols-1 gap-4 md:grid-cols-2">
            {/* Téléphone */}
            <a
              href="tel:+212600000000"
              className="inline-flex h-7.5 items-center justify-center gap-2 bg-black px-6 text-[13px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:bg-[#111]"
            >
              <Phone
                size={13}
                strokeWidth={2.3}
                className="text-white"
              />
              <span className="text-white">+212 XX - XXXXXXX</span>
            </a>

            {/* Rendez-vous */}
            <a
              href="#contact"
              className="inline-flex h-7.5 items-center justify-center gap-2 bg-[#f2f2f2] px-6 text-[13px] font-semibold text-[#e10d17] shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition hover:bg-white"
            >
              <CalendarDays size={13} strokeWidth={2.3} />
              <span className="text-[#e10d17]">Rendez-Vous</span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="mt-10 flex justify-end">
            <a
              href="https://wa.me/212600000000"
              className="inline-flex h-11 items-center gap-3 rounded-full bg-[#0a8b43] px-7 text-[14px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.20)] transition hover:bg-[#087638]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <MessageCircleMore
                  size={17}
                  strokeWidth={2.2}
                  className="text-white"
                />
              </span>
              <span className="text-white">Contactez - Nous</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-[linear-gradient(to_top,rgba(140,47,69,0.76),rgba(140,47,69,0.00))]" />
    </section>
  );
}