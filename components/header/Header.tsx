"use client"

import Link from "next/link";

import Button from "../button/Button";
import styles from "./Header.module.scss";
import { useState } from "react";
import Button_3A from "../AAA_button/Button_3A";
import Logo from "../logo/Logo";


const navSections = [
  { id: "/", label: "Strona Główna", href: "/" },
  { id: "offer", label: "Oferta", href: "/oferta" },
  { id: "gallery", label: "Galeria", href: "/galeria" },
  { id: "atractions", label: "Atrakcje", href: "/atrakcje" },
  { id: "about", label: "O obiekcie", href: "/o-nas" },
    { id: "contact", label: "Kontakt", href: "/kontakt" },

];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={`${styles.header_items} container`}>
      <Logo color="#000"/>

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
                <Button_3A/> 
          <Button to="/zarezerwuj" size="large" color="primary" rounded="no-rounded" >Zarezerwuj</Button>
  </span>
        </nav>
           <span className={styles.desktop}>
                       <Button_3A/> 
          <Button to="/zarezerwuj" size="large" color="primary" rounded="no-rounded" >Zarezerwuj</Button>
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
