"use client";

import About from "../components/About";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <div>
      {/* <Head>
      <title>Irere Emmanuel - Home</title>
    </Head> */}
      <div>
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
