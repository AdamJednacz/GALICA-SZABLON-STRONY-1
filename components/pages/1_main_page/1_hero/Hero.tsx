import Calendar from "../../../calendar/Calendar"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.background}>
    <div className={`container ${styles.hero}`}>
        <Calendar/>
    </div>
    </div>
  )
}

export default Hero