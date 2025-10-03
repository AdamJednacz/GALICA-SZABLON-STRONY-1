
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <main className={styles.hero}>
        <div className={`container ${styles.hero_container}`}>
            <h1>Tutaj znajdziesz odpowiedzi na <br/>najczęściej zadawane pytania.</h1>
        </div>
    </main>
  )
}

export default Hero