"use client"
import { useState } from "react";
import styles from "./FAQ.module.scss";
import Icon from "./Icon";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const data = [
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      question: "Lorem ipsum ?",
      answer: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <section className={styles.faq}>
        <ul className={`container ${styles.faq_container}`}>
          {data.map((item, index) => (
            <li
          
              key={index}

 
             
              className={`${styles.question_card} ${
                openIndex === index ? styles.active : ""
              }`}
      
              onClick={() => toggleFAQ(index)}
            >
       
                <p className={styles.question_text}>{item.question}</p>
                <Icon         className={`${styles.icon} ${
                    openIndex === index ? styles.open : ""
                  }`}/>
           
           
              <div
                className={`${styles.answer} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FAQ;
