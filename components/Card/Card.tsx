import React from "react";
import styles from "./Card.module.scss";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

interface ICardProps {
  title: String;
  oldPrice: String;
  newPrice: String;
  img: StaticImageData;
}

const Card = ({ title, oldPrice, newPrice, img }: ICardProps) => {
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={img} alt="img" />
      <div className={`${styles.main} ${poppins.className}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice} SAR</div>
          <div className={styles.newPrice}>{newPrice} SAR</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
