import React, { useRef } from "react";
import style from "./HomepageOurValues.module.scss";
import OurValuesSlide from "../ou-values-slide";
import Slider from "react-slick";
import { VALUES } from "./const";
import arrow from "../../assets/arrow.svg";

const Arrow = () => {
  return (
    <button
      className={`${style.arrow} ${style.prev}`}
    >
      <img src={arrow.src} />
    </button>
  );
};

const HomepageOurValues: React.FC = () => {
  const sliderRef: any = useRef(null);

  //Slider settings
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<Arrow />
  };

  const nextSlideHandle = () => {
    sliderRef.current.slickNext();
  };

  const previousSlidehandle = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className={style.our_values}>
      <div
        className={`card-violet animated-border-glow card-glowing-blue rounded-30 ${style.card_header}`}
      >
        Our Values
      </div>

      <Slider {...settings} ref={sliderRef}>
        {VALUES.map((slide: any, index: number) => {
          return (
            <div className={style.slide} key={index}>
              <OurValuesSlide data={slide} index={index} />
            </div>
          );
        })}
      </Slider>

      <button
        className={`${style.arrow} ${style.prev}`}
        onClick={previousSlidehandle}
      >
        <img src={arrow.src} />
      </button>

      <button
        className={`${style.arrow} ${style.next}`}
        onClick={nextSlideHandle}
        disabled={false}
      >
        <img src={arrow.src} />
      </button>
    </div>
  );
};

export default HomepageOurValues;
