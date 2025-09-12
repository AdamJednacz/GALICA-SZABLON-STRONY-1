import Card, { CardContent } from "../../../card/Card"
import styles from "./Attractions.module.scss"


const content :CardContent = {
    h2: "Atrakcje, które czekają na Ciebie",
    p: "    Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque  dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci.",
    buttonLink: "/rooms",
    buttonText: "Zobacz ofertę",
    buttonColor:"white",
    imgSrc: "/attractions.jpg",
    imgAlt: "Zdjęcie pokoju",
  }

const Attractions = () => {
  return (
    <section className={styles.attractions}>
        <Card  content={content}/>
        </section>
  )
}

export default Attractions