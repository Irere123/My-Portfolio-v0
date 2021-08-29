import React from "react";
import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <div className={styles.Projects}>
      <Head>
        <title>Irere Emmanuel - Projects</title>
        <meta
          name="description"
          content="Hi, I am Irere Emmanuel this whta i have worked on so far"
        />
      </Head>
      <h1>My Projects</h1>
      <div className={styles.ProjectsCards}>
        <div className={styles.ProjectCard}>
          <h1 className={styles.neox}>NEOX</h1>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              sunt nulla voluptatem illo culpa ex optio ea dolore veniam ad?
            </p>
            <Link href="https://neoxrw.netlify.com/register">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.news}>NEWS</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio neque assumenda illo labore facere. Ex in deserunt
            </p>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.news}>QC</h1>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.twt}>TWC</h1>
        </div>
      </div>
    </div>
  );
}

export default Projects;
