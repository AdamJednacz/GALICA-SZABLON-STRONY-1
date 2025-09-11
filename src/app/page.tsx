import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/pages/1_main_page/1_hero/Hero";
import MainPage from "../../components/pages/1_main_page/MainPage";

export default function Home() {
  return (
    <div className={styles.page}>
        <MainPage/>
    </div>
  );
}
