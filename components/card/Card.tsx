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
}

const Card: React.FC<CardProps> = ({ content, backgroundColor, noButton, className = "", style }) => {
  const { h2, p, buttonLink, buttonColor, buttonText, imgSrc, imgAlt, list } = content

  return (
    <div
      className={`container ${styles.card_container} ${className}`}
      style={{ backgroundColor, ...style }}
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
          <Button to={buttonLink} size="large" color={buttonColor} rounded="no-rounded">
            {buttonText}
          </Button>
        )}
      </div>

      <div className={styles.image}>
        <Image src={imgSrc} alt={imgAlt} fill  />
      </div>
    </div>
  )
}

export default Card
