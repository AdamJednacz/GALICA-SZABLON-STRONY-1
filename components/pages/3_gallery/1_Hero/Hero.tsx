
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <main className={styles.hero}>
        <div className={`container ${styles.hero_container}`}>
            <h1 className={styles.hero_container_h1}>Zobacz jak wygląda nasz obiekt i <br/>co możesz w nim znaleźć</h1>
        </div>
    </main>
  )
}

export default Hero