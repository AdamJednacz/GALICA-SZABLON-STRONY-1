import Calendar from "../../../calendar/Calendar"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={`container ${styles.hero_container}`}>
      <h1 className={styles.hero_container_h1}>Komfort i Widok: Twoje Miejsce na Ucieczkę od <br/>Codzienności.</h1>
        <Calendar/>
    </div>
    </div>
  )
}

export default Hero