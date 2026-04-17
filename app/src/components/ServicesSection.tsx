import Image from "next/image";

const services = [
  { title: "vitrage", image: "/images/service-vitrage.jpg" },
  { title: "aluminium", image: "/images/project-2.jpg" },
  { title: "Menuiserie bois", image: "/images/project-3.jpg" },
];

function CircleArrow({
  direction = "up",
  className = "",
}: {
  direction?: "up" | "down";
  className?: string;
}) {
  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_22px_rgba(0,0,0,0.22)] ${className}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        {direction === "up" ? (
          <>
            <path
              d="M12 19V5"
              stroke="#e10600"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M6 11L12 5L18 11"
              stroke="#e10600"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          <>
            <path
              d="M12 5V19"
              stroke="#e10600"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M6 13L12 19L18 13"
              stroke="#e10600"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </div>
  );
}

function DecorativeStar() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-55 w-55"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="
          M 95 28
          L 145 28

          L 136 92
          L 182 48
          L 206 92

          L 152 112
          L 202 128
          L 178 172

          L 132 146
          L 120 210
          L 108 146

          L 62 172
          L 48 128
          L 88 112

          L 48 92
          L 58 48
          L 104 92
          Z
        "
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black">
      <div className="mx-auto grid max-w-295 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-black px-5 py-10 text-white sm:px-6 lg:min-h-190 lg:px-8 lg:py-20">
          <div className="max-w-90">
            <p className="text-[11px] font-semibold text-[#e10600] sm:text-[12px]">
              Expertise
            </p>

            <h2 className="mt-2 text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[56px]">
              Nos Services
            </h2>

            <p className="mt-4 max-w-82.5 text-[12px] leading-[1.75] text-white/78 sm:text-[13px] lg:text-[14px]">
              Fondée dans la continuité d’une expérience reconnue dans le
              domaine du bâtiment, TRV Riyad perpétue un savoir-faire transmis
              de génération en génération, en garantissant qualité, rigueur et
              engagement dans chaque projet.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-[#e10600] px-6 text-[13px] font-semibold text-white transition hover:bg-[#c90500]"
            >
              <span className="text-white">Demander un devis</span>
              <span className="ml-2 text-white">→</span>
            </a>
          </div>

          <div className="pointer-events-none absolute -bottom-18 -left-10 hidden lg:block">
            <DecorativeStar />
          </div>
        </div>

        <div className="bg-black px-4 py-4 sm:px-5 lg:px-0 lg:py-0">
          <div className="relative grid gap-4 lg:gap-4">
            <div className="relative h-45 overflow-hidden sm:h-52.5 lg:h-51.25">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(152,25,18,0.18)_58%,rgba(152,25,18,0.48)_100%)]" />
              <div className="absolute left-4 bottom-3 text-[28px] font-extrabold leading-none tracking-[-0.03em] text-white sm:left-5 sm:bottom-4 sm:text-[34px] lg:text-[26px]">
                vitrage
              </div>

              <CircleArrow
                direction="up"
                className="absolute top-3 right-3 lg:top-4 lg:right-4"
              />
            </div>

            <div className="relative h-57.5 overflow-hidden sm:h-70 lg:h-72.5">
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_0%,rgba(165,78,48,0.16)_52%,rgba(159,57,37,0.45)_100%)]" />
              <div className="absolute left-4 bottom-3 text-[28px] font-extrabold leading-none tracking-[-0.03em] text-white sm:left-5 sm:bottom-4 sm:text-[34px] lg:text-[26px]">
                aluminium
              </div>
            </div>

            <div className="relative h-57.5 overflow-hidden sm:h-70 lg:h-72.5">
              <Image
                src={services[2].image}
                alt={services[2].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(112,35,18,0.14)_52%,rgba(144,44,28,0.42)_100%)]" />
              <div className="absolute left-4 bottom-3 text-[27px] font-extrabold leading-none tracking-[-0.03em] text-white sm:left-5 sm:bottom-4 sm:text-[34px] lg:text-[22px]">
                Menuiserie bois
              </div>

              <CircleArrow
                direction="down"
                className="absolute -bottom-4.5 left-1/2 -translate-x-1/2 lg:-bottom-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}