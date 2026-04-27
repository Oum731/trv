import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-[#eccfd7] px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:pt-34.5 lg:px-8 lg:pb-16 lg:pt-37.5"
    >
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

      <div className="relative mx-auto w-full max-w-247">
        <div className="max-w-190 pt-2 lg:pt-5">
          <p className="mb-4 inline-block border-b border-white/75 pb-1 text-[12px] font-medium text-white sm:text-[13px]">
            Votre partenaire en travaux et aménagement
          </p>

          <h1 className="text-[30px] font-extrabold leading-[1.14] text-white min-[420px]:text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px]">
            TRV Riyad – Entreprise de construction et rénovation de villas à
            Casablanca
          </h1>

          <p className="mt-4 max-w-190 text-[12.5px] font-semibold leading-[1.7] text-white/92 sm:text-[14px] sm:leading-[1.75] lg:text-[15px]">
            TRV Riyad est une entreprise de construction et rénovation basée à
            Casablanca, spécialisée dans les projets de villas et d’aménagements
            sur mesure. Nous intervenons avec expertise en menuiserie bois et
            aluminium, vitrage et installations électriques, en garantissant des
            réalisations durables, soignées et adaptées aux exigences de chaque
            client.
          </p>

          <div className="mt-7 grid w-full max-w-185 grid-cols-1 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-2">
            <a
              href="tel:+212600000000"
              className="inline-flex h-8 min-w-0 items-center justify-center gap-2 bg-black px-4 text-center text-[12px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:bg-[#111] sm:h-7.5 sm:px-6 sm:text-[13px]"
            >
              <Phone
                size={13}
                strokeWidth={2.3}
                className="shrink-0 text-white"
              />
              <span className="truncate text-white">+212 XX - XXXXXXX</span>
            </a>

            <a
              href="#contact"
              className="inline-flex h-8 min-w-0 items-center justify-center gap-2 bg-[#f2f2f2] px-4 text-center text-[12px] font-semibold text-[#e10d17] shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition hover:bg-white sm:h-7.5 sm:px-6 sm:text-[13px]"
            >
              <CalendarDays size={13} strokeWidth={2.3} className="shrink-0" />
              <span className="truncate text-[#e10d17]">Rendez-Vous</span>
            </a>
          </div>

          <div className="mt-8 flex justify-center sm:mt-10 sm:justify-end">
            <a
              href="https://wa.me/212600000000"
              className="inline-flex h-11 max-w-full items-center gap-3 rounded-full bg-[#0b8f43] px-5 text-[13px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.20)] transition hover:bg-[#087638] sm:px-6 sm:text-[14px]"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-4.5 w-4.5 shrink-0 fill-white"
                aria-hidden="true"
              >
                <path d="M16.04 3C8.86 3 3.02 8.78 3.02 15.9c0 2.28.6 4.5 1.75 6.45L3 29l6.84-1.76a13.14 13.14 0 0 0 6.2 1.56C23.22 28.8 29 23.02 29 15.9S23.22 3 16.04 3Zm0 23.58c-1.96 0-3.88-.52-5.56-1.5l-.4-.23-4.06 1.04 1.08-3.92-.26-.4a10.63 10.63 0 0 1-1.62-5.67c0-5.88 4.86-10.68 10.82-10.68s10.82 4.8 10.82 10.68-4.86 10.68-10.82 10.68Zm5.94-7.98c-.32-.16-1.92-.94-2.22-1.04-.3-.12-.52-.16-.74.16-.22.32-.84 1.04-1.04 1.26-.18.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.58-.96-.86-1.6-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.74-1.78-1.02-2.44-.26-.64-.54-.56-.74-.56h-.64c-.22 0-.56.08-.86.4-.3.32-1.14 1.1-1.14 2.68s1.16 3.12 1.32 3.34c.16.22 2.28 3.46 5.52 4.86.78.34 1.38.54 1.84.68.78.24 1.48.2 2.04.12.62-.1 1.92-.78 2.2-1.54.28-.76.28-1.4.2-1.54-.08-.14-.3-.22-.62-.38Z" />
              </svg>

              <span className="truncate text-white">Contactez - Nous</span>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,rgba(140,47,69,0.76),rgba(140,47,69,0.00))] sm:h-30" />
    </section>
  );
}