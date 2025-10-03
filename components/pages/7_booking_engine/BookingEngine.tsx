import React from 'react'

import styles from "./BookingEngine.module.scss"
const BookingEngine = () => {
  return (
    <div className={styles.booking_engine}>
    <iframe
      src="https://be.guestsage.com/pl/048bbae8-1844-4bfc-b70c-15b2b9762c80"
    className={styles.booking_engine_iframe}
    />
    </div>
  )
}

export default BookingEngine
