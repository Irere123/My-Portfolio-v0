import Head from "next/head";

import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          property="og:description"
          content="What's up this is my a link to my website where you can get to know what i can do for you."
        />
        <meta
          name="twitter:description"
          content="Do you want get full build website that meet your requirements and build with modern technologies. Then I am here for you."
        />
        <meta
          name="description"
          content="Irere Emmanuel is a programmer, student and React.js and Typescript Enthuasist. He specializes in web dev and mobile dev and everthing in between. He also likes using Typescript to create his projects"
        />
        <link rel="icon" type="img/svg" href="/logo.svg" />
        <meta property="og:title" content="Hi, I'am Irere Emmanuel" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://irere.vercel.app/" />
        <meta name="twitter:title" content="Hi, I'am Irere Emmanuel" />
        <meta name="twitter:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:author" content="@irere_emmanuel" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
