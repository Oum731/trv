"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
];

function NavButton({
  direction,
  onClick,
  className = "",
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#e10d17] shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition hover:scale-[1.02] sm:h-11 sm:w-11 ${className}`}
      aria-label={direction === "left" ? "Projet précédent" : "Projet suivant"}
      type="button"
    >
      {direction === "left" ? (
        <ChevronLeft size={20} />
      ) : (
        <ChevronRight size={20} />
      )}
    </button>
  );
}

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);

  const prevIndex = index === 0 ? projects.length - 1 : index - 1;
  const nextIndex = index === projects.length - 1 ? 0 : index + 1;

  const goPrev = () =>
    setIndex((current) => (current === 0 ? projects.length - 1 : current - 1));

  const goNext = () =>
    setIndex((current) => (current === projects.length - 1 ? 0 : current + 1));

  return (
    <section
      id="realisations"
      className="bg-[#f3f3f3] px-4 pb-8 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pb-10 lg:pt-14"
    >
      <div className="mx-auto w-full max-w-295">
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold leading-none text-[#ef1010] sm:text-[40px] lg:text-[42px]">
            Réalisations
          </h2>

          <p className="mx-auto mt-3 max-w-190 text-[12px] leading-[1.7] text-[#5b5b5b] sm:text-[13px]">
            Découvrez nos réalisations en construction et rénovation à
            Casablanca, incluant des projets de villas, d’appartements et
            d’espaces professionnels. Chaque chantier reflète notre expertise en
            menuiserie bois et aluminium, vitrage et installations électriques,
            avec des finitions soignées et durables.
          </p>
        </div>

        <div className="mt-7 flex items-center gap-2 sm:mt-9 sm:gap-4 lg:grid lg:grid-cols-[150px_minmax(0,1fr)_150px] lg:gap-8">
          <div className="relative hidden h-47.5 overflow-hidden rounded-2xl border border-black/15 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:block">
            <Image
              src={projects[prevIndex]}
              alt="Projet précédent"
              fill
              className="object-cover"
            />

            <NavButton
              direction="left"
              onClick={goPrev}
              className="absolute -left-4.5 top-1/2 -translate-y-1/2"
            />
          </div>

          <NavButton direction="left" onClick={goPrev} className="lg:hidden" />

          <div className="min-w-0 flex-1 rounded-[18px] bg-black p-2 shadow-[0_14px_32px_rgba(0,0,0,0.18)] sm:rounded-3xl sm:p-3 lg:rounded-[20px] lg:p-2.5">
            <div className="relative h-55 overflow-hidden rounded-xl bg-white min-[420px]:h-65 sm:h-80 lg:h-100 lg:rounded-[14px]">
              <Image
                src={projects[index]}
                alt={`Projet ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <NavButton direction="right" onClick={goNext} className="lg:hidden" />

          <div className="relative hidden h-47.5 overflow-hidden rounded-2xl border border-black/15 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:block">
            <Image
              src={projects[nextIndex]}
              alt="Projet suivant"
              fill
              className="object-cover"
            />

            <NavButton
              direction="right"
              onClick={goNext}
              className="absolute -right-4.5 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}