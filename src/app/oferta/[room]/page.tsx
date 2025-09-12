import React from 'react'
import Card, { CardContent } from '../../../../components/card/Card'
import styles from "./page.module.scss"
import GalleryComponent, { GalleryItem } from '../../../../components/gallery_component/GalleryComponent'

const content :CardContent = {
    h2: "Pokoje 2-osobowe",
    p: "    Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque  dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci.",
    buttonLink: "/rooms",
    buttonText: "Zarezerwuj pokój",
    buttonColor:"secondary",
    imgSrc: "/pokoj_2.jpg",
    imgAlt: "Zdjęcie pokoju",
    list:[
        "Klimatyzacja",
        "Stolik i krzesło",
        "Lodówka",
        "Aneks kuchenny",
        "Balkon"
    ]
  }
const images :GalleryItem[] = [
    {
        src:'/gallery_1.jpg',
        alt:'Zdjęcie pokoju 1'
    },
      {
        src:'/gallery_2.jpg',
        alt:'Zdjęcie pokoju 2'
    },
      {
        src:'/gallery_3.jpg',
        alt:'Zdjęcie pokoju 3'
    },
      {
        src:'/gallery_4.jpg',
        alt:'Zdjęcie pokoju 4'
    },
      {
        src:'/gallery_5.jpg',
        alt:'Zdjęcie pokoju 5'
    },
      {
        src:'/gallery_6.jpg',
        alt:'Zdjęcie pokoju 6'
    },
      {
        src:'/gallery_7.jpg',
        alt:'Zdjęcie pokoju 7'
    },
      {
        src:'/gallery_8.jpg',
        alt:'Zdjęcie pokoju 8'
    },
    
]

const page = () => {
  return (
    <section className={styles.room_site}>
        <Card backgroundColor='#fff' content={content} />
        
<GalleryComponent
  images={images}
  noButton
/>
    </section>
  )
}

export default page