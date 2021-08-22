/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

function Card() {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.cardProfile}>
        <div className={styles.cardProfileImage}>
          <h3>Profile Image</h3>
        </div>
        <div className={styles.cardButtons}>
          <div className={styles.github}>
            <Link href="https://www.github.com/irere123">
              <a>Github</a>
            </Link>
          </div>
          <div className={styles.facebook}>
            <Link href=" https://www.facebook.com">
              <a>Facebook</a>
            </Link>
          </div>
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
