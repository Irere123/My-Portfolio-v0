import React from "react";

import styles from "../styles/Home.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.IElogo}>
        <h1>IE</h1>
      </div>
    </div>
  );
}

export default Header;
