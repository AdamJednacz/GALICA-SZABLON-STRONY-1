
import GalleryComponent, { GalleryItem } from "../../../gallery_component/GalleryComponent"
import styles from "./Gallery.module.scss"

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

const Gallery = () => {
  return (
    <section className={styles.gallery}>
  
<GalleryComponent
  images={images}
  buttonText="Zobacz więcej"
  buttonLink="/galeria"
  buttonColor="primary"
/>
    </section>
  )
}

export default Gallery