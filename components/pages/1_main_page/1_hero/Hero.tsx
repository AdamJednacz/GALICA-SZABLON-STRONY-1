import Calendar from "../../../calendar/Calendar"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={`container ${styles.hero_container}`}>
        <Calendar/>
    </div>
    </div>
  )
}

export default Hero