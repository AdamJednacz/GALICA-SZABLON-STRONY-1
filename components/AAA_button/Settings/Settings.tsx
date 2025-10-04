import { useEffect, useState } from "react";
import CounterSetting from "./Counter_setting/CounterSetting";
import styles from "./Settings.module.scss";
import SlideSetting from "./Slide_setting/SlideSetting";
import { useAccessibility } from "../context/AccessibilityContext";

import AnimationIcon from "../Icons/animation_icon.svg";
import TextSizeIcon from "../Icons/text_size_icon.svg";
import LineHeightIcon from "../Icons/line_height_icon.svg";
import ParagraphSpaceIcon from "../Icons/p_space_icon.svg";
import LetterSpacingIcon from "../Icons/letter_spacing_icon.svg";
import WordSpaceIcon from "../Icons/word_space_icon.svg";
import ReadableFontIcon from "../Icons/readable_font_icon.svg";
import DyslectickFontIcon from "../Icons/dyslectick_font_icon.svg";
import TextLeftIcon from "../Icons/left_text_icon.svg";
import TextMidIcon from "../Icons/mid_text_icon.svg";
import TextRightIcon from "../Icons/right_text_icon.svg";
import StrongContrastIcon from "../Icons/strong_contrast_icon.svg";
import InversionIcon from "../Icons/inversion_icon.svg";
import MonochromeIcon from "../Icons/monochrome_icon.svg";
import HighContrastIcon from "../Icons/high_contrast_icon.svg";
import HighSaturationIcon from "../Icons/high_saturation_icon.svg";
import LowSaturationIcon from "../Icons/low_saturation_icon.svg";
import HelpLineIcon from "../Icons/help_line_icon.svg";
import HelpMaskIcon from "../Icons/help_mask_icon.svg";
import BlackCursorIcon from "../Icons/black_cursor_icon.svg";
import WhiteCursorIcon from "../Icons/white_cursor_icon.svg";

interface SettingsProps {
  open: boolean;
  onClose: () => void;
}
type CounterState = {
        fontSize:number,
      lineHeight: number,
      paragraphSpace: number,
      letterSpacing: number,
      wordSpace: number,
}
type SlidesState = {
  strongContrast: boolean;
  inversion: boolean;
  monochrome: boolean;
  highContrast: boolean;
  highSaturation: boolean;
  lowSaturation: boolean;
  textLeft: boolean;
  textMid: boolean;
  textRight: boolean;
  readableFont: boolean;
  dyslectickFont: boolean;
  blackCursor: boolean;
  whiteCursor: boolean;
      helpLine: boolean,
      helpMask: boolean,
offAnimation:boolean,
  mute: boolean;
};

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  const { setAnimationsOff } = useAccessibility();
  const [isMobile, setIsMobile] = useState(false);
 const [counters, setCounters] = useState<CounterState>(() => {
    if (typeof window === "undefined") return {
      fontSize: 16,
      lineHeight: 1.5,
      paragraphSpace: 0,
      letterSpacing: 0,
      wordSpace: 0,
    };
    const saved = localStorage.getItem("accessibilitySettings");
    return saved ? JSON.parse(saved).counters : {
      fontSize: 16,
      lineHeight: 1.5,
      paragraphSpace: 0,
      letterSpacing: 0,
      wordSpace: 0,
    };
  });

  const [slides, setSlides] = useState<SlidesState>(() => {
    if (typeof window === "undefined") return {
      readableFont: false,
      dyslectickFont: false,
      textLeft: false,
      textMid: false,
      textRight: false,
      strongContrast: false,
      inversion: false,
      monochrome: false,
      highContrast: false,
      highSaturation: false,
      lowSaturation: false,
      helpLine: false,
      helpMask: false,
      offAnimation: false,
      mute: false,
      blackCursor: false,
      whiteCursor: false,
    };
    const saved = localStorage.getItem("accessibilitySettings");
    return saved ? JSON.parse(saved).slides : {
      readableFont: false,
      dyslectickFont: false,
      textLeft: false,
      textMid: false,
      textRight: false,
      strongContrast: false,
      inversion: false,
      monochrome: false,
      highContrast: false,
      highSaturation: false,
      lowSaturation: false,
      helpLine: false,
      helpMask: false,
      offAnimation: false,
      mute: false,
      blackCursor: false,
      whiteCursor: false,
    };
  });

  // 🔹 Auto-save do localStorage przy każdej zmianie
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem(
      "accessibilitySettings",
      JSON.stringify({ counters, slides })
    );
  }, [counters, slides]);




  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1381);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleSlideChange = (id: keyof typeof slides,  newValue: boolean) => {
    const exclusiveFilters: (keyof typeof slides)[] = [
      "strongContrast",
      "inversion",
      "monochrome",
      "highContrast",
      "highSaturation",
      "lowSaturation",
    ];

    if (["textLeft", "textMid", "textRight"].includes(id) && newValue) {
      setSlides((prev) => ({
        ...prev,
        textLeft: id === "textLeft",
        textMid: id === "textMid",
        textRight: id === "textRight",
      }));
      return;
    }

    // grupy wykluczające się (filtry)
    if (exclusiveFilters.includes(id)) {
      setSlides((prev) => {
        const newSlides = { ...prev };
        exclusiveFilters.forEach((filter) => {
          newSlides[filter] = filter === id ? newValue : false;
        });
        return newSlides;
      });
      return;
    }
    if(["readableFont","dyslectickFont"].includes(id) && newValue){
         setSlides((prev) => ({
      ...prev,
      readableFont: id === "readableFont",
      dyslectickFont: id === "dyslectickFont",
    }));
    return;
    }

     if (["blackCursor", "whiteCursor"].includes(id) && newValue) {
    setSlides((prev) => ({
      ...prev,
      blackCursor: id === "blackCursor",
      whiteCursor: id === "whiteCursor",
    }));
    return;
  }
    // pozostałe opcje
    setSlides((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

   

  const handleCounterChange = (id: keyof typeof counters, newValue: number) => {
    setCounters((prev) => ({
      ...prev,
      [id]: newValue <= 0 ? 0 : newValue,
    }));
  };

  // 🔹 Ustawianie zmiennych CSS na podstawie slides
  useEffect(() => {
    const root = document.documentElement;

    // czcionki
    if (slides.readableFont) {
      root.style.setProperty("--app-font-family", "Arial, sans-serif");
      console.log(123)
    } else if (slides.dyslectickFont) {
      root.style.setProperty("--app-font-family", '"OpenDyslexic", Arial, sans-serif');
    
    } else {
      root.style.removeProperty("--app-font-family");
    }

    // wyrównanie tekstu
    if (slides.textLeft) {
      root.style.setProperty("--app-text-align", "left");
    } else if (slides.textMid) {
      root.style.setProperty("--app-text-align", "center");
    } else if (slides.textRight) {
      root.style.setProperty("--app-text-align", "right");
    } else {
      root.style.removeProperty("--app-text-align");
    }

    // 🔹 domyślne zmienne kolorów (LIGHT THEME)
    root.style.setProperty("--Fonts-Light", "#fff");
    root.style.setProperty("--Fonts-Paragraph", "#111418");
    root.style.setProperty("--Fonts-Dark", "#03021e");
    root.style.setProperty("--Fonts-Grey", "#99B2D6");
    root.style.setProperty("--Primary-Default", "#1b53a5");
    root.style.setProperty("--Primary-Disabled", "#99B2D6");
    root.style.setProperty("--System-Colors-System-Light", "#fff");
    root.style.setProperty("--System-Colors-System-Dark", "#d9d9d9");
    root.style.setProperty("--System-Colors-BG", "#f7f7f7"); // ⬅ jedno źródło tła
    root.style.setProperty("--Primary-Default-Slide", "#1b53a5"); // ⬅ jedno źródło tła
    root.style.setProperty("--Cursor","url('./Icons/black_cursor_icon.svg') 0 0,auto");
   root.style.setProperty("--Calendar-BG","#fff")
    if (slides.strongContrast) {
      root.style.setProperty("--Fonts-Light", "#000");
      root.style.setProperty("--Fonts-Paragraph", "yellow");
      root.style.setProperty("--Fonts-Dark", "#000");
      root.style.setProperty("--Fonts-Grey", "#886900");
      root.style.setProperty("--Primary-Default", "yellow");
      root.style.setProperty("--Primary-Disabled", "#886900");
      root.style.setProperty("--System-Colors-System-Light", "yellow");
      root.style.setProperty("--System-Colors-System-Dark", "#000");
      root.style.setProperty("--System-Colors-BG", "#0d0800");
      root.style.setProperty("--Calendar-BG","#000")
      root.style.removeProperty("--app-filter");
       root.style.setProperty("--Primary-Default-Slide", "#000");
    } else if (slides.inversion) {
      root.style.setProperty("--app-filter", "invert(100%)");
    } else if (slides.monochrome) {
      root.style.setProperty("--app-filter", "grayscale(100%)");
    } else if (slides.highContrast) {
      root.style.setProperty("--app-filter", "contrast(200%)");
    } else if (slides.highSaturation) {
      root.style.setProperty("--app-filter", "saturate(200%)");
    } else if (slides.lowSaturation) {
      root.style.setProperty("--app-filter", "saturate(50%)");
    } else {
      root.style.removeProperty("--app-filter");
    }

    // animacje
    if (slides.offAnimation) {
      document.body.classList.add("no-animations");
      setAnimationsOff(true);
    } else {
      document.body.classList.remove("no-animations");
      setAnimationsOff(false);
    }

    // linia pomocnicza / maska
    if (slides.helpLine) {
      document.body.classList.add("help-line-cursor");
    } else {
      document.body.classList.remove("help-line-cursor");
    }
    if (slides.helpMask) {
      document.body.classList.add("help-mask");
    } else {
      document.body.classList.remove("help-mask");
    }


    if(slides.blackCursor){
          document.body.classList.add("big_black_cursor");
          document.body.classList.remove("big_white_cursor");
    }else if(slides.whiteCursor) {
     document.body.classList.add("big_white_cursor");
          document.body.classList.remove("big_black_cursor");
   
    }else{
    document.body.classList.remove("big_white_cursor");
        document.body.classList.remove("big_black_cursor");
  }
  

  }, [slides,setAnimationsOff]);

useEffect(() => {
  const root = document.documentElement;

  if (!slides.helpLine) {
    root.style.removeProperty('--mouse-x');
    root.style.removeProperty('--mouse-y');
    return;
  }

  document.body.classList.add("help-line-cursor");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  const speed = 0.1; // 0 < speed < 1, im mniejsze, tym płynniej

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);

  const animate = () => {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    // kursor na środku linii
    root.style.setProperty('--mouse-x', `${currentX - 250}px`); // 500px szerokości, dzielimy na 2
    root.style.setProperty('--mouse-y', `${currentY - 5}px`);   // 10px wysokości, dzielimy na 2

    requestAnimationFrame(animate);
  };

  const animationFrame = requestAnimationFrame(animate);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.body.classList.remove("help-line-cursor");
    root.style.removeProperty('--mouse-x');
    root.style.removeProperty('--mouse-y');
    cancelAnimationFrame(animationFrame);
  };
}, [slides.helpLine]);


useEffect(() => {
  const root = document.documentElement;

  if (!slides.helpMask) {
 
    root.style.removeProperty('--mouse-y');
    return;
  }

  document.body.classList.add("help-mask");


  let mouseY = 0;

  let currentY = 0;
  const speed = 0.1; // 0 < speed < 1, im mniejsze, tym płynniej

  const handleMouseMove = (e: MouseEvent) => {

    mouseY = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);

  const animate = () => {
 
    currentY += (mouseY - currentY) * speed;

    
    root.style.setProperty('--mouse-y', `${currentY -50}px`);   // 10px wysokości, dzielimy na 2

    requestAnimationFrame(animate);
  };

  const animationFrame = requestAnimationFrame(animate);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.body.classList.remove("help-mask");

    root.style.removeProperty('--mouse-y');
    cancelAnimationFrame(animationFrame);
  };
}, [slides.helpMask]);



  // 🔹 aktualizacja font-size, spacing itd.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-size", `${counters.fontSize}px`);
    root.style.setProperty("--line-height", counters.lineHeight.toString());
    root.style.setProperty("--paragraph-space", `${counters.paragraphSpace}px`);
    root.style.setProperty("--letter-spacing", `${counters.letterSpacing}px`);
    root.style.setProperty("--word-space", `${counters.wordSpace}px`);
  }, [counters]);

  const getFocusableTabIndex = (open: boolean) => (open ? 0 : -1);

  return (
    <div className={`${styles.settings} ${open ? styles.open : ""}`}>
      <div className={styles.settings_row}>
        <div className={styles.settings_menu}>
          <h4 className={styles.settings_elements}>Rozmiar tekstu</h4>
          <svg
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClose();
              }
            }}
            className={styles.icon}
            tabIndex={0}
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#000000"
          >
            <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
          </svg>
        </div>
        <CounterSetting
          id="fontSize"
          src={TextSizeIcon}
          alt="Text size icon"
          description="Zmień rozmiar tekstu"
          value={counters.fontSize}
          onChange={handleCounterChange}
          tabIndex={getFocusableTabIndex(open)}
        />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Ustawienia tekstu</h4>
        <CounterSetting
          id="lineHeight"
          src={LineHeightIcon}
          alt="Line height icon"
          description="Odstęp między wierszami"
          value={counters.lineHeight}
          onChange={handleCounterChange}
          min={1.5}
          max={2.5}
          step={0.1}
          tabIndex={getFocusableTabIndex(open)}
        />
        <CounterSetting
          id="paragraphSpace"
          src={ParagraphSpaceIcon}
          alt="Paragraph space icon"
          description="Odstęp między paragrafami"
          value={counters.paragraphSpace}
          onChange={handleCounterChange}
          tabIndex={getFocusableTabIndex(open)}
        />
        <CounterSetting
          id="letterSpacing"
          src={LetterSpacingIcon}
          alt="Letter spacing icon"
          description="Odstęp między literami"
          value={counters.letterSpacing}
          onChange={handleCounterChange}
          tabIndex={getFocusableTabIndex(open)}
        />
        <CounterSetting
          id="wordSpace"
          src={WordSpaceIcon}
          alt="Word space icon"
          description="Odstęp między słowami"
          value={counters.wordSpace}
          onChange={handleCounterChange}
          tabIndex={getFocusableTabIndex(open)}
        />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Czytelnosć tekstu</h4>
        <SlideSetting
          id="readableFont"
          src={ReadableFontIcon}
          alt="Readable font icon"
          description="Czytelna czcionka"
          value={slides.readableFont}
          onChange={handleSlideChange}
          tabIndex={getFocusableTabIndex(open)}
        />
        <SlideSetting
          id="dyslectickFont"
          src={DyslectickFontIcon}
          alt="Dyslectick font icon"
          description="Dyslektyczna czcionka"
          value={slides.dyslectickFont}
          onChange={handleSlideChange}
          tabIndex={getFocusableTabIndex(open)}
        />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Wyrównanie tekstu</h4>
        <SlideSetting id="textLeft" src={TextLeftIcon} alt="Text left icon" description="Wyrównaj do lewej" value={slides.textLeft} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="textMid" src={TextMidIcon} alt="Text mid icon" description="Wyrównaj do środka" value={slides.textMid} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="textRight" src={TextRightIcon} alt="Text right icon" description="Wyrównaj do prawej" value={slides.textRight} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Filtry</h4>
        <SlideSetting id="strongContrast" src={StrongContrastIcon} alt="Strong contrast icon" description="Silny kontrast" value={slides.strongContrast} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="inversion" src={InversionIcon} alt="Inversion font icon" description="Inwersja" value={slides.inversion} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="monochrome" src={MonochromeIcon} alt="Monochrome icon" description="Monochromia" value={slides.monochrome} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="highContrast" src={HighContrastIcon} alt="High contrast icon" description="Wysoki Kontrast" value={slides.highContrast} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="highSaturation" src={HighSaturationIcon} alt="High saturation icon" description="Wysoka saturacja" value={slides.highSaturation} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        <SlideSetting id="lowSaturation" src={LowSaturationIcon} alt="Low saturation icon" description="Niska saturacja" value={slides.lowSaturation} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Ustawienia pomocnicze</h4>
        <SlideSetting id="offAnimation" src={AnimationIcon} alt="Animation icon" description="Wyłącz animacje" value={slides.offAnimation} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
        {!isMobile && (
          <>
            <SlideSetting id="helpLine" src={HelpLineIcon} alt="Help line icon" description="Linia pomocnicza" value={slides.helpLine} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
            <SlideSetting id="helpMask" src={HelpMaskIcon} alt="Help mask font icon" description="Maska pomocnicza" value={slides.helpMask} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
            <SlideSetting id="blackCursor" src={BlackCursorIcon} alt="Big black cursor icon" description="Duży czarny kursor" value={slides.blackCursor} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
            <SlideSetting id="whiteCursor" src={WhiteCursorIcon} alt="Big white cursor icon" description="Duży biały kursor" value={slides.whiteCursor} onChange={handleSlideChange} tabIndex={getFocusableTabIndex(open)} />
          </>
        )}
      </div>
      
    </div>
  );
};

export default Settings;

