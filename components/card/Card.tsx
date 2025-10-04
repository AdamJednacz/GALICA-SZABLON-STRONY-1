import Button from "../button/Button"
import styles from "./Card.module.scss"
import Image from "next/image"
import React from "react"

export interface CardContent {
  h2: string
  p: string
  buttonLink?: string
  buttonText?: string
  buttonColor?: "primary" | "secondary" | "white"
  imgSrc: string
  imgAlt: string
  list?: string[]

}

export interface CardProps {
  content: CardContent
  backgroundColor?: string
  noButton?: boolean
  className?: string // ✨ nowa opcja na własną klasę
  style?: React.CSSProperties // ✨ inline style
    imgStyles?: React.CSSProperties 
}

const Card: React.FC<CardProps> = ({ content, backgroundColor, noButton, className = "", style ,imgStyles}) => {
  const { h2, p, buttonLink, buttonColor, buttonText, imgSrc, imgAlt, list } = content

  return (
    <div
      className={`container ${styles.card_container} ${className}`}
      style={{ ...style }}
    >
      <div className={styles.card_text}>
        <h2 className={styles.card_text_h2}>{h2}</h2>
        <p>{p}</p>

        {list && list.length > 0 && (
          <ul className={styles.card_list}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {!noButton && (
          <Button to={buttonLink} size="large" color={buttonColor ?? "primary"} rounded="no-rounded">
            {buttonText}
          </Button>
        )}
      </div>

      <div style={{...imgStyles}} className={styles.image}>
        <Image objectFit="cover"  src={imgSrc} alt={imgAlt} fill  />
      </div>
    </div>
  )
}

export default Card
