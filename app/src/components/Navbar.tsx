"use client";

import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  CalendarDays,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "#accueil", id: "accueil" },
  { label: "L’entreprise", href: "#entreprise", id: "entreprise" },
  { label: "Nos Services", href: "#services", id: "services" },
  { label: "Réalisations", href: "#realisations", id: "realisations" },
  { label: "Méthode", href: "#methode", id: "methode" },
  { label: "Devis", href: "#contact", id: "contact" },
];

const leftNavItems = navItems.slice(0, 3);
const rightNavItems = navItems.slice(3);

function FlagEngland() {
  return (
    <span className="relative inline-flex h-3.5 w-4.5 overflow-hidden rounded-xs border border-white/25 bg-white">
      <span className="absolute inset-y-0 left-1/2 w-0.75 -translate-x-1/2 bg-[#c8102e]" />
      <span className="absolute inset-x-0 top-1/2 h-0.75 -translate-y-1/2 bg-[#c8102e]" />
    </span>
  );
}

function FlagSaoudien() {
  return (
    <span className="inline-flex h-3.5 w-4.5 items-center justify-center rounded-xs border border-white/25 bg-[#0b8f3d] text-[6px] font-semibold uppercase leading-none text-white">
      sa
    </span>
  );
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      let current = "accueil";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    const handleResize = () => setOpen(false);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navClass = (id: string) =>
    `whitespace-nowrap text-[17px] transition ${
      activeSection === id
        ? "font-semibold text-[#ef2323]"
        : "text-[#202020] hover:text-[#ef2323]"
    }`;

  const mobileNavClass = (id: string) =>
    `rounded-xl px-4 py-3 text-[15px] transition ${
      activeSection === id
        ? "bg-[#fff1f1] font-semibold text-[#ef2323]"
        : "text-[#1f1f1f] hover:bg-neutral-100"
    }`;

  const topBarLinkClass =
    "inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium text-white no-underline transition hover:text-white/85";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-247 px-4">
          <div className="flex h-7 items-center justify-between text-white">
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="https://maps.google.com/?q=Num+10+Sidi+Moumen+Casablanca"
                target="_blank"
                rel="noreferrer"
                className={topBarLinkClass}
              >
                <MapPin size={11} />
                <span>Num 10, Sidi Moumen</span>
              </a>

              <span className="h-4 w-px bg-white/40" />

              <a href="mailto:contact@riyad.com" className={topBarLinkClass}>
                <Mail size={11} />
                <span>contact@riyad.com</span>
              </a>

              <span className="h-4 w-px bg-white/40" />

              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center text-white transition hover:text-white/85 className={topBarLinkClass}"
              >
                <Linkedin size={11} />
              </a>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <a href="tel:+212XXXXXXXXXX" className={topBarLinkClass}>
                <Phone size={11} className="text-white" />
                <span>+212 XXXXXXXXXX</span>
              </a>

              <span className="h-4 w-px bg-white/40" />

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className={topBarLinkClass}
              >
                <CalendarDays size={11} />
                <span className="underline">Prendre rendez-vous</span>
              </a>

              <span className="h-4 w-px bg-white/40" />

              <a
                href="#"
                aria-label="English"
                className="inline-flex items-center justify-center transition hover:opacity-85"
              >
                <FlagEngland />
              </a>

              <a
                href="#"
                aria-label="Arabic"
                className="inline-flex items-center justify-center transition hover:opacity-85"
              >
                <FlagSaoudien />
              </a>
            </div>

            <div className="flex w-full items-center justify-between md:hidden">
              <a
                href="https://maps.google.com/?q=Num+10+Sidi+Moumen+Casablanca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-medium text-white no-underline"
              >
                <MapPin size={10} />
                <span>Num 10, Sidi Moumen</span>
              </a>

              <button
                type="button"
                aria-label="Ouvrir le menu"
                onClick={() => setOpen(true)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md text-white"
              >
                <Menu size={15} />
              </button>
            </div>
          </div>

          <div className="relative rounded-b-2xl bg-[#f4f4f4] shadow-[0_4px_10px_rgba(0,0,0,0.30)]">
            <div className="hidden h-14.5 items-center justify-between px-8 lg:flex">
              <div className="flex gap-14 pr-24">
                {leftNavItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={navClass(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2">
  <button
    type="button"
    onClick={() => handleNavClick("accueil")}
    className="pointer-events-auto absolute left-1/2 -top-6 flex h-24 w-32 -translate-x-1/2 items-center justify-center rounded-b-xl bg-[#e10d17]"
  >
    <div className="overflow-hidden rounded-xl">
      <Image
        src="/images/logo.jpg"
        alt="TRV Riyad"
        width={90}
        height={90}
        className="object-contain"
        priority
      />
    </div>
  </button>
</div>

              <div className="flex gap-14 pl-24">
                {rightNavItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={navClass(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex h-15 items-center justify-between px-4 lg:hidden">
              <button
                type="button"
                aria-label="Ouvrir le menu"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#222]"
              >
                <Menu size={18} />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick("accueil")}
                className={`text-[15px] font-semibold transition ${
                  activeSection === "accueil"
                    ? "text-[#ef2323]"
                    : "text-[#202020]"
                }`}
              >
                TRV Riyad
              </button>

              <button
                type="button"
                onClick={() => handleNavClick("contact")}
                className="inline-flex h-9 items-center justify-center rounded-full bg-[#e10d17] px-4 text-[12px] font-semibold text-white"
              >
                Devis
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-70 bg-black/45 transition duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-85 bg-white p-5 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-14 overflow-hidden rounded-xl bg-[#e10d17]">
                <Image
                  src="/logo.jpg"
                  alt="TRV Riyad"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1c1c1c]">
                  TRV Riyad
                </p>
                <p className="text-[12px] text-neutral-500">Casablanca</p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#222]"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mb-5 rounded-2xl bg-[#9b5b76] p-4 text-white">
            <div className="space-y-3 text-[13px]">
              <a
                href="https://maps.google.com/?q=Num+10+Sidi+Moumen+Casablanca"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin size={14} />
                <span>Num 10, Sidi Moumen XXXXXX</span>
              </a>

              <a
                href="mailto:contact@riyad.com"
                className="flex items-center gap-2"
              >
                <Mail size={14} />
                <span>contact@riyad.com</span>
              </a>

              <a href="tel:+212XXXXXXXXXX" className="flex items-center gap-2">
                <Phone size={14} className="text-white" />
                <span>+212 XXXXXXXXXX</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="flex items-center gap-2 no-underline"
              >
                <CalendarDays size={14} />
                <span>Prendre rendez-vous</span>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="#"
                  aria-label="English"
                  className="inline-flex items-center justify-center"
                >
                  <FlagEngland />
                </a>
                <a
                  href="#"
                  aria-label="Arabic"
                  className="inline-flex items-center justify-center"
                >
                  <FlagSaoudien />
                </a>
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={mobileNavClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
