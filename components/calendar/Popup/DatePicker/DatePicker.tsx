'use client';
import React, { useContext,  useRef } from "react";
import styles from "./DatePicker.module.scss";
import { RangeContext } from "../../RageProvider";


const DAYS_OF_WEEK = ["Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sb.", "Niedz."];

const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const DatePicker = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const { range, setRange } = useContext(RangeContext);
  const pickerRef = useRef<HTMLDivElement>(null);

  const [monthLeft, monthRight] = [new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth() + 1, 1)];

  const isDisabled = (day: Date) => {
    const d = new Date(day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const selectDay = (day: Date) => {
    if (isDisabled(day)) return;

    if (!range.from || (range.from && range.to)) {
      setRange({ from: day, to: null });
    } else if (range.from && !range.to) {
      if (day < range.from) setRange({ from: day, to: range.from });
      else if (!range.from && !range.to){
        setRange({from:today,to:today})
      }
      else setRange({ from: range.from, to: day });
    }
  };

  const renderMonth = (month: Date) => {
    const days = getDaysInMonth(month.getFullYear(), month.getMonth());
    const firstDayWeek = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

    return (
      <div className={styles.month}>
        <div className={styles.weekdays}>{DAYS_OF_WEEK.map((d) => <div key={d}>{d}</div>)}</div>
        <div className={styles.days}>
          {Array(firstDayWeek === 0 ? 6 : firstDayWeek - 1).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
          {days.map((day) => {
            let selected = false;
            if (range.from && range.to) selected = day >= range.from && day <= range.to;
            else if (range.from && !range.to) selected = day.getTime() === range.from.getTime();

            const disabled = isDisabled(day);
            return (
              <div
                key={day.toDateString()}
                className={`${styles.day} ${selected ? styles.selected : ""} ${disabled ? styles.disabled : ""}`}
                onClick={() => selectDay(day)}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div ref={pickerRef} className={styles.datepicker}>
      <div className={styles.months}>
        {renderMonth(monthLeft)}
        {renderMonth(monthRight)}
      </div>
    </div>
  );
};

export default DatePicker;
