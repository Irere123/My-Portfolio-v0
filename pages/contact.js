import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.ContactContainer}>
      <Head>
        <title>Irere Emmanuel - Contact</title>
        <meta
          name="description"
          content="Hi, I am Irere Emmanuel you cant me this is th place to find me"
        />
      </Head>
      <div className={styles.CardContact}>
        <h1>Hire me</h1>
        <div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
