import ContactComponent from "../../../contact_component/ContactComponent"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <section className={styles.contact}>
    <ContactComponent h2="Potrzebujesz się skontaktować?"/>
    </section>
  )
}

export default Contact