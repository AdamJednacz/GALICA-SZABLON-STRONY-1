'use client';
import React, { useState, useContext } from "react";
import Button from "../button/Button";
import PeopleCount from "./PeopleCount/PeopleCount";
import CalendarItem from "./CalendarItem/CalendarItem";
import styles from "./Calendar.module.scss";
import { RangeContext } from "./RageProvider";


type CalendarProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const formatDate = (date: Date | null) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Calendar = ({ active, setActive }: CalendarProps) => {
  const [peopleCount, setPeopleCount] = useState(2);
  const { range } = useContext(RangeContext);

  const incrementPeople = () => setPeopleCount((prev) => prev + 1);
  const decrementPeople = () => setPeopleCount((prev) => (prev > 1 ? prev - 1 : 1));
  const handleSetActive = () => setActive(!active);

  

  return (
    <div className={styles.calendar}>
      <CalendarItem  handleSetActive={handleSetActive} p_text="Przyjazd" description={`${range.from === null ? "Data przyjazdu"    : formatDate(range.from)}`} />
      <CalendarItem  handleSetActive={handleSetActive} p_text="Wyjazd" description={`${range.to === null ? "Data wyjazdu"   : formatDate(range.to) }`} />

      <PeopleCount incrementPeople={incrementPeople} decrementPeople={decrementPeople} peopleCount={peopleCount} />
{/* https://be.guestsage.com/pl/048bbae8-1844-4bfc-b70c-15b2b9762c80/offers?arrivalDate=${formatDate(range.from)}&departureDate=${formatDate(range.to)}&personsCount=${peopleCount} */}
 <Button
  to={`/zarezerwuj?arrivalDate=${formatDate(range.from)}&departureDate=${formatDate(range.to)}&personsCount=${peopleCount}`}
  size="large"
  color="primary"
  rounded="rounded"
>
  Zarezerwuj
</Button>
    </div>
  );
};

export default Calendar;
