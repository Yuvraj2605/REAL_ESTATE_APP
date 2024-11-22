import React, { useState } from "react";
import "./Slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeFun = (val) => {
    if (val == "left") {
      if (imageIndex === 0) {
        const imageIndex1 = images.length - 1;
        setImageIndex(imageIndex1);
      } else {
        const imagei = imageIndex - 1;
        setImageIndex(imagei);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="./public/arrow.png"
              alt=""
              onClick={() => changeFun("left")}
            />
          </div>

          <div className="fullscreenImg">
            <img src={images[imageIndex]} alt="" />
          </div>

          <div className="arrow right">
            <img
              src="./public/arrow.png"
              className="right"
              alt=""
              onClick={() => changeFun("right")}
            />
          </div>

          <div className="delete" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigPart">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallPart">
        {images.slice(1).map((img1, index) => (
          <img src={img1} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
