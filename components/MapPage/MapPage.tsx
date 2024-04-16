import React from "react";
import { Poppins } from "next/font/google";
import styles from "./VideoPage.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

const VideoPage = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}></div>
    </div>
  );
};

export default VideoPage;
