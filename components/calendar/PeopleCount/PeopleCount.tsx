
import styles_2 from "./PeopleCount.module.scss"
import styles_1 from "../Calendar.module.scss"
export interface PeopleCountState{
  
   peopleCount: number;
   incrementPeople: () => void;
  decrementPeople: () => void;
}

const PeopleCount :React.FC<PeopleCountState> = ({incrementPeople,peopleCount,decrementPeople}) => {
  return (
     <div className={styles_1.calendar_item}>
        <div className={styles_1.calednar_item_container}>
              <p className={`${styles_1.calendar_item_text} ${styles_1.calendar_item_text_p}`}>
      Kto
          </p>
          <label className={`${styles_1.calendar_item_text} ${styles_1.calendar_item_text_span}`}>
           
                   Ilość osób
          </label>
      
        </div>

        <div className={styles_2.people_counter}>
          <p className={styles_2.people_plus} onClick={incrementPeople}>+</p>
          <span className={styles_2.people_count}>{peopleCount}</span>
          <p className={styles_2.people_minus} onClick={decrementPeople}>-</p>
        </div>
      </div>

  )
}

export default PeopleCount