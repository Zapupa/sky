import Head from "next/head";
import Image from "next/image";
import { Inter, Roboto, Montserrat, Epilogue } from "next/font/google";
import styles from "@/styles/Home.module.scss";
const epilogue = Epilogue({ subsets: ["latin"] });
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button>s</Button>
    </div>
  );
}
