import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "100", "200", "300", "400", "500", "700", "800", "900"],
});

import Main from "@/components/Main/Main";
import Service from "@/components/Service/Service";
import Catalog from "@/components/Catalog/Catalog";
import Gallery from "@/components/Gallery/Gallery";
import Explore from "@/components/Explore/Explore";
import Partnership from "@/components/Partnership/Partnership";
import VideoPage from "@/components/VideoPage/VideoPage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Main />
      <Service />
      <Catalog />
      <Gallery />
      <Explore />
      <Partnership />
      <VideoPage />
    </div>
  );
}
