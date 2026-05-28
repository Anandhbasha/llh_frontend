import { useState, useEffect } from "react";

import "../Slider.css"

import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";



import "../Slider.css";


const Slider = () => {

  const banners = [
    
    <Banner1 />,
    <Banner2 />,
    <Banner3 />,
    

  ];

  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */

  useEffect(() => {

    const interval = setInterval(() => {

      nextSlide();

    }, 4000);

    return () => clearInterval(interval);

  }, [index]);

  /* NEXT */

  const nextSlide = () => {

    setIndex(
      (prev) =>
        (prev + 1) % banners.length
    );

  };

  /* PREVIOUS */

  const prevSlide = () => {

    setIndex(
      (prev) =>
        (prev - 1 + banners.length)
        % banners.length
    );

  };

  return (

    <div className="container-fluid px-0 sliderContainer">

      {/* SLIDE */}

      <div className="position-relative">

        <div className="slideWrapper">

          {banners[index]}

        </div>

        {/* LEFT BUTTON */}

        <button
          className="sliderBtn leftBtn"
          onClick={prevSlide}
        >

          <i className="bi bi-chevron-left"></i>

        </button>

        {/* RIGHT BUTTON */}

        <button
          className="sliderBtn rightBtn"
          onClick={nextSlide}
        >

          <i className="bi bi-chevron-right"></i>

        </button>

      </div>

      {/* DOTS */}

      <div className="d-flex justify-content-center mt-3 gap-2">

        {banners.map((_, i) => (

          <div
            key={i}
            className={
              index === i
                ? "dot activeDot"
                : "dot"
            }
            onClick={() => setIndex(i)}
          />

        ))}

      </div>

    </div>
  );
};

export default Slider;