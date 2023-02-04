import React from "react";
import styles from "./ImgSection.module.scss";
import { useInView } from "react-intersection-observer";

const ImgSection = ({ el }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <div ref={ref} className={styles.section}>
      <p>{el.title}</p>
      <img
        src={el.id < 5 ? el.url : inView ? el.url : ''}
        alt="img"
        width={600}
        height={600}
      ></img>
    </div>
  );
};

export default ImgSection;
