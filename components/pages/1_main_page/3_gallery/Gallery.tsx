import styles from "./Gallery.module.scss"
import Image from "next/image"
const data = [
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
        <div className={`container ${styles.gallery_container}`}>
            {
                data.map((item ,index)=>(
                    <div key={index} className={styles.image}>
                    <Image objectFit="cover" fill key={index} src={item.src} alt={item.alt}/>
                    </div>
                ))

            }
        </div>
    </section>
  )
}

export default Gallery