import React from "react";
import { Poppins } from "next/font/google";
import styles from "./Main.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";

const Main = () => {
  return (
    <div className={styles.main_bg}>
      <Header />
      <div className={styles.main_page}>
        <main className={styles.main}>
          <div className={`${styles.main_text} ${poppins.className}`}>
            <h2 className={styles.main_desc}>
              We build only the best, customized to your exacting demands
            </h2>
            <h1 className={styles.main_title}>SKY & SKI</h1>
          </div>

          <div className={styles.main_btn}>
            <Button>shop now</Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
