import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <Link to={"/"}>
          <div className={styles.link}>Back to homepage</div>
        </Link>
        <Link to={"/image"}>
          <div className={styles.link}>Image lazy loading</div>
        </Link>
        <Link to={"/video"}>
          <div className={styles.link}>Video play stop</div>
        </Link>
        <Link to={"/anchor"}>
          <div className={styles.link}>Anchor menu</div>
        </Link>
        <Link to={"/scroll"}>
          <div className={styles.link}>Endless scroll</div>
        </Link>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Nav;
