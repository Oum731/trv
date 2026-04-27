import Image from "next/image";

const stats = [
  { value: "80+", label: "Projets réalisés" },
  { value: "50+", label: "années d’expérience" },
  { value: "95%", label: "Chantiers livrés dans les\ndélais" },
  { value: "80+", label: "Clients satisfaits" },
  { value: "30", label: "Partenaires et fournisseurs" },
];

export default function CompanyOverviewSection() {
  return (
    <section id="entreprise" className="scroll-mt-28 bg-white lg:scroll-mt-32">
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-295 items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative h-55 w-full max-w-125 bg-transparent sm:h-70 lg:h-80 lg:max-w-140">
              <Image
                src="/images/outils.png"
                alt="Casque et outils de chantier"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="mx-auto max-w-140 text-center lg:mx-0 lg:pt-1 lg:text-left">
            <h2 className="text-[17px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#9f1d1d] drop-shadow-[0_3px_4px_rgba(0,0,0,0.25)] sm:text-[22px] lg:text-[27px]">
              Entreprise de construction et
              <br className="hidden sm:block" />
              rénovation de villas à Casablanca
            </h2>

            <h3 className="mt-6 text-[15px] font-medium leading-tight tracking-[-0.01em] text-[#e10600] sm:text-[18px] lg:text-[22px]">
              Menuiserie bois & aluminium, Vitrage et
              <br className="hidden sm:block" />
              Installations électriques sur mesure
            </h3>

            <p className="mx-auto mt-6 max-w-132.5 text-[12.5px] font-normal leading-[1.75] text-[#2a2a2a] sm:text-[14px] lg:mx-0 lg:text-[15px]">
              TRV Riyad accompagne particuliers et professionnels à Casablanca
              dans leurs projets de construction, rénovation et aménagement de
              villas. Nous intervenons avec rigueur dans les domaines de la
              menuiserie bois et aluminium, du vitrage et des installations
              électriques, en proposant des solutions personnalisées adaptées à
              chaque besoin.
            </p>

            <a
              href="#expertise"
              className="mt-7 inline-flex h-9 w-full max-w-[320px] items-center justify-center bg-[#e10600] px-5 text-[12px] font-semibold text-white shadow-[0_4px_6px_rgba(0,0,0,0.25)] transition hover:bg-[#c90500] sm:max-w-116 sm:text-[12.5px]"
            >
              <span className="text-white">Découvrir L’entreprise ↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-295">
          <h2 className="text-center text-[27px] font-extrabold leading-none text-[#b51217] sm:text-[34px] lg:text-[42px]">
            Informations Utile
          </h2>

          <div className="mx-auto mt-8 grid max-w-245 grid-cols-2 gap-x-4 gap-y-9 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {stats.map((item) => (
              <div key={item.label} className="px-1 text-center sm:px-2">
                <div className="text-[38px] font-extrabold leading-none text-[#1e1e25] sm:text-[56px] lg:text-[62px]">
                  {item.value}
                </div>

                <p className="mx-auto mt-3 max-w-42.5 whitespace-pre-line text-[10.5px] font-medium leading-[1.45] text-[#3d3d45] sm:text-[12px] lg:text-[13px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="expertise"
        className="scroll-mt-28 px-4 pb-12 sm:px-6 lg:scroll-mt-32 lg:px-8 lg:pb-16"
      >
        <div className="mx-auto max-w-295">
          <div className="relative overflow-visible">
            <div className="relative h-62.5 w-full overflow-hidden sm:h-80 lg:h-75">
              <Image
                src="/images/porte.jpg"
                alt="Rénovation intérieure"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="relative z-10 -mt-8 grid items-start gap-5 sm:-mt-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
              <div className="mx-auto w-full max-w-70 sm:max-w-130 lg:mx-0 lg:ml-10 lg:max-w-42.5">
                <div className="rounded-2xl bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="grid gap-7 sm:grid-cols-3 sm:gap-5 lg:block lg:space-y-7">
                    <div>
                      <svg viewBox="0 0 64 64" className="h-5 w-5 fill-black" aria-hidden="true">
                        <path d="M29 6h9.5a3 3 0 0 1 3 3v9.5a3 3 0 0 1-3 3H31.5V31H26V9a3 3 0 0 1 3-3Z" />
                        <path d="M22 27h20v30H33V44a6 6 0 0 0-12 0v13H12V38a11 11 0 0 1 10-11Z" />
                        <path d="M5 39a9 9 0 0 1 9-9h3v27H8a3 3 0 0 1-3-3V39Z" />
                        <path d="M47 30h3a9 9 0 0 1 9 9v15a3 3 0 0 1-3 3h-9V30Z" />
                        <circle cx="27" cy="36" r="5.2" fill="white" />
                      </svg>

                      <p className="mt-3 text-[12px] font-extrabold leading-[1.2] text-[#ef3b35]">
                        Établissements scolaires
                      </p>

                      <p className="mt-2 text-[10.5px] leading-[1.55] text-[#6a6a6f]">
                        Construction et rénovation d’écoles à Casablanca, avec
                        des solutions durables et conformes aux normes.
                      </p>
                    </div>

                    <div>
                      <svg viewBox="0 0 64 64" className="h-5 w-5 fill-black" aria-hidden="true">
                        <path d="M13 7h34a5 5 0 0 1 5 5v45H37V46H27v11H12a3 3 0 0 1-3-3V12a5 5 0 0 1 4-5Zm8 12v8h8v-8h-8Zm14 0v8h8v-8h-8ZM21 33v8h8v-8h-8Zm14 0v8h8v-8h-8Z" />
                      </svg>

                      <p className="mt-3 text-[12px] font-extrabold leading-[1.2] text-[#ef3b35]">
                        Bureaux & espaces
                        <br className="hidden lg:block" />
                        <span className="lg:hidden"> </span>
                        professionnels
                      </p>

                      <p className="mt-2 text-[10.5px] leading-[1.55] text-[#6a6a6f]">
                        Aménagement et rénovation de bureaux modernes à
                        Casablanca, avec menuiserie, vitrage et électricité sur
                        mesure.
                      </p>
                    </div>

                    <div>
                      <svg viewBox="0 0 64 64" className="h-5 w-5 fill-black" aria-hidden="true">
                        <path d="M23 15a9 9 0 0 1 18 0v7a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5v-7Z" />
                        <path d="M19 26h26a5 5 0 0 1 5 5v8a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6v-8a5 5 0 0 1 5-5Z" />
                        <path d="M10 31a4 4 0 0 1 5 4v8H9a5 5 0 0 1-5-5v-2a5 5 0 0 1 6-5Z" />
                        <path d="M54 31a5 5 0 0 1 6 5v2a5 5 0 0 1-5 5h-6v-8a4 4 0 0 1 5-4Z" />
                        <path d="M30 45h4v8h8a3 3 0 0 1 0 6H22a3 3 0 0 1 0-6h8v-8Z" />
                        <path d="M22 50 11 56a3 3 0 0 1-3-5l11-6 3 5Z" />
                        <path d="M42 50 53 56a3 3 0 0 0 3-5l-11-6-3 5Z" />
                      </svg>

                      <p className="mt-3 text-[12px] font-extrabold leading-[1.2] text-[#ef3b35]">
                        Appartements & résidences
                      </p>

                      <p className="mt-2 text-[10.5px] leading-[1.55] text-[#6a6a6f]">
                        Travaux de rénovation d’appartements à Casablanca, avec
                        des finitions soignées et adaptées à chaque projet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 w-full lg:mt-6">
                <div className="px-0 py-6 text-center sm:px-6 sm:py-7 lg:px-2 lg:py-9 lg:text-left">
                  <p className="text-[11px] font-semibold text-[#ef3b35]">
                    Pourquoi nous choisir ?
                  </p>

                  <h2 className="mt-3 text-[25px] font-black leading-[1.1] tracking-[-0.03em] text-[#111111] sm:text-[40px] lg:text-[28px] xl:text-[34px]">
                    Une Expertise Transmise De
                    <br className="hidden sm:block" />
                    Génération En Génération Dans La
                    <br className="hidden sm:block" />
                    Construction Et La Rénovation À
                    <br className="hidden sm:block" />
                    Casablanca
                  </h2>

                  <p className="mx-auto mt-4 max-w-190 text-[12px] leading-[1.75] text-[#66666d] sm:text-[13px] lg:mx-0">
                    Fondée dans la continuité d’une expérience reconnue dans le
                    domaine du bâtiment, TRV Riyad perpétue un savoir-faire
                    transmis de génération en génération, en garantissant
                    qualité, rigueur et engagement dans chaque projet.
                  </p>

                  <div className="mx-auto mt-5 max-w-90 space-y-2.5 lg:mx-0">
                    <div className="flex items-center gap-3 text-left text-[11px] font-medium text-[#555] sm:text-[12px]">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#ef3b35] text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span>Héritage et expertise reconnue</span>
                    </div>

                    <div className="flex items-center gap-3 text-left text-[11px] font-medium text-[#555] sm:text-[12px]">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#ef3b35] text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span>Qualité d’exécution et respect des délais</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex h-9.5 items-center justify-center rounded-full bg-[#e10600] px-5 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(225,6,0,0.22)] transition hover:bg-[#c90500]"
                  >
                    <span className="text-white">Contactez - nous</span>
                    <span className="ml-2 text-white">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}