import React from 'react'
import styles from "./Around_Attractions.module.scss"
import Card, { CardContent } from '../../../card/Card'

const attractionsContent:CardContent[] = [
  {
    h2: "Wyciąg Narciarski",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    imgSrc: "/ski.jpg",
    imgAlt: "Zdjęcie wyciągu narciarskiego",
    list:["Godziny otwarcia 08:00 - 23:00","Czy w cenie noclegu: Tak"]

  },
  {
    h2: "Termy wodne",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",

    imgSrc: "/terms.jpg",
    imgAlt: "Zdjęcie term wodnych",
 list:["Godziny otwarcia 08:00 - 23:00","Czy w cenie noclegu: Tak"]
  },

]

const Around_Attractions = () => {
  return (
    <div className={styles.around_atrractions}>
    <div className={`${styles.around_atrractions_container} container `}>
      <h2 className={`${styles.around_atrractions_h2}`}>Atrakcje w okolicy</h2>
    

    </div>
      {attractionsContent.map((data,index)=>(
          <Card  imgStyles={{objectFit:'cover'}} backgroundColor="#fff" key={index} noButton  content={data}/>


      ))}
   
      </div>
  )
}

export default Around_Attractions