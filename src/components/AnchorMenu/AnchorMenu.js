import React from "react";
import styles from "./AnchorMenu.module.scss";

const AnchorMenu = () => {
  const sections = document.getElementsByClassName(styles.section);
  const links = document.getElementsByClassName(styles.menu_item);
  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        [...links].forEach((link) => {
          link.classList.remove(styles.active);
        });
        const activeId = entry.target.id;
        const activeLink = [...links].filter((link) => {
          return link.href.includes(activeId);
        });

        if (activeLink) {
          activeLink[0].classList.add(styles.active);
        }
      }
    });
  };

  const sectionObserver = new IntersectionObserver(cb, {
    threshold: [0.2, 0.5, 0.8],
  });

  React.useEffect(() => {
    [...sections].forEach((s) => {
      sectionObserver.observe(s);
    });
  }, []);

  return (
    <div>
      <div className={styles.menu}>
        <a href="#top" className={`${styles.menu_item} ${styles.active}`}>
          Top
        </a>
        <a href="#middle" className={styles.menu_item}>
          Middle
        </a>
        <a href="#bottom" className={styles.menu_item}>
          Bottom
        </a>
      </div>
      <main className={styles.main}>
        <div id="top" className={`${styles.section} ${styles.sect_1}`}></div>
        <div id="middle" className={`${styles.section} ${styles.sect_2}`}></div>
        <div id="bottom" className={`${styles.section} ${styles.sect_3}`}></div>
      </main>
    </div>
  );
};

export default AnchorMenu;
