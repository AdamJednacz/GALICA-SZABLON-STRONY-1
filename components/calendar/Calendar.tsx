'use client'
import { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import styles from "./Calendar.module.scss";
import Image from "next/image";
const Calendar = () => {
  const [active, setActive] = useState<null | "arrival" | "departure">(null);
  const [peopleCount, setPeopleCount] = useState<number>(2); // początkowa liczba osób

  const arrivalRef = useRef<HTMLDivElement>(null);
  const departureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (active === "arrival" && arrivalRef.current && !arrivalRef.current.contains(event.target as Node)) ||
        (active === "departure" && departureRef.current && !departureRef.current.contains(event.target as Node))
      ) {
        setActive(null); // kliknięcie poza popup => zamknij
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  const incrementPeople = () => setPeopleCount(prev => prev + 1);
  const decrementPeople = () => setPeopleCount(prev => (prev > 1 ? prev - 1 : 1)); // min 1 osoba

  return (
    <div className={styles.calendar}>
      {/* Przyjazd */}
      <div
        className={styles.calendar_item}
        ref={arrivalRef}
        onClick={() => setActive(active === "arrival" ? null : "arrival")}
      >
        <div className={styles.calednar_item_container}>
               <p className={`${styles.calendar_item_text} ${styles.calendar_item_text_p}`}>
          Przyjazd
          </p>
          <label className={`${styles.calendar_item_text} ${styles.calendar_item_text_span}`}>
           
               Data przyjazdu
          </label>
     
        </div>
        <Image height={24} width={24} className={styles.icon} src="/calendar.png" alt="icon" />

        {active === "arrival" && (
          <div className={`${styles.popup} ${styles.popup_arival}`} onClick={(e) => e.stopPropagation()}>
            <p>📅 Tutaj będzie kalendarz dla przyjazdu</p>
          </div>
        )}
      </div>

      {/* Wyjazd */}
      <div
        className={styles.calendar_item}
        ref={departureRef}
        onClick={() => setActive(active === "departure" ? null : "departure")}
      >
        <div className={styles.calednar_item_container}>
      
          <p className={`${styles.calendar_item_text} ${styles.calendar_item_text_p}`}>
         Wyjazd
          </p>
              <label className={`${styles.calendar_item_text} ${styles.calendar_item_text_span}`}>
         
                  Data wyjazdu
          </label>
        </div>
        <Image width={24} height={24}className={styles.icon} src="/calendar.png" alt="icon" />

        {active === "departure" && (
          <div className={`${styles.popup} ${styles.popup_decapture}`} onClick={(e) => e.stopPropagation()}>
            <p>📅 Tutaj będzie kalendarz dla wyjazdu</p>
          </div>
        )}
      </div>

      {/* Kto */}
      <div className={styles.calendar_item}>
        <div className={styles.calednar_item_container}>
              <p className={`${styles.calendar_item_text} ${styles.calendar_item_text_p}`}>
      Kto
          </p>
          <label className={`${styles.calendar_item_text} ${styles.calendar_item_text_span}`}>
           
                   Ilość osób
          </label>
      
        </div>

        <div className={styles.people_counter}>
          <p className={styles.people_plus} onClick={incrementPeople}>+</p>
          <span className={styles.people_count}>{peopleCount}</span>
          <p className={styles.people_minus} onClick={decrementPeople}>-</p>
        </div>
      </div>

      <Button to="/" size="large" color="primary" rounded="rounded">
        Zarezerwuj
      </Button>
    </div>
  );
};

export default Calendar;
