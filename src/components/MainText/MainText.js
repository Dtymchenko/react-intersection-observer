import React from "react";
import styles from "./MainText.module.scss";

const MainText = () => {
  return (
    <div className={styles.text}>
      <p>Hi there!</p>
      <p>
        This App was created to test how the React Intersection Observer works.
      </p>
      <p>
        I created a few pages for this, on each - practicing using this API with
        different data, like images, video, anchor menu or endless scroll.
      </p>
      <p>Click on any link to visit the page.</p>
    </div>
  );
};

export default MainText;
