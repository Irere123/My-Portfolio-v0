/* eslint-disable react/no-unescaped-entities */
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
          content="Hi, I am Irere Emmanuel this is what i have worked on so far"
        />
      </Head>
      <div>
        <h1>My Projects</h1>
        <div className={styles.GoBackHome}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
      <div className={styles.ProjectsCards}>
        <div className={styles.ProjectCard}>
          <h1 className={styles.neox}>NEOX</h1>
          <div className={styles.NeoxIntro}>
            <p>
              NEOX is a platform for communication between students and other
              peple as well where you can collaborate and solve problems
              together in teams
            </p>
            <Link href="https://neoxrw.netlify.com/register">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.news}>BOARD</h1>
          <div className={styles.NewsIntro}>
            <p>
              BOARD allows users top post, see tips, see community messages or
              announcements and allows users to see what's trending and post
              trending stuff from diffent sources.
            </p>
            <Link href="https://github.com/irere123/NEWS">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.news}>NEWS</h1>
          <div className={styles.NewsIntro}>
            <p>
              NEWS, Read, Mage, write your news so that other people can see it.
              It's equiped with a Great UI and Powerdul Admin Dashboard to help
              you manage your writing
            </p>
            <Link href="https://github.com/irere123/NEWS">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.QC}>QC</h1>
          <div className={styles.QCIntro}>
            <p>
              QC stands for Quora Clone. on QC you can post questions, answer
              questions and comments on others answers also if you want to track
              the topics you're interested in you can do it.
            </p>
            <Link href="https://github.com/Irere123/Django-PWA-App">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
        <div className={styles.ProjectCard}>
          <h1 className={styles.twc}>TWC</h1>
          <div className={styles.TWCIntro}>
            <p>
              TWC stands for Twitter Clone. This is a copy of twitter where you
              can tweet about stuff, follow people and more twitter related
              stuff
            </p>
            <Link href="https://github.com/irere123/twitter-clone-client">
              <a>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
