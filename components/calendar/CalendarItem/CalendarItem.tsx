'use client'
import React, { useState } from 'react'
import styles from "../Calendar.module.scss"
import Image from 'next/image'
import { DateType } from '../Calendar'
import DatePicker from 'react-datepicker'


export interface CalednarItemType {
    dateType : DateType;
  
    handleSetActive: (type: DateType) => void;
    p_text : string;
    description :string;
    
}


const CalendarItem:React.FC<CalednarItemType> = ({dateType , handleSetActive,p_text,description }) => {
  
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
   <div
        className={styles.calendar_item}
        onClick={()=> handleSetActive(dateType)}
      >
        <div className={styles.calednar_item_container}>
               <p className={`${styles.calendar_item_text} ${styles.calendar_item_text_p}`}>
          {p_text}
          </p>
          <label className={`${styles.calendar_item_text} ${styles.calendar_item_text_span}`}>
           
                 {description}
          </label>
     
        </div>
        <Image height={24} width={24} className={styles.icon} src="/calendar.png" alt="icon" />

      </div>
  )
}

export default CalendarItem