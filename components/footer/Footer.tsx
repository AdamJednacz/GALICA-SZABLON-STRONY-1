import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <a href="/" className={styles.logo}>
          <img
            loading="lazy"
            style={{ marginRight: "8px" }}
            src="/GALICA.png"
            alt="logo"
          />
        
        </a>

        <div className={styles.footer_navi}>
          <div className={styles.footer_col}>
            <a href="/" className={styles.link}>Strona Główna</a>
          </div>

          <div className={styles.footer_col}>
            <a href="#offer" className={styles.link}>Oferta</a>
            <a href="/zdalna-recepcja" className={styles.link}>Zdalna recepcja</a>
            <a href="/strony-internetowe" className={styles.link}>Strony internetowe</a>
            <a href="/zarzadzanie-zyskiem" className={styles.link}>Zarządzanie zyskiem</a>
            <a href="/oprogramowanie" className={styles.link}>Silniki rezerwacyjne</a>
            <a href="/oprogramowanie" className={styles.link}>Oprogramowanie</a>
            <a href="/uslugi-graficzne" className={styles.link}>Projektowanie graficzne</a>
          </div>

          <div className={styles.footer_col}>
            <a href="#why-us" className={styles.link}>O Nas</a>
            <a href="#why-us" className={styles.link}>Dlaczego My?</a>
            <a href="#mission" className={styles.link}>Nasza Misja</a>
            <a href="#partners" className={styles.link}>Partnerzy</a>
            <a href="#opinions" className={styles.link}>Opinie</a>
          </div>

          <div className={styles.footer_col}>
            <a href="#contact" className={styles.link}>Kontakt</a>
            <a href="#help" className={styles.link}>Pomoc</a>
            <a href="/polityka-prywatności" className={styles.link}>Polityka prywatności</a>
            <a href="/regulamin" className={styles.link}>Regulamin</a>
          </div>

          <div className={styles.footer_col}>
            <a href="#faq" className={styles.link}>FAQ</a>
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
