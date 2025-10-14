'use client'
import { useEffect, useRef, useState } from "react";
import Calendar from "../../../calendar/Calendar"
import Popup from "../../../calendar/Popup/Popup"
import styles from "./Hero.module.scss"
import { RangeProvider } from "../../../calendar/RageProvider";

const Hero = () => {
  const [active, setActive] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (!calendarRef.current) return;

    // Sprawdzenie, czy kliknięty element NIE jest w calendarRef
    if (!calendarRef.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.hero_container}`}>
        <h1 className={styles.hero_container_h1}>
          Komfort i Widok: Twoje Miejsce na Ucieczkę od <br />
          Codzienności.
        </h1>
        <RangeProvider>
          <div ref={calendarRef}>
        <Calendar active={active} setActive={setActive} />

        {active && <Popup />}
        </div>
        </RangeProvider>
      </div>
    </div>
  );
};

export default Hero;
