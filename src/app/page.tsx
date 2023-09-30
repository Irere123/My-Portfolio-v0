"use client";

import About from "../components/About";
import Card from "../components/Card";
import { Container } from "../components/Container";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <Container>
      <div>
        <div>
          <Header />
          <div>
            <Card />
          </div>
          <div>
            <About />
          </div>
        </div>
      </div>
    </Container>
  );
}
