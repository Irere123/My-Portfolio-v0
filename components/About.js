/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

function About() {
  return (
    <div>
      <div className={styles.AboutTitle}>
        <h1>I'am Irere</h1>
      </div>
      <div className={styles.AboutText}>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          animi atque illo aspernatur laborum tempore, eos fuga delectus ratione
          nulla officia vero debitis provident, deleniti quas perspiciatis
          dolores iure cumque natus modi molestiae sunt corporis.
        </h4>
      </div>
      <div className={styles.ContactButton}>
        <Link href="mailto:irere2050@gmail.com">
          <a className={styles.HireMeButton}>Talk to me</a>
        </Link>
        <Link href="/projects">
          <a className={styles.ProjectsButton}>Projects</a>
        </Link>
      </div>
      <div className={styles.SkillsTitle}>
        <h1>Skills</h1>
      </div>
      <div className={styles.SkillsContainer}>
        <div className={styles.SkillCard}></div>
        <div className={styles.SkillCard}></div>
        <div className={styles.SkillCard}></div>
      </div>
    </div>
  );
}

export default About;
