import Image from "next/image";
import { Building2, School, Wrench } from "lucide-react";

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

          <div className="max-w-140">
            <h2 className="max-w-130 text-[24px] font-extrabold leading-[1.05] text-[#b51217] sm:text-[28px] lg:text-[34px]">
              Entreprise de construction et
              <br />
              rénovation de villas à Casablanca
            </h2>

            <h3 className="mt-4 max-w-130 text-[19px] font-bold leading-[1.15] text-[#ef3b35] sm:text-[22px] lg:text-[28px]">
              Menuiserie bois & aluminium, Vitrage et
              <br />
              installations électriques sur mesure
            </h3>

            <p className="mt-4 max-w-132.5 text-[13px] leading-[1.8] text-[#3f3f46] sm:text-[14px] lg:text-[15px]">
              TRV Riyad accompagne particuliers et professionnels à Casablanca
              dans leurs projets de construction, rénovation et aménagement de
              villas. Nous intervenons avec rigueur dans les domaines de la
              menuiserie bois et aluminium, du vitrage et des installations
              électriques, en proposant des solutions personnalisées adaptées à
              chaque besoin.
            </p>

            <a
              href="#expertise"
              className="mt-6 inline-flex h-10.5 min-w-60 items-center justify-center bg-[#e10600] px-6 text-[13px] font-semibold text-white shadow-[0_6px_14px_rgba(225,6,0,0.2)] transition hover:bg-[#c90500] sm:h-11 sm:min-w-65"
            >
              <span className="text-white">Découvrir l’entreprise ↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-295">
          <h2 className="text-center text-[28px] font-extrabold leading-none text-[#b51217] sm:text-[34px] lg:text-[42px]">
            Informations Utile
          </h2>

          <div className="mx-auto mt-10 grid max-w-245 grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {stats.map((item) => (
              <div key={item.label} className="px-2 text-center">
                <div className="text-[46px] font-extrabold leading-none text-[#1e1e25] sm:text-[56px] lg:text-[62px]">
                  {item.value}
                </div>

                <p className="mx-auto mt-3 max-w-42.5 whitespace-pre-line text-[11px] font-medium leading-[1.45] text-[#3d3d45] sm:text-[12px] lg:text-[13px]">
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

            <div className="relative z-10 -mt-10 grid items-start gap-5 lg:-mt-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
              <div className="mx-auto w-full max-w-42.5 lg:mx-0 lg:ml-10">
                <div className="rounded-2xl bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="space-y-7">
                    <div>
                      <School
                        className="h-4.5 w-4.5 text-black"
                        strokeWidth={2.3}
                      />
                      <p className="mt-3 text-[12px] font-extrabold leading-[1.2] text-[#ef3b35]">
                        Établissements scolaires
                      </p>
                      <p className="mt-2 text-[10.5px] leading-[1.55] text-[#6a6a6f]">
                        Construction et rénovation d’écoles à Casablanca, avec
                        des solutions durables et conformes aux normes.
                      </p>
                    </div>

                    <div>
                      <Building2
                        className="h-4.5 w-4.5 text-black"
                        strokeWidth={2.3}
                      />
                      <p className="mt-3 text-[12px] font-extrabold leading-[1.2] text-[#ef3b35]">
                        Bureaux & espaces
                        <br />
                        professionnels
                      </p>
                      <p className="mt-2 text-[10.5px] leading-[1.55] text-[#6a6a6f]">
                        Aménagement et rénovation de bureaux modernes à
                        Casablanca, avec menuiserie, vitrage et électricité sur
                        mesure.
                      </p>
                    </div>

                    <div>
                      <Wrench
                        className="h-4.5 w-4.5 text-black"
                        strokeWidth={2.3}
                      />
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

              <div className="w-full mt-4 lg:mt-6">
                <div className="px-6 py-7 sm:px-9 lg:px-2 lg:py-9">
                  <p className="text-[11px] font-semibold text-[#ef3b35]">
                    Pourquoi nous choisir ?
                  </p>

                  <h2 className="mt-3 max-w-190 text-[30px] font-black leading-[1.08] tracking-[-0.03em] text-[#111111] sm:text-[40px] lg:text-[28px] xl:text-[34px]">
                    Une Expertise Transmise De
                    <br />
                    Génération En Génération Dans La
                    <br />
                    Construction Et La Rénovation À
                    <br />
                    Casablanca
                  </h2>

                  <p className="mt-4 max-w-190 text-[12px] leading-[1.75] text-[#66666d] sm:text-[13px] lg:text-[13px]">
                    Fondée dans la continuité d’une expérience reconnue dans le
                    domaine du bâtiment, TRV Riyad perpétue un savoir-faire
                    transmis de génération en génération, en garantissant
                    qualité, rigueur et engagement dans chaque projet.
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] font-medium text-[#555] sm:text-[12px]">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#ef3b35] text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span>Héritage et expertise reconnue</span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-medium text-[#555] sm:text-[12px]">
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
