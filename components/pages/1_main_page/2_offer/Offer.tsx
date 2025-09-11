import Button from "../../../button/Button";
import styles from "./Offer.module.scss";
import Image from "next/image";
const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={`container ${styles.offer_container}`}>
        <div className={styles.offer_text}>
          <h2>Sprawdź ofertę naszych pokoi i apartamentów</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis
            nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc
            ullamcorper feugiat amet purus cras sit velit. Quis senectus neque
            dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In
            placerat vel lectus quis nunc. Est tincidunt proin faucibus non
            lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.
            Quis senectus neque dictum bibendum orci.
          </p>
          <Button size="large" color="secondary" rounded="rounded">
            Zobacz ofertę
          </Button>
        </div>
        <div className={styles.image}>
          <Image
            src="/offer.jpg"
            alt="Zdjęcie Pokoju"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
