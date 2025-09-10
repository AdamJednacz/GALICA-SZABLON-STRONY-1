"use client"

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
        <a href="/" className={styles.logo}>
          <img
            loading="lazy"
            style={{ marginRight: "8px" }}
            src="/GALICA.png"
            alt="LOGO"
          />
   
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          {navSections.map((section) => (
            <a
              key={section.label}
              href={section.href}
              className={styles.nav_item}
            >
              {section.label}
            </a>
          ))}

              <span className={styles.mobile}>
          <Button size="large" color="secondary" rounded="rounded" >Zarezerwuj</Button>
  </span>
        </nav>
           <span className={styles.desktop}>
          <Button size="large" color="secondary" rounded="rounded" >Zarezerwuj</Button>
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
