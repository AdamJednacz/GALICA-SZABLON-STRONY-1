import React, { use } from 'react'
import Card, { CardContent } from '../../../../components/card/Card'
import styles from "./page.module.scss"
import GalleryComponent, { GalleryItem } from '../../../../components/gallery_component/GalleryComponent'
import { notFound } from 'next/navigation'


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
const roomsData: Record<string, CardContent> = {
  "pokoj-1": {
    h2: "Pokój 1-osobowy",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.feugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Pokój zawiera",
     buttonLink: "/zarezerwuj",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_1.jpg",
    imgAlt: "Zdjęcie pokoju 1",
    list: ["Klimatyzacja", "Biurko", "TV"]
  },
  "pokoj-2": {
    h2: "Pokój 2-osobowy",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velitfeugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Pokój zawiera.",
    buttonLink: "/zarezerwuj",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_2.jpg",
    imgAlt: "Zdjęcie pokoju 2",
    list: ["Klimatyzacja", "Stolik i krzesło", "Lodówka", "Balkon"]
  },
  "pokoj-3": {
    h2: "Pokój 3-osobowy",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velitfeugiat amet purus cras sit velit. Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Pokój zawiera.",
     buttonLink: "/zarezerwuj",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_3.jpg",
    imgAlt: "Zdjęcie pokoju 3",
    list: ["Aneks kuchenny", "Balkon", "TV", "Wi-Fi"]
  }
}


const Page = ({
  params,
}: {
  params: Promise<{ room: string }>
})=> {
  const {room} = use(params)
  const content = roomsData[room]

  if (!content) {
    notFound()
  }
  return(
    <section className={styles.room_site}>
        <Card imgStyles={{height:"auto"}} backgroundColor='#fff' content={content} />
        
<GalleryComponent
  images={images}
  noButton
/>
    </section>
  )
}
export default Page