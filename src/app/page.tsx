
import styles from "./page.module.css";

import MainPage from "../../components/pages/1_main_page/MainPage";

export default function Home() {
  return (
    <div className={styles.page}>
        <MainPage/>
    </div>
  );
}
