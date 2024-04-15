import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
}
