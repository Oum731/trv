import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const methodSteps = [
  "Nous analysons vos besoins et étudions le chantier à Casablanca afin de définir les meilleures solutions en construction, rénovation, menuiserie ou installations électriques.",
  "Nous établissons un devis clair et un planning précis pour garantir une organisation maîtrisée et un budget transparent.",
  "Les travaux sont réalisés avec rigueur, dans le respect des normes de qualité, de sécurité et des délais convenus.",
  "Avant la livraison, chaque détail est vérifié pour assurer des finitions soignées et un résultat durable.",
];

function MethodDecorationTop() {
  return (
    <svg viewBox="0 0 170 170" className="h-47.5 w-47.5" fill="none" aria-hidden="true">
      <path d="M20 16L154 0L168 122L54 168L20 16Z" stroke="rgba(0,0,0,0.24)" strokeWidth="1.2" />
    </svg>
  );
}

function MethodDecorationBottom() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="46" stroke="rgba(0,0,0,0.24)" strokeWidth="1.2" />
    </svg>
  );
}

function ContactMapBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 overflow-hidden bg-white">
      <svg viewBox="0 0 1440 620" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="1440" height="620" fill="#ffffff" />
        <g stroke="#cfd6dd" strokeWidth="5" fill="none" opacity="0.95">
          <path d="M-40 80L220 -20" /><path d="M50 220L330 60" /><path d="M220 260L450 80" /><path d="M360 20L520 160" /><path d="M520 40L760 220" /><path d="M790 -20L980 150" /><path d="M980 40L1220 220" /><path d="M1180 80L1460 260" /><path d="M-40 320L240 150" /><path d="M180 380L430 220" /><path d="M430 360L640 190" /><path d="M690 360L930 180" /><path d="M960 340L1200 170" /><path d="M1180 320L1450 140" /><path d="M-20 540L200 360" /><path d="M220 580L470 390" /><path d="M540 580L780 390" /><path d="M900 560L1110 400" /><path d="M1110 520L1370 340" />
        </g>
        <g stroke="#dbe0e5" strokeWidth="3" fill="none" opacity="0.9">
          <path d="M120 -20L40 180" /><path d="M260 0L170 220" /><path d="M420 -10L320 250" /><path d="M610 -10L490 260" /><path d="M780 0L660 240" /><path d="M960 -10L830 260" /><path d="M1120 -10L1000 230" /><path d="M1300 -10L1160 240" /><path d="M140 230L60 480" /><path d="M340 230L240 520" /><path d="M560 230L440 560" /><path d="M830 220L690 600" /><path d="M1060 230L930 570" /><path d="M1290 220L1140 560" />
        </g>
        <g fill="none">
          <path d="M760 -30L930 80L1100 180L1290 280" stroke="#7e9bbd" strokeWidth="20" opacity="0.9" />
          <path d="M760 -30L930 80L1100 180L1290 280" stroke="#9eb3cc" strokeWidth="12" opacity="1" />
        </g>
        <text x="90" y="160" transform="rotate(-29 90 160)" fill="#243447" fontSize="34" fontWeight="700" opacity="0.9">
          Rue 2
        </text>
      </svg>
    </div>
  );
}

export default function MethodContactSection() {
  return (
    <section className="relative bg-[#ececec]">
      <div id="methode" className="scroll-mt-28 relative overflow-hidden px-4 pb-0 pt-7 sm:px-6 lg:px-8 lg:pt-8">
        <div className="pointer-events-none absolute -left-23.5 top-45 hidden lg:block">
          <MethodDecorationTop />
        </div>

        <div className="mx-auto grid max-w-295 gap-7 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="pt-0.5 text-center sm:text-left">
            <p className="text-[11px] font-semibold leading-none text-[#df1111]">Suivi chantier</p>

            <h2 className="mt-1 text-[38px] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#111111] sm:text-[48px] lg:text-[52px]">
              Méthode
            </h2>

            <p className="mx-auto mt-4 max-w-105 text-[11px] leading-[1.72] text-[#3f3f3f] sm:mx-0 sm:max-w-82.5 sm:text-[11.5px]">
              Chez TRV Riyad, chaque projet de construction ou de rénovation à Casablanca est mené selon une méthode claire et structurée. De l’étude initiale à la livraison finale, nous garantissons organisation, transparence et qualité d’exécution afin d’assurer des réalisations durables et conformes aux attentes de nos clients.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex h-8.5 items-center justify-center rounded-full bg-[#111111] px-4 text-[10px] font-semibold text-white shadow-[0_8px_16px_rgba(0,0,0,0.16)] transition hover:bg-black"
            >
              <span className="text-white">Demander un devis</span>
              <span className="ml-1.5 text-white">→</span>
            </a>
          </div>

          <div className="space-y-3 pt-1 sm:space-y-3.5 lg:space-y-4">
            {methodSteps.map((step, index) => {
              const activeCircle = index === 0 || index === 2;

              return (
                <div key={step} className="grid grid-cols-[34px_minmax(0,1fr)] items-start gap-3 lg:grid-cols-[42px_minmax(0,1fr)] lg:gap-4">
                  <div className="flex justify-center pt-0.5">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[18px] font-extrabold leading-none shadow-[0_6px_14px_rgba(0,0,0,0.12)] ${
                        activeCircle ? "bg-[#df1111] text-white shadow-[0_6px_14px_rgba(223,17,17,0.25)]" : "bg-white text-[#df1111]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white px-3 py-3 text-center text-[10.5px] leading-[1.65] text-[#4a4a4a] shadow-[0_5px_10px_rgba(0,0,0,0.06)] sm:px-5 sm:py-4 lg:min-h-18 lg:px-6">
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-0.5 top-82.5 z-20 hidden lg:block">
        <MethodDecorationBottom />
      </div>

      <div id="contact" className="scroll-mt-28 relative overflow-hidden bg-white px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-295">
          <h2 className="text-center text-[34px] font-extrabold leading-none tracking-[-0.03em] text-[#df1111] sm:text-right sm:text-[48px] lg:text-[54px]">
            Contactez-nous
          </h2>
        </div>

        <ContactMapBackground />

        <div className="relative mx-auto mt-7 max-w-295 sm:mt-8">
          <div className="mx-auto grid max-w-215 overflow-hidden border border-black/10 bg-[#efefef] shadow-[0_8px_18px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_1fr]">
            <div className="relative min-h-57.5 sm:min-h-80 md:min-h-103.75">
              <Image src="/images/contact.jpg" alt="Bois de construction" fill className="object-cover" />
            </div>

            <div className="bg-[#efefef] px-4 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8">
              <p className="text-[12px] font-semibold text-[#df1111]">Demande de devis</p>

              <h3 className="mt-3 max-w-[320px] text-[24px] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#111111] sm:text-[32px] lg:text-[34px]">
                Contactez TRV Riyad
                <br />
                pour vos travaux
              </h3>

              <p className="mt-4 max-w-85 text-[12px] leading-[1.8] text-[#3f3f3f] sm:text-[12.5px]">
                TRV Riyad vous accompagne dans vos projets de construction et rénovation à Casablanca. Contactez-nous pour un devis clair et une étude personnalisée.
              </p>

              <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">
                {[
                  [MapPin, "XXXXX XXXX XXXX XXXX XXXXX"],
                  [Mail, "Contact@trvriyad.ma"],
                  [Phone, "XXX - XXXXXXX"],
                ].map(([Icon, text]) => (
                  <div key={String(text)} className="flex min-w-0 items-center gap-3 text-[11.5px] text-[#222222] sm:gap-4 sm:text-[12px]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#df1111] text-white">
                      <Icon size={14} strokeWidth={2.3} />
                    </span>
                    <span className="min-w-0 wrap-break-word">{text as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}