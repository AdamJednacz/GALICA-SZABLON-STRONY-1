
import styles from "./Button.module.scss";
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  icon?: string;
  to?: string;
  size: "small" | "medium" | "large";
  color: "primary" | "secondary" | "white";
  rounded: "rounded" | "no-rounded";
  scroll?: boolean; // if true, use react-scroll
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  icon,
  to,
  size,
  color,
  rounded,

}) => {
  const classNames = `${styles[size]} ${styles[color]} ${styles[rounded]} ${styles.a}`;

  const content = (
    <>
      {children}
      {icon && <img className={styles.img} src={icon} alt="button icon" />}
    </>
  );


  return (
    <a href={to} type={type} className={classNames}>
      {content}
    </a >
  );
};

export default Button;
