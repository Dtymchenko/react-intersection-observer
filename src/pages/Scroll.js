import React from "react";
import EndlessScroll from "../components/EndlessScroll/EndlessScroll";
import axios from "axios";
import { useInView } from "react-intersection-observer";

const Scroll = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "500px",
  });

  const [page, setPage] = React.useState(1);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?&_limit=10&_page=${page}`
      );
      setItems([...items, ...data.data]);
      setPage(page + 1);
    };
    getData();
  }, [inView]);

  // console.log(page);
  // console.log(inView);

  return (
    <div>
      {items.map((item) => (
        <div ref={ref} key={item.id}>
          <EndlessScroll item={item} />
        </div>
      ))}
    </div>
  );
};

export default Scroll;
