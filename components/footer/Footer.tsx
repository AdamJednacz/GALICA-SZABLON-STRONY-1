import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link"; // 🔹 import Link
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Logo color="#fff"/>

        <div className={styles.footer_navi}>
          <div className={styles.footer_col}>
            <Link href="/" className={styles.link}>Strona Główna</Link>
          </div>

          <div className={styles.footer_col}>
            <Link href="/oferta" className={styles.link}>Oferta</Link>

          </div>

          <div className={styles.footer_col}>
            <Link href="/galeria" className={styles.link}>Galeria</Link>
 
          </div>

          <div className={styles.footer_col}>
            <Link href="/atrakcje" className={styles.link}>Atrakcje</Link>
         
          </div>

          <div className={styles.footer_col}>
            <Link href="/o-nas" className={styles.link}>O obiekcie</Link>
          </div>
          <div className={styles.footer_col}>
            <Link href="/kontakt" className={styles.link}>Kontakt</Link>
            <p>+48 123 456 789</p>
            <p>obiekt@gmail.com</p>
            <p>Ul. Krakowska 1/2 12-345 Kraków</p>
          </div>
              <div className={styles.footer_col}>
            <Link href="/faq" className={styles.link}>FAQ</Link>
               <Link href="/regulamin" className={styles.link}>Regulamin</Link>
                  <Link href="/polityka-prywatnosci" className={styles.link}>Polityka Prywatności</Link>
          </div>
        </div>

        <div className={styles.copy_container}>
          <p>Copyright &#169; 2025 - GALICA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
