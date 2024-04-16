import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./Service.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import boxIcon from "@/public/icons/boxIcon.png";
import cashIcon from "@/public/icons/cashIco.png";
import operatorIcon from "@/public/icons/operatorIcon.png";

const Service = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.page}>
        <div className={styles.card}>
          <Image src={boxIcon} alt="box" />
          <div className={`${styles.card_main} ${poppins.className}`}>
            <div className={styles.card_title}>Free Shapping</div>
            <div className={styles.card_desc}>No charge for each delivery</div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={cashIcon} alt="cash" />
          <div className={`${styles.card_main} ${poppins.className}`}>
            <div className={styles.card_title}>Quick Payment</div>
            <div className={styles.card_desc}>100% secure payment</div>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={operatorIcon} alt="operator" />
          <div className={`${styles.card_main} ${poppins.className}`}>
            <div className={styles.card_title}>24/7 Support</div>
            <div className={styles.card_desc}>Quick support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
