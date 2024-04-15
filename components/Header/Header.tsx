import React from "react";
import styles from "./Header.module.scss";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});
import Search from "@/public/icons/Search.svg";
import User from "@/public/icons/User.svg";
import Bag from "@/public/icons/Bag.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.sacrifice}></div>
        <div className={`${styles.links} ${poppins.className}`}>
          <Link href="#" className={styles.link}>
            About
          </Link>
          <Link href="#" className={styles.link}>
            Shop
          </Link>
          <Link href="#" className={styles.link}>
            Contact
          </Link>
        </div>
        <div className={styles.btns}>
          <div className={styles.btn}>
            <Image src={Search} alt="search" />
          </div>
          <div className={styles.btn}>
            <Image src={Bag} alt="bag" />
          </div>
          <div className={styles.btn}>
            <Image src={User} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
