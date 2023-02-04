import React from "react";
import axios from "axios";
import ImgSection from "./../components/ImgSection/ImgSection";

const Image = () => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const getImg = async () => {
      const data = await axios.get(
        // "https://jsonplaceholder.typicode.com/photos?&_limit=10"
        "https://jsonplaceholder.typicode.com/photos"
      );
      setImages(data.data);
    };
    getImg();
  }, []);

  return (
    <div>
      {images.map((el) => (
        <ImgSection key={el.id} el={el} />
      ))}
    </div>
  );
};

export default Image;
