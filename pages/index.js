import Head from "next/head";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Irere Emmanuel - Home</title>
      </Head>
      <div className={styles.mainContent}>
        <div>
          <Card />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
