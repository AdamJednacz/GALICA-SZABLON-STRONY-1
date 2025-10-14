import React from "react";
import styles from "./BookingEngine.module.scss";

const BookingEngine = ({ url }: { url: string }) => {
  return (
    <div className={styles.booking_engine}>
      <iframe
        src={url}
        className={styles.booking_engine_iframe}
        loading="lazy"
      />
    </div>
  );
};

export default BookingEngine;
