import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import Anchor from "./pages/Anchor";
import Image from "./pages/Image";
import Video from "./pages/Video";
import Scroll from "./pages/Scroll";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.content}>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/anchor" element={<Anchor />} />
          <Route path="/image" element={<Image />} />
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/video" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
