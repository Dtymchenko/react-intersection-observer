import React from "react";
import styles from "./VideoPlayer.module.scss";
import { useInView } from "react-intersection-observer";

const VideoPlayer = () => {
  const videoRef = React.useRef(null);

  const { ref, inView } = useInView({
    threshold: [0.5],
  });

  const handlePlay = React.useEffect(() => {
    if (videoRef.current.currentTime === 0) return;
    if (!inView) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [inView]);

  return (
    <div>
      <div className={styles.text}>
        <p>Video is below</p>
        <p>It works like this:</p>
        <p>
          1. If you did not start playing video, then scroll does not affect it
        </p>
        <p>
          2. If you started playing video and you scroll so that video
          disappears from the view area - playing stops
        </p>
        <p>
          3. If you stopped playing video and you scroll so that it appears in
          the view area - playing continues again
        </p>
      </div>
      <section className={styles.video} ref={ref}>
        <video
          ref={videoRef}
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
          width="50%"
          // height="300px"
          controls
        ></video>
      </section>
      <div className={styles.text}>
        <p>Video is above</p>
        <p>It works like this:</p>
        <p>
          1. If you did not start playing video, then scroll does not affect it
        </p>
        <p>
          2. If you started playing video and you scroll so that video
          disappears from the view area - playing stops
        </p>
        <p>
          3. If you stopped playing video and you scroll so that it appears in
          the view area - playing continues again
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
