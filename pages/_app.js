import Head from "next/head";

import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="img/svg" href="/logo.svg" />
        <meta property="og:title" content="Hi, I'am Irere Emmanuel" />
        <meta
          property="og:description"
          content="Do you want get full build website that meet your requirements and build with modern technologies. Then I am here for you."
        />
        <meta
          property="og:image"
          content="https://www.irere.vercel.app/public/irere.jpg"
        />
        <meta property="og:url" content="https://irere.vercel.app/" />
        <meta name="twitter:title" content="Hi, I'am Irere Emmanuel" />
        <meta
          name="twitter:description"
          content="Do you want get full build website that meet your requirements and build with modern technologies. Then I am here for you."
        />
        <meta
          name="twitter:image"
          content="https://www.irere.vercel.app/public/irere.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
