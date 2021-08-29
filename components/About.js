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
          Hello, How are you. Let's know each well and let me introduce myself.
          I am a student, a programmer, a React.js, Javascript and Typescript
          enthusiast. I also work as a freelancer and I make websites, apps, and
          APIs for my customers
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
        <div className={styles.SkillCard}>
          <h3 className={styles.SkillCategory}>Languages</h3>
          <div className={styles.SkillsList}>
            <ul>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        <div className={styles.SkillCard}>
          <h3 className={styles.SkillCategory}>Back end</h3>
          <div className={styles.SkillsList}>
            <ul>
              <li>GraphQL APIs</li>
              <li>Rest APIs</li>
              <li>Node.js</li>
              <li>Django</li>
            </ul>
          </div>
        </div>
        <div className={styles.SkillCard}>
          <h3 className={styles.SkillCategory}>Front end</h3>
          <div className={styles.SkillsList}>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vue</li>
              <li>Svelte</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
