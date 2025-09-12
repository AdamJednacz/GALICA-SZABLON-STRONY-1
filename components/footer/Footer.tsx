import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link"; // 🔹 import Link

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link href="/" className={styles.logo}>
          <Image
            loading="lazy"
            style={{ marginRight: "8px" }}
            src="/GALICA.png"
            alt="logo"
            width={120}
            height={40}
          />
        </Link>

        <div className={styles.footer_navi}>
          <div className={styles.footer_col}>
            <Link href="/" className={styles.link}>Strona Główna</Link>
          </div>

          <div className={styles.footer_col}>
            <Link href="#offer" className={styles.link}>Oferta</Link>
            <Link href="/zdalna-recepcja" className={styles.link}>Zdalna recepcja</Link>
            <Link href="/strony-internetowe" className={styles.link}>Strony internetowe</Link>
            <Link href="/zarzadzanie-zyskiem" className={styles.link}>Zarządzanie zyskiem</Link>
            <Link href="/oprogramowanie" className={styles.link}>Silniki rezerwacyjne</Link>
            <Link href="/oprogramowanie" className={styles.link}>Oprogramowanie</Link>
            <Link href="/uslugi-graficzne" className={styles.link}>Projektowanie graficzne</Link>
          </div>

          <div className={styles.footer_col}>
            <Link href="#why-us" className={styles.link}>O Nas</Link>
            <Link href="#why-us" className={styles.link}>Dlaczego My?</Link>
            <Link href="#mission" className={styles.link}>Nasza Misja</Link>
            <Link href="#partners" className={styles.link}>Partnerzy</Link>
            <Link href="#opinions" className={styles.link}>Opinie</Link>
          </div>

          <div className={styles.footer_col}>
            <Link href="#contact" className={styles.link}>Kontakt</Link>
            <Link href="#help" className={styles.link}>Pomoc</Link>
            <Link href="/polityka-prywatności" className={styles.link}>Polityka prywatności</Link>
            <Link href="/regulamin" className={styles.link}>Regulamin</Link>
          </div>

          <div className={styles.footer_col}>
            <Link href="#faq" className={styles.link}>FAQ</Link>
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
