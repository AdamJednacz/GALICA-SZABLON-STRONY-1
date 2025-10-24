"use client"

import Button from "../button/Button"
import styles from "./GalleryComponent.module.scss"
import Image from "next/image"
import React, { useState } from "react"

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
  noButton?: boolean
  className?: string
}

const GalleryComponent: React.FC<GalleryProps> = ({
  images,
  buttonText = "Zobacz więcej",
  buttonLink,
  buttonColor = "primary",
  buttonSize = "large",
  buttonRounded = "no-rounded",
  noButton = false,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null)

  const openModal = (image: GalleryItem) => {
    setActiveImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveImage(null)
  }

  return (
    <div className={`${styles.gallery} ${className}`}>
      <div className={`container ${styles.gallery_container}`}>
        {images.map((item, index) => (
          <div
            key={index}
            className={styles.image}
            onClick={() => openModal(item)}
            style={{ cursor: "pointer" }}
          >
            <Image src={item.src} alt={item.alt} fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {!noButton && buttonText && (
        <div className={styles.gallery_button}>
          <Button
            to={buttonLink}
            color={buttonColor}
            size={buttonSize}
            rounded={buttonRounded}
          >
            {buttonText}
          </Button>
        </div>
      )}

      {/* 🔥 Modal */}
      {isModalOpen && activeImage && (
        <div className={styles.modal_overlay} onClick={closeModal}>
          <div
            className={styles.modal_content}
            onClick={(e) => e.stopPropagation()} // zapobiega zamknięciu po kliknięciu wewnątrz
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              style={{ objectFit: "contain" }}
            />
            <button className={styles.close_button} onClick={closeModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryComponent
