import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./Explore.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import img from "@/public/images/gallery1.png";
import arrow from "@/public/icons/Arrow.svg";

import product1 from "@/public/images/imgProduct1.png";
import product2 from "@/public/images/imgProduct2.png";
import product3 from "@/public/images/imgProduct3.png";

const Explore = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <div className={styles.text}>
          <div className={styles.title}>Explore Our Product</div>
          <div className={styles.desc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cards_left}>
            <div className={styles.card_small}>
              <Image className={styles.card_btn} src={arrow} alt="arr" />
              <Image className={styles.small_img} src={product1} alt="img" />
              <div className={styles.card_text}>
                <div className={styles.card_price}>$60</div>
                <div className={styles.card_title}>Road helmet</div>
              </div>
            </div>
            <div className={styles.card_medium}>
              <Image className={styles.card_btn} src={arrow} alt="arr" />
              <Image className={styles.small_img} src={product2} alt="img" />
              <div className={styles.card_text}>
                <div className={styles.card_title_med}>Tire repair kit</div>
                <div className={styles.card_price}>$120</div>
              </div>
            </div>
          </div>
          <div className={styles.cards_right}>
            <div className={styles.card_big}>
              <Image className={styles.card_btn} src={arrow} alt="arr" />
              <Image className={styles.small_img} src={product3} alt="img" />
              <div className={styles.card_text}>
                <div className={styles.card_price}>$60</div>
                <div className={styles.card_title}>Bike water bottle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
