import React from "react";
import styles from "./Header.module.scss";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

const Header = () => {
  return <div className={styles.wrapper}></div>;
};

export default Header;
