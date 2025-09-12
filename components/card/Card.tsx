import Button from "../button/Button"
import styles from "./Card.module.scss"
import Image from "next/image"
import React from "react"

export interface CardContent {
  h2: string
  p: string
  buttonLink: string
  buttonText: string
  buttonColor: "primary" | "secondary" | "white"
  imgSrc: string
  imgAlt: string
  list?: string[]
}

export interface CardProps {
  rowReverse?: boolean
  content: CardContent
  backgroundColor?: string
  noButton?: boolean // 🔥 jeśli true, button się nie pokaże
}

const Card: React.FC<CardProps> = ({ rowReverse = false, content, backgroundColor, noButton }) => {
  const { h2, p, buttonLink, buttonColor, buttonText, imgSrc, imgAlt, list } = content

  return (
    <div
      className={`container ${styles.card_container} ${
        rowReverse ? styles.card_container_row_reverse : styles.card_container_row
      }`}
      style={{ backgroundColor }}
    >
      <div className={styles.card_text}>
        <h2>{h2}</h2>
        <p>{p}</p>

        {list && list.length > 0 && (
          <ul className={styles.card_list}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {!noButton && (
          <Button to={buttonLink} size="large" color={buttonColor} rounded="rounded">
            {buttonText}
          </Button>
        )}
      </div>

      <div className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  )
}

export default Card
