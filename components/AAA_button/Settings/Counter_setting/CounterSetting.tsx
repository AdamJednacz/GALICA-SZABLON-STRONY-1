"use client"
import Image from "next/image";
import styles from "./CounterSetting.module.scss"
import up from "../../Icons/up.svg";
import bottom from "../../Icons/bottom.svg";
import { useEffect, useState } from "react";
type CounterKeys = "fontSize" | "lineHeight" | "paragraphSpace" | "letterSpacing" | "wordSpace";
export interface CounterSettingType {
   id: CounterKeys;
  src: string;

  description: string;
  value: number;
  onChange: (id: CounterKeys, newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
  tabIndex:number;
}

const CounterSetting: React.FC<CounterSettingType> = ({
  id,
  src,

  description,
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  tabIndex
}) => {

  const [mounted, setMounted] = useState(false);
  const increase = () => {
    const newValue = Math.min(value + step, max);
    onChange(id, Number(newValue.toFixed(2))); // żeby np. 1.7999999 → 1.8
  };

  const decrease = () => {
    const newValue = Math.max(value - step, min);
    onChange(id, Number(newValue.toFixed(2)));
  };

  useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <div className={styles.counter_setting}>
       <div className={styles.counter_setting_container}>
      <Image width={24} height={24} className={styles.counter_setting_icon} src={src} alt="" />
      <div className={styles.counter_setting_value}>{value}</div>
      <button tabIndex={tabIndex} className={styles.counter_setting_button} onClick={increase}>
        <Image width={24} height={24} className={styles.counter_setting_button_icon} src={up} alt="" />
      </button>
      <button tabIndex={tabIndex} className={styles.counter_setting_button} onClick={decrease}>
        <Image width={24} height={24} className={styles.counter_setting_button_icon} src={bottom} alt="" />
      </button>
     </div>
      <p className={styles.counter_setting_description}>{description}</p>
    </div>
  );
};

export default CounterSetting;
