
import Card, { CardContent } from "../../../card/Card";
import styles from "./Offer.module.scss";


const content :CardContent = {
    h2: "Sprawdź ofertę naszych pokoi i apartamentów",
    p: "    Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque  dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci.",
    buttonLink: "/oferta",
    buttonText: "Zobacz ofertę",
        buttonColor:"primary",
    imgSrc: "/offer.jpg",
    imgAlt: "Zdjęcie pokoju",
  }


const Offer = () => {
  return (
    <section className={styles.offer}>
  <Card
  content={content}
/>
    </section>
  );
};

export default Offer;
