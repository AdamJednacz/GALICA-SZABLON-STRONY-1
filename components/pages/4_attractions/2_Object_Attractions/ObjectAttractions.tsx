'use client'

import Button from "../../../button/Button"
import Card, { CardContent } from "../../../card/Card"
import styles from "./ObjectAttractions.module.scss"
const attractionsContent:CardContent[] = [
  {
    h2: "Basen Hotelowy",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    imgSrc: "/basen.jpg",
    imgAlt: "Zdjęcie basenu",
    list:["Godziny otwarcia 10:00 - 20:00","Czy w cenie noclegu:Tak"]

  },
  {
    h2: "Stół bilardowy",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",

    imgSrc: "/bilard.jpg",
    imgAlt: "Zdjęcie bilarda",
  list:["Godziny otwarcia 10:00 - 20:00","Czy w cenie noclegu:Tak"]
  },
  {
    h2: "Dart",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    imgSrc: "/dart.jpg",
    imgAlt: "Zdjęcie dartów",
  list:["Godziny otwarcia 10:00 - 20:00","Czy w cenie noclegu:Nie","Koszt:10zł/h"]
  },
]

const ObjectAtrractions = () => {

  return (
    <div className={styles.object_atrractions}>
    <div className={`${styles.object_atrractions_container} container `}>
      <h2 className={`${styles.object_atrractions_h2}`}>Atrakcje na terenie obiektu</h2>
    

    </div>
      {attractionsContent.map((data,index)=>(
          <Card imgStyles={{objectFit:'cover'}} backgroundColor="#fff" key={index} noButton  content={data}/>


      ))}
      <div className={`${styles.object_atrractions_bottom_text} container`}>
        <h2 className={styles.object_atrractions_bottom_text_h2}>Chcesz zobaczyć więcej zdjęć naszych atrackcji ?</h2>
        <Button size="large" rounded="no-rounded" color="primary" to="/galeria">Przejdź do galerii</Button>
      </div>
      </div>
  )
}

export default ObjectAtrractions