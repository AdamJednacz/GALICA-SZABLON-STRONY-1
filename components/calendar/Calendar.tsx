"use client";
import { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import styles from "./Calendar.module.scss";
import Image from "next/image";
import PeopleCount from "./PeopleCount/PeopleCount";
import CalendarItem from "./CalendarItem/CalendarItem";

export type DateType = null | "arrival" | "departure";
type CalendarProps = {
  active: DateType;
  setActive: React.Dispatch<React.SetStateAction<DateType>>; // <--- tutaj
};
const Calendar = ({ active, setActive }: CalendarProps) => {
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const dateTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dateTypeRef.current && !dateTypeRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActive]);

  // do naprawy to że jak się klikine na kalendarz to się zamyka 

  const incrementPeople = () => setPeopleCount((prev) => prev + 1);
  const decrementPeople = () => setPeopleCount((prev) => (prev > 1 ? prev - 1 : 1));

const handleSetActive = (dateType: DateType) => {
  setActive((prev: DateType) => (prev === dateType ? null : dateType));
};

  return (
    <div className={styles.calendar}>
      <div ref={dateTypeRef}>
        <CalendarItem
          dateType="arrival"
          handleSetActive={handleSetActive}
          p_text="Przyjazd"
          description="Data przyjazdu"
        />
      </div>
      <div ref={dateTypeRef}>
        <CalendarItem
          dateType="departure"
          handleSetActive={handleSetActive}
          p_text="Wyjazd"
          description="Data wyjazdu"
        />
      </div>

      <PeopleCount
        incrementPeople={incrementPeople}
        decrementPeople={decrementPeople}
        peopleCount={peopleCount}
      />

      <Button to="/" size="large" color="primary" rounded="rounded">
        Zarezerwuj
      </Button>
    </div>
  );
};

export default Calendar;
