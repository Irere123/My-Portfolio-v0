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
          enthusiast. Currently working on how to change the way we learn....
        </h4>
      </div>
      <div className={styles.ContactButton}>
        <Link href="mailto:irere2050@gmail.com" className={styles.HireMeButton}>
          Talk to me
        </Link>
        <Link href="/projects" className={styles.ProjectsButton}>
          Projects
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
              <li>Elixir</li>
              <li>Typescript</li>
              <li>Python</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className={styles.SkillCard}>
          <h3 className={styles.SkillCategory}>Backend</h3>
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
          <h3 className={styles.SkillCategory}>Frontend</h3>
          <div className={styles.SkillsList}>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Svelte</li>
              <li>SvelteKit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
