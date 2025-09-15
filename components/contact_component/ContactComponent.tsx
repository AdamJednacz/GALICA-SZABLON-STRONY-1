import styles from "./ContactComponent.module.scss"
import Image from "next/image"

export interface ComponentProps {
  h2: string
}

const data = [
  {
    icon: {
      src: "/apartment.svg",
      alt: "Ikona apartamentu",
    },
    text: "Nazwa obiektu",
  },
  {
    icon: {
      src: "/phone.svg",
      alt: "Ikona telefonu",
    },
    text: "+48 123 456 789",
  },
  {
    icon: {
      src: "/mail.svg",
      alt: "Ikona Maila",
    },
    text: "obiekt@mail.pl",
  },
  {
    icon: {
      src: "/location.svg",
      alt: "Ikona Lokacji",
    },
    text: "ul. Harenda 15 B, Zakopane",
  },
]

const ContactComponent: React.FC<ComponentProps> = ({ h2 }) => {
  return (
    <div className={`container ${styles.contact_container}`}>
      <h2 className={styles.contact_container_h2}>{h2}</h2>
        <div className={styles.contact_items_container}>
        {data.map((item, index) => (
          <div key={index} className={styles.contact_item}>
            <div className={styles.contact_item_icon}>
            <Image
              src={item.icon.src}
              alt={item.icon.alt}
              width={48}
              height={48}
            />
            </div>
            <span>{item.text}</span>
          </div>
        ))}
 </div>
    </div>
  )
}

export default ContactComponent
