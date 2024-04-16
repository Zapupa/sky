import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./Gallery.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import galleryImg1 from "@/public/images/gallery1.png";
import galleryImg2 from "@/public/images/gallery2.png";
import galleryImg3 from "@/public/images/gallery3.png";

const Gallery = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <div className={styles.left}>
          <div className={styles.title}>Our Gallery</div>
          <Image src={galleryImg1} alt="ski" />
        </div>
        <div className={styles.right}>
          <Image src={galleryImg2} alt="ski" />
          <Image src={galleryImg3} alt="ski" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
