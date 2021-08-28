/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { GitHub, Facebook, Twitter, Instagram } from "@material-ui/icons";

import styles from "../styles/Home.module.css";

function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileImage}></div>
        <div className={styles.cardButtons}>
          <Link href="https://www.github.com/irere123">
            <a>
              <GitHub />
            </a>
          </Link>

          <Link href="https://twitter.com/irere_emmanuel">
            <a>
              <Twitter />
            </a>
          </Link>

          <Link href="https://www.instagram.com/irere_25/">
            <a>
              <Instagram />
            </a>
          </Link>

          <Link href="https://www.facebook.com/irere.emmanuel.5">
            <a>
              <Facebook />
            </a>
          </Link>
        </div>
        <div className={styles.cardText}>
          <p>
            Hi, You're here at my website to see what i can do for you so let's
            start you can use the hire me link to contact me and to see my works
            you can use the projects link. So who am i ? I am a Programmer,
            Student and Typescript and React.js Enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
