import { useEffect, useState, useCallback } from "react";
import CounterSetting from "./Counter_setting/CounterSetting";
import SlideSetting from "./Slide_setting/SlideSetting";
import styles from "./Settings.module.scss";
import { useAccessibility } from "../context/AccessibilityContext";


// Ikony
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
  fontSize: number;
  lineHeight: number;
  paragraphSpace: number;
  letterSpacing: number;
  wordSpace: number;
};

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
  helpLine: boolean;
  helpMask: boolean;
  offAnimation: boolean;
  mute: boolean;
};

// ✅ Custom hook do animowania pozycji myszy (dla helpLine / helpMask)
function useMouseFollower(enabled: boolean, offsetY = 0, offsetX = 0) {
  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    let mouseY = 0;
    let mouseX = 0;
    let currentY = 0;
    let currentX = 0;
 

    const handleMove = (e: MouseEvent) => {
      mouseY = e.clientY;
      mouseX = e.clientX;
    };
    document.addEventListener("mousemove", handleMove);

    const frame = () => {
      currentY += (mouseY - currentY) ;
      currentX += (mouseX - currentX) ;

      root.style.setProperty("--mouse-y", `${currentY - offsetY}px`);
      root.style.setProperty("--mouse-x", `${currentX - offsetX}px`);

      requestAnimationFrame(frame);
    };
    const animation = requestAnimationFrame(frame);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animation);
      root.style.removeProperty("--mouse-y");
      root.style.removeProperty("--mouse-x");

  
    };
  }, [enabled, offsetY, offsetX]);
}
const defaultCounters: CounterState = {
  fontSize: 16,
  lineHeight: 1.5,
  paragraphSpace: 0,
  letterSpacing: 0,
  wordSpace: 0,
};

const defaultSlides: SlidesState = {
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

const Settings: React.FC<SettingsProps> = ({ open, onClose }) => {
  const { setAnimationsOff } = useAccessibility();
  const [isMobile, setIsMobile] = useState(false);

  // Inicjalizacja z localStorage
  const [counters, setCounters] = useState<CounterState>(() => {
    if (typeof window === "undefined") return defaultCounters;
    const saved = localStorage.getItem("accessibilitySettings");
    return saved ? JSON.parse(saved).counters : defaultCounters;
  });

  const [slides, setSlides] = useState<SlidesState>(() => {
    if (typeof window === "undefined") return defaultSlides;
    const saved = localStorage.getItem("accessibilitySettings");
    return saved ? JSON.parse(saved).slides : defaultSlides;
  });



useEffect(() => { if (typeof window === "undefined") return; localStorage.setItem( "accessibilitySettings", JSON.stringify({ counters, slides }) ); }, [counters, slides]);

  // ✅ Responsywność
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1381);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Logika zmiany slajdów
  const handleSlideChange = useCallback(
    (id: keyof SlidesState, newValue: boolean) => {
      const exclusiveFilters: (keyof SlidesState)[] = [
        "strongContrast",
        "inversion",
        "monochrome",
        "highContrast",
        "highSaturation",
        "lowSaturation",
      ];

      setSlides((prev) => {
        const updated = { ...prev };

        if (["textLeft", "textMid", "textRight"].includes(id) && newValue) {
          updated.textLeft = id === "textLeft";
          updated.textMid = id === "textMid";
          updated.textRight = id === "textRight";
        } else if (["readableFont", "dyslectickFont"].includes(id) && newValue) {
          updated.readableFont = id === "readableFont";
          updated.dyslectickFont = id === "dyslectickFont";
        } else if (["blackCursor", "whiteCursor"].includes(id) && newValue) {
          updated.blackCursor = id === "blackCursor";
          updated.whiteCursor = id === "whiteCursor";
        }
          else if (["helpMask", "helpLine"].includes(id) && newValue) {
          updated.helpLine = id === "helpLine";
          updated.helpMask = id === "helpMask";
        
        } else if (exclusiveFilters.includes(id)) {
          exclusiveFilters.forEach((filter) => {
            updated[filter] = filter === id ? newValue : false;
          });
        } else {
          updated[id] = newValue;
        }
        return updated;
      });
    },
    []
  );

  // ✅ Zmiana liczników
  const handleCounterChange = useCallback(
    (id: keyof CounterState, newValue: number) => {
      setCounters((prev) => ({ ...prev, [id]: Math.max(0, newValue) }));
    },
    []
  );

  // ✅ Jeden zbiorczy efekt do aktualizacji stylów i klas
  const applySettings = useCallback(() => {
    const root = document.documentElement;

    // Font family
    const font = slides.dyslectickFont
      ? '"OpenDyslexic", Arial, sans-serif'
      : slides.readableFont
      ? "Arial, sans-serif"
      : '"Inter", sans-serif';
    root.style.setProperty("--app-font-family", font);

    // Text alignment
    const align = slides.textLeft
      ? "left"
      : slides.textMid
      ? "center"
      : slides.textRight
      ? "right"
      : "unset";
    root.style.setProperty("--app-text-align", align);

    // Filtry
    const filters = {
  
      inversion: "invert(100%)",
      monochrome: "grayscale(100%)",
      highContrast: "contrast(200%)",
      highSaturation: "saturate(200%)",
      lowSaturation: "saturate(50%)",
    } as const;

    const activeFilter = (Object.keys(filters) as (keyof typeof filters)[]).find(
      (key) => slides[key]
    );
    root.style.setProperty("--app-filter", activeFilter ? filters[activeFilter] : "unset");
  document.body.classList.toggle("strong-contrast", slides.strongContrast);
    // Liczniki (font-size, spacing)
    root.style.setProperty("--font-size", `${counters.fontSize}px`);
    root.style.setProperty("--line-height", counters.lineHeight.toString());
    root.style.setProperty("--paragraph-space", `${counters.paragraphSpace}px`);
    root.style.setProperty("--letter-spacing", `${counters.letterSpacing}px`);
    root.style.setProperty("--word-space", `${counters.wordSpace}px`);

    // Animacje i kursory
    document.body.classList.toggle("no-animations", slides.offAnimation);
    document.body.classList.toggle("big_black_cursor", slides.blackCursor);
    document.body.classList.toggle("big_white_cursor", slides.whiteCursor);
    document.body.classList.toggle("help-line-cursor", slides.helpLine);
    document.body.classList.toggle("help-mask", slides.helpMask);

    setAnimationsOff(slides.offAnimation);
  }, [slides, counters, setAnimationsOff]);

  useEffect(() => {
    applySettings();
  }, [applySettings]);

  // ✅ Hooki do pomocy wizualnej (płynne śledzenie myszy)
useMouseFollower(slides.helpLine, 5, 250);
  useMouseFollower(slides.helpMask, 50);

  // ✅ Dostępność
  const tabIndex = open ? 0 : -1;

  return (
    <div className={`${styles.settings} ${open ? styles.open : ""}`}>
      <div className={styles.settings_row}>
        <div className={styles.settings_menu}>
          <h4 className={styles.settings_elements}>Rozmiar tekstu</h4>
          <svg
            tabIndex={0}
            className={styles.icon}
            onClick={onClose}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClose()}
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            width="48px"
            fill="#000000"
            viewBox="0 -960 960 960"
          >
            <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
          </svg>
        </div>
        <CounterSetting
          id="fontSize"
          src={TextSizeIcon}
          description="Zmień rozmiar tekstu"
          value={counters.fontSize}
          onChange={handleCounterChange}
          tabIndex={tabIndex}
               min={16} max={20} step={1}
        />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Ustawienia tekstu</h4>
        <CounterSetting id="lineHeight"  src={LineHeightIcon} description="Odstęp między wierszami" value={counters.lineHeight} onChange={handleCounterChange} min={1.5} max={2.5} step={0.1} tabIndex={tabIndex} />
        <CounterSetting id="paragraphSpace" src={ParagraphSpaceIcon} description="Odstęp między paragrafami" value={counters.paragraphSpace} onChange={handleCounterChange} tabIndex={tabIndex} />
        <CounterSetting id="letterSpacing" src={LetterSpacingIcon} description="Odstęp między literami" value={counters.letterSpacing} onChange={handleCounterChange} tabIndex={tabIndex} />
        <CounterSetting id="wordSpace" src={WordSpaceIcon} description="Odstęp między słowami" value={counters.wordSpace} onChange={handleCounterChange} tabIndex={tabIndex} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Czytelność tekstu</h4>
        <SlideSetting id="readableFont" src={ReadableFontIcon} description="Czytelna czcionka" value={slides.readableFont} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="dyslectickFont" src={DyslectickFontIcon} description="Dyslektyczna czcionka" value={slides.dyslectickFont} onChange={handleSlideChange} tabIndex={tabIndex} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Wyrównanie tekstu</h4>
        <SlideSetting id="textLeft" src={TextLeftIcon} description="Wyrównaj do lewej" value={slides.textLeft} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="textMid" src={TextMidIcon} description="Wyrównaj do środka" value={slides.textMid} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="textRight" src={TextRightIcon} description="Wyrównaj do prawej" value={slides.textRight} onChange={handleSlideChange} tabIndex={tabIndex} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Filtry</h4>
        <SlideSetting id="strongContrast" src={StrongContrastIcon} description="Silny kontrast" value={slides.strongContrast} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="inversion" src={InversionIcon} description="Inwersja" value={slides.inversion} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="monochrome" src={MonochromeIcon} description="Monochromia" value={slides.monochrome} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="highContrast" src={HighContrastIcon} description="Wysoki kontrast" value={slides.highContrast} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="highSaturation" src={HighSaturationIcon} description="Wysoka saturacja" value={slides.highSaturation} onChange={handleSlideChange} tabIndex={tabIndex} />
        <SlideSetting id="lowSaturation" src={LowSaturationIcon} description="Niska saturacja" value={slides.lowSaturation} onChange={handleSlideChange} tabIndex={tabIndex} />
      </div>

      <div className={styles.settings_row}>
        <h4 className={styles.settings_elements}>Ustawienia pomocnicze</h4>
        <SlideSetting id="offAnimation" src={AnimationIcon} description="Wyłącz animacje" value={slides.offAnimation} onChange={handleSlideChange} tabIndex={tabIndex} />
        {!isMobile && (
          <>
            <SlideSetting id="helpLine" src={HelpLineIcon} description="Linia pomocnicza" value={slides.helpLine} onChange={handleSlideChange} tabIndex={tabIndex} />
            <SlideSetting id="helpMask" src={HelpMaskIcon} description="Maska pomocnicza" value={slides.helpMask} onChange={handleSlideChange} tabIndex={tabIndex} />
            <SlideSetting id="blackCursor" src={BlackCursorIcon} description="Duży czarny kursor" value={slides.blackCursor} onChange={handleSlideChange} tabIndex={tabIndex} />
            <SlideSetting id="whiteCursor" src={WhiteCursorIcon}  description="Duży biały kursor" value={slides.whiteCursor} onChange={handleSlideChange} tabIndex={tabIndex} />
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
