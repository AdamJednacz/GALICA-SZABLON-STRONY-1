import Card, { CardContent } from "../../../card/Card"
import styles from "./Attractions.module.scss"
import styles_2 from "../../../card/Card.module.scss"

const content :CardContent = {
    h2: "Atrakcje, które czekają na Ciebie",
    p: "    Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque  dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci.",
       buttonLink: "/atrakcje",
    buttonText: "Zobacz więcej",
    buttonColor:"white",
    imgSrc: "/attractions.jpg",
    imgAlt: "Zdjęcie pokoju",
    
  }

const Attractions = () => {
  return (
    <section className={styles.attractions}>
        <Card className={styles_2.card_container_primary}  content={content}/>
        </section>
  )
}

export default Attractions