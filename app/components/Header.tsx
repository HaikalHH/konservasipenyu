"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { assetPath } from "../lib/paths";

const links = [
  { href: "/", label: "Beranda", key: "home" },
  { href: "/edukasi", label: "Edukasi & Konservasi", key: "education" },
  { href: "/program", label: "Program Ekowisata", key: "program" },
  { href: "/reservasi", label: "Reservasi", key: "reservation" },
];

export function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="top-ribbon" />
      <header className="site-header">
        <div className="nav-shell">
          <Link className="logos" href="/" aria-label="Konservasi Penyu Pulau Pramuka">
            <img src={assetPath("/assets/logo-taman-nasional.png")} alt="Logo Taman Nasional Kepulauan Seribu" />
            <img src={assetPath("/assets/logo-konservasi.png")} alt="Logo Konservasi Pulau Pramuka" />
          </Link>
          <nav className="desktop-nav" aria-label="Navigasi utama">
            {links.map((link) => (
              <Link key={link.key} href={link.href} className={active === link.key ? "active" : ""}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="menu-button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
        <nav className={`mobile-nav ${open ? "open" : ""}`} aria-label="Navigasi mobile">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={active === link.key ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
