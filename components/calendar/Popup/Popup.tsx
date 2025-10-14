import React from 'react'
import styles from "./Popup.module.scss"
import DatePicker from './DatePicker/DatePicker'


const Popup = () => {
    
  // do naprawy to że jak się klikine na kalendarz to się zamyka 
  return (
      <>
 
        <div
          className={`${styles.popup} `}
                    onClick={(e) => e.stopPropagation()}
        >
           
                    <DatePicker/>
       
        </div>

      </>
  )
}

export default Popup