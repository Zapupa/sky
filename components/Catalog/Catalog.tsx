import React from "react";
import { Poppins } from "next/font/google";
import styles from "./Catalog.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import Card from "../Card/Card";
import Button from "../Button/Button";
import img from "@/public/images/cardImg.png";

const Catalog = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <div className={styles.title}>
          <div className={styles.pre_title}>
            <div className={styles.stick} />
            <div>Catalog</div>
          </div>
          <h2 className={styles.h2}>Our Most Popular Board category</h2>
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>All</div>
          <div className={styles.btn}>Sky</div>
          <div className={styles.btn}>Ski</div>
          <div className={styles.btn}>Boards</div>
          <div className={styles.btn}>Other</div>
        </div>
        <div className={styles.cards}>
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
          <Card
            title="Sardinia White"
            oldPrice="449.99"
            newPrice="312.49"
            img={img}
          />
        </div>
        <div className={styles.btnComp}>
          <Button>More products</Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
