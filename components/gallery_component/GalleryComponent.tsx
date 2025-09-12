import Button from "../button/Button"
import styles from "./GalleryComponent.module.scss"
import Image from "next/image"
import React from "react"

export interface GalleryItem {
  src: string
  alt: string
}

export interface GalleryProps {
  images: GalleryItem[]
  buttonText?: string
  buttonLink?: string
  buttonColor?: "primary" | "secondary" | "white"
  buttonSize?: "small" | "medium" | "large"
  buttonRounded?: "rounded" | "no-rounded"
  noButton?: boolean // 🔥 jeśli true, button nie będzie renderowany
  className?: string
}

const GalleryComponent: React.FC<GalleryProps> = ({
  images,
  buttonText = "Zobacz więcej",
  buttonLink,
  buttonColor = "secondary",
  buttonSize = "large",
  buttonRounded = "rounded",
  noButton = false,
  className = "",
}) => {
  return (
    <div className={`${styles.gallery} ${className}`}>
      <div className={`container ${styles.gallery_container}`}>
        {images.map((item, index) => (
          <div key={index} className={styles.image}>
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {!noButton && buttonText && (
        <Button
          to={buttonLink}
          color={buttonColor}
          size={buttonSize}
          rounded={buttonRounded}
        >
          {buttonText}
        </Button>
      )}
    </div>
  )
}

export default GalleryComponent
