'use client'

import React, { useState } from 'react';
import styles from './DatePicker.module.scss';

type DateRange = {
  from: Date | null;
  to: Date | null;
};

const DAYS_OF_WEEK = ['Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sb.', 'Niedz.'];

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
  const [monthLeft, setMonthLeft] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [monthRight, setMonthRight] = useState(new Date(today.getFullYear(), today.getMonth() + 1, 1));
  const [range, setRange] = useState<DateRange>({ from: null, to: null });
  const [dragging, setDragging] = useState(false);
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const disabledDays = [
    new Date(2025, 9, 10),
  ];
  //naprawić wybieranie dat
  //dodać state wybranej daty
  //przekazać do linku silnika
  
  const isDisabled = (day: Date) => disabledDays.some(d => d.toDateString() === day.toDateString());

  const startDrag = (day: Date) => {
    if (isDisabled(day)) return;
    setDragging(true);
    setRange({ from: day, to: day });
  };

  const updateDrag = (day: Date) => {
    if (!dragging || isDisabled(day)) return;
    if (range.from) {
      if (day < range.from) setRange({ from: day, to: range.from });
      else setRange({ from: range.from, to: day });
    }
  };

  const endDrag = () => setDragging(false);

  const renderMonth = (month: Date) => {
    const days = getDaysInMonth(month.getFullYear(), month.getMonth());
    const firstDayWeek = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

    return (
      <div className={styles.month}>
  
        <div className={styles.weekdays}>
          {DAYS_OF_WEEK.map(d => <div key={d}>{d}</div>)}
        </div>
        <div className={styles.days}>
          {Array(firstDayWeek === 0 ? 6 : firstDayWeek - 1).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
          {days.map(day => {
            const selected = range.from && range.to && day >= range.from && day <= range.to;
            const disabled = isDisabled(day);
            return (
              <div
                key={day.toDateString()}
                className={`${styles.day} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
                onMouseDown={() => startDrag(day)}
                onMouseEnter={() => updateDrag(day)}
                onMouseUp={endDrag}
              >
                {day.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const prevMonth = () => {
    setMonthLeft(new Date(monthLeft.getFullYear(), monthLeft.getMonth() - 1, 1));
    setMonthRight(new Date(monthRight.getFullYear(), monthRight.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setMonthLeft(new Date(monthLeft.getFullYear(), monthLeft.getMonth() + 1, 1));
    setMonthRight(new Date(monthRight.getFullYear(), monthRight.getMonth() + 1, 1));
  };

  return (
    <div className={styles.datepicker}>
 <div className={styles.nav}>
  <button onClick={prevMonth}><svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"></path></svg></button>
  <span>{capitalize(monthLeft.toLocaleString('pl-PL', { month: 'long', year: 'numeric' }))}</span>
  <span></span>
  <span>{capitalize(monthRight.toLocaleString('pl-PL', { month: 'long', year: 'numeric' }))}</span>
  <button onClick={nextMonth}><svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"></path></svg></button>
</div>
      <div className={styles.months}>
        {renderMonth(monthLeft)}
        {renderMonth(monthRight)}
      </div>
      {range.from && range.to && (
        <p>Wybrany zakres: {range.from.toLocaleDateString()} - {range.to.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default DatePicker;
