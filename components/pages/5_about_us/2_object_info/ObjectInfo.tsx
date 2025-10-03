import React from 'react'
import Card, { CardContent } from '../../../card/Card'
import styles from "./ObjectInfo.module.scss"
const objectInfo:CardContent[] = [
  {
    h2: "Oferujemy pobyt z pełnym wyżywieniem",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    imgSrc: "/about_us_card_1.jpg",
    imgAlt: "Zdjęcie bufetu",
    

  },
  {
    h2: "Przechowalnia sprzętu narciarskiego",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",

    imgSrc: "/about_us_card_2.jpg",
    imgAlt: "Zdjęcie nart",

  },
  {
    h2: "Parking dla gości naszego obiektu",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    imgSrc: "/about_us_card_3.jpg",
    imgAlt: "Zdjęcie parkingu",

  },
]


const ObjectInfo = () => {
  return (
    <>
    <div className={styles.objectInfo_container}>
   {objectInfo.map((data,index)=>(
          <Card imgStyles={{objectFit:'cover'}} backgroundColor="#fff" key={index} noButton  content={data}/>


      ))}
            </div>
      </>

  )
}

export default ObjectInfo