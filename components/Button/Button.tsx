import React from "react";
import styles from "./Button.module.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button className={`${styles.btn} ${poppins.className}`}>{children}</button>
  );
};

export default Button;
