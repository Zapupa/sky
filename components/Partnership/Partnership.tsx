import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./Partnership.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import tesla from "@/public/logos/tesla.png";
import docusign from "@/public/logos/docusign.png";
import maze from "@/public/logos/maze.png";
import discord from "@/public/logos/discord.png";
import miro from "@/public/logos/miro.png";
import uber from "@/public/logos/uber.png";
import partnerImg from "@/public/images/partnerImg.png";

const Partnership = () => {
  return (
    <div className={styles.bg}>
      <div className={`${styles.page} ${poppins.className}`}>
        <div className={styles.logos}>
          <Image src={tesla} alt="logo" />
          <Image src={docusign} alt="logo" />
          <Image src={maze} alt="logo" />
          <Image src={uber} alt="logo" />
          <Image src={miro} alt="logo" />
          <Image src={discord} alt="logo" />
        </div>
        <div className={styles.main}>
          <div className={styles.choose}>
            <Image src={partnerImg} alt="ski" />
            <div className={styles.choose_text}>
              <div className={styles.choose_title}>Why choose Us?</div>
              <div className={styles.choose_desc}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </div>
              <Link href="#" className={styles.choose_link}>
                Read more
              </Link>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.card_title}>Service Repiar</div>
              <div className={styles.card_desc}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_title}>Board Accessories</div>
              <div className={styles.card_desc}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_title}>Warraty & Guarantee</div>
              <div className={styles.card_desc}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint Velit officia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
