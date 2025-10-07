'use client'
import { useState } from "react";
import Calendar, { DateType } from "../../../calendar/Calendar"
import Popup from "../../../calendar/Popup/Popup"
import styles from "./Hero.module.scss"

const Hero = () => {
  const [active, setActive] = useState<DateType>(null);

  return (
    <div className={styles.hero}>
      <div className={`container ${styles.hero_container}`}>
        <h1 className={styles.hero_container_h1}>
          Komfort i Widok: Twoje Miejsce na Ucieczkę od <br />
          Codzienności.
        </h1>

        <Calendar active={active} setActive={setActive} />

        {active && <Popup />}
      </div>
    </div>
  );
};

export default Hero;
