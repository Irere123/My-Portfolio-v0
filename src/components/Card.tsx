import React from "react";
import Link from "next/link";
import { GitHub, Facebook, Twitter, Instagram } from "@material-ui/icons";

import styles from "../styles/Home.module.css";

function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileImage}>
          <img className={styles.Image} src={`/irere.jpg`} alt="Irere Emmy" />
        </div>
        <div className={styles.cardButtons}>
          <Link href="https://www.github.com/irere123">
            <GitHub />
          </Link>

          <Link href="https://twitter.com/irere_emmanuel">
            <Twitter />
          </Link>

          <Link href="https://www.instagram.com/irere_25/">
            <Instagram />
          </Link>

          <Link href="https://www.facebook.com/irere.emmanuel.5">
            <Facebook />
          </Link>
        </div>
        <div className={styles.cardText}>
          <p>
            Hi, You are looking at my social media headlines these are the
            places where you will be able to find me and contact me. You can
            find most of my projects on my Github account and this website is
            also there. To message me or DM me you can check me out I am always
            around to respond to you. Thanks!!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
