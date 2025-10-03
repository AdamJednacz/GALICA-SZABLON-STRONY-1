import Card, { CardContent } from "../../../card/Card"
import styles from "./AboutUs.module.scss"


const content :CardContent = {
    h2: "Sprawdź najważniejsze informacje o obiekcie",
    p: "    Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque  dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci.",
    buttonLink: "/o-nas",
    buttonText: "Zobacz więcej",
        buttonColor:"primary",
    imgSrc: "/about_us.jpg",
    imgAlt: "Zdjęcie pokoju",
  }


const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
        <Card style={{flexDirection:"row-reverse"}} content={content}/>
    </section>
  )
}

export default AboutUs