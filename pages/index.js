import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>home</title>
      </Head>
      {" "}
      <h2>Hello world (home page)</h2>
    </div>
  );
}
