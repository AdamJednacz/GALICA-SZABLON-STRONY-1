'use client'
import { useState } from "react"
import styles from "./Opinions.module.scss"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"

interface Opinion {
  text: string
  rating: number
}

const opinions: Opinion[] = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.",
    rating: 5,
  },
  {
    text: "Quis senectus neque dictum bibendum orci. Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc.",
    rating: 4,
  },
  {
    text: "Bardzo przyjemny pobyt! Obsługa świetna, pokój czysty i wygodny.",
    rating: 5,
  },
]

const Opinions = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? opinions.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === opinions.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.opinions}>
      <h2>Zobacz opinie naszych poprzednich gości</h2>

      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.arrow_1}`} onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className={styles.slider}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {opinions.map((opinion, idx) => (
              <div className={styles.card} key={idx}>
                <div className={styles.cardHeader}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <div className={styles.stars}>
                    {Array.from({ length: opinion.rating }).map((_, i) => (
                      <Image
                        key={i}
                        src="/star.svg"
                        alt="star"
                        width={24}
                        height={24}
                      />
                    ))}
                  </div>
                </div>
                <p>{opinion.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button  className={`${styles.arrow} ${styles.arrow_2}`} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Opinions
