/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GitHub, Facebook, Twitter, Instagram } from "@material-ui/icons";

import styles from "../styles/Home.module.css";
import profilePic from "../public/irere.jpg";

function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileImage}>
          <Image className={styles.Image} src={profilePic} alt="Irere Emmy" />
        </div>
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
