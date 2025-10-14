"use client";

import styles from "../Calendar.module.scss";
import Image from "next/image";

export interface CalednarItemType {
  handleSetActive: () => void;
  p_text: string;
  description: string;
}

const CalendarItem: React.FC<CalednarItemType> = ({
  handleSetActive,
  p_text,
  description,
}) => {
  return (
    <div className={styles.calendar_item} onClick={() => handleSetActive()}>
      <div className={styles.calednar_item_container}>
        <p
          className={`${styles.calendar_item_text} ${styles.calendar_item_text_p}`}
        >
          {p_text}
        </p>
        <label
          className={`${styles.calendar_item_text} ${styles.calendar_item_text_span}`}
        >
          {description}
        </label>
      </div>
      <Image
        height={24}
        width={24}
        className={styles.icon}
        src="/calendar.png"
        alt="icon"
      />
    </div>
  );
};

export default CalendarItem;
