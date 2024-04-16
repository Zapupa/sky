import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./VideoPage.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

const VideoPage = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <div className={styles.text}>
          <div className={styles.title}>Video about us</div>
          <div className={styles.desc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
        <video className={styles.video} controls autoPlay preload="none">
          <source src="./videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage;
