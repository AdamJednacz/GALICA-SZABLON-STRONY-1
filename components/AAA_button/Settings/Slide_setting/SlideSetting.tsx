import Image from "next/image";
import styles from "./SlideSetting.module.scss";
type SlideKeys =
  | "readableFont"
  | "dyslectickFont"
  | "textLeft"
  | "textMid"
  | "textRight"
  | "strongContrast"
  | "inversion"
  | "monochrome"
  | "highContrast"
  | "highSaturation"
  | "lowSaturation"
  | "helpLine"
  | "helpMask"
  | "offAnimation"
  | "mute"
  | "blackCursor"
  | "whiteCursor";


export interface SlideSettingType {
  id: SlideKeys;
  src: string;
 
  description: string;
  value: boolean;
  onChange: (id: SlideKeys, newValue: boolean) => void;
  tabIndex: number;
}

const SlideSetting: React.FC<SlideSettingType> = ({ id, src,  description, value, onChange ,tabIndex}) => {
  return (
    <div className={styles.slide_setting}>
      <Image width={24} height={24} className={styles.slide_setting_icon} src={src} alt="" />

      <label
           tabIndex={tabIndex}
        className={styles.slide_setting_slide}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onChange(id, !value); // toggle
          }
        }}
      >
        <input
         tabIndex={tabIndex}
          className={styles.slide_setting_slide_chceckbox}
          type="checkbox"
          checked={value}
          onChange={() => onChange(id, !value)} // toggle
        />
        <span className={styles.slide_setting_slide_slider}></span>
      </label>

      <p className={styles.slide_setting_description}>{description}</p>
    </div>
  );
};

export default SlideSetting;
