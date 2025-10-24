import Button from "../../../button/Button"

import styles from "./Rooms.module.scss"
import Image from "next/image"
const roomsContent = [
  {
    h3: "Pokój 1",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.",
    buttonLink: "oferta/pokoj-1",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_1.jpg",
    imgAlt: "Zdjęcie pokoju 1",

  },
  {
    h3: "Pokój 2",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.",
    buttonLink: "oferta/pokoj-2",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_2.jpg",
    imgAlt: "Zdjęcie pokoju 2",

  },
  {
    h3: "Pokój 3",
    p: "Lorem ipsum dolor sit amet consectetur. In placerat vel lectus quis nunc. Est tincidunt proin faucibus non lacus. Lacinia nunc ullamcorper feugiat amet purus cras sit velit.",
    buttonLink: "zarezerwuj",
    buttonText: "Zarezerwuj pokój",
    buttonColor: "primary",
    imgSrc: "/pokoj_3.jpg",
    imgAlt: "Zdjęcie pokoju 3",

  },
]

const Rooms = () => {
  return (
    <div className={`container ${styles.rooms}`}>
      {roomsContent.map((content, index) => (
    <div className={styles.room_card} key={index}>
  <h3 className={styles.room_card_h3}>{content.h3}</h3>

  <div className={styles.room_card_img}>
    <Image
      src={content.imgSrc}
      alt={content.imgAlt}
      fill
      style={{ objectFit: "cover" }}
    />
  </div>

  <p className={styles.room_card_p}>{content.p}</p>
  <Button
    icon="/arrow.svg"
    rounded="no-rounded"
    size="large"
    color="primary"
    to={content.buttonLink}
  >
    {content.buttonText}
  </Button>
</div>

      ))}
    </div>
  )
}

export default Rooms
