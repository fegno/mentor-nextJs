import React from "react";
import style from "./GalleryCampus.module.scss";
import Title from "../title";
import first from "../../assets/gallery/1.jpg";
import second from "../../assets/gallery/2.jpg";
import third from "../../assets/gallery/3.jpg";
import Slider from "react-slick";

const GalleryCampus: React.FC = () => {
  const IMAGES = [first.src, second.src, third.src];
  const SLIDER_SETTINGS = {
    dots: false,
    arrows: false,
    slidesToShow: 1.1,
  };
  return (
    <div className={style.gallery_campus}>
      <div className={style.title}>
        <Title title="Campus" />
      </div>
      <div className={style.images_container}>
        {IMAGES.map((image: any, index: number) => {
          return (
            <div className={style.image_box} key={index}>
              <img src={image} alt={`image${index}`} />
            </div>
          );
        })}
      </div>
      <div className={style.slider}>
        <Slider {...SLIDER_SETTINGS}>
          {IMAGES.map((image: any, index: number) => {
            return (
              <div className={style.slide} key={index}>
                <img src={image} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryCampus;
