import React from "react";
import Link from "next/link";

import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <div className={styles.Projects}>
      <h1>Projects</h1>
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
