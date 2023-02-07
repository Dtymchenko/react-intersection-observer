import React from "react";
import styles from "./EndlessScroll.module.scss";

const EndlessScroll = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        {item.id}. {item.title}
      </div>
      <div>
        <img src={item.url}></img>
      </div>
    </div>
  );
};

export default EndlessScroll;
