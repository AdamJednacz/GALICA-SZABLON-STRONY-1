"use client"

import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";
import styles from "./Header.module.scss";
import { useState } from "react";

const navSections = [
  { id: "/", label: "Strona Główna", href: "/" },
  { id: "offer", label: "Oferta", href: "#offer" },
  { id: "gallery", label: "Galeria", href: "#about" },
  { id: "atractions", label: "Atrakcje", href: "#help" },
  { id: "about", label: "O obiekcie", href: "#faq" },
    { id: "contact", label: "Kontakt", href: "#faq" },
      { id: "faq", label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.header_items} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            loading="lazy"
            style={{ marginRight: "8px" }}
            src="/GALICA.png"
            alt="LOGO"
          />
   
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          {navSections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className={styles.nav_item}
            >
              {section.label}
            </Link>
          ))}

              <span className={styles.mobile}>
          <Button to="/" size="large" color="secondary" rounded="rounded" >Zarezerwuj</Button>
  </span>
        </nav>
           <span className={styles.desktop}>
          <Button to="/" size="large" color="secondary" rounded="rounded" >Zarezerwuj</Button>
  </span>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={handleOpenMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
