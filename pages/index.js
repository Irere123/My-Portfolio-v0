import Head from "next/head";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Irere Emmanuel - Home</title>
        <meta
          name="description"
          content="Irere Emmanuel is a programmer, student and React.js and Typescript Enthuasist. He specializes in web dev and mobile dev and everthing in between. He also likes using Typescript to create his projects"
        />
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
