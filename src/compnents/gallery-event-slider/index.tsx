import React from "react";
import style from "./GalleryEventSlider.module.scss";
import Slider from "react-slick";
import { CONFIG } from "@/config/config";
import Image from "next/image";

type eventSliderProps = {
  data: any;
};

const GalleryEventSlider: React.FC<eventSliderProps> = ({ data }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode:true,
  };
  return (
    <div className={style.gallery_event_slider}>
      <div className={style.slider}>
        <Slider {...settings}>
          {data.images.data.map((slide: any, index: number) => {
            return (
              <div className={style.slide} key={index}>
                <img
                  src={`${CONFIG.baseUrl}${slide?.attributes?.url}`}
                  alt="slide"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className={style.data_wrapper}>
        <div className={style.title}>{data?.title}</div>
        <div className={style.sub_title}>{data?.sub_title}</div>
        <div className={style.description}>{data?.description}</div>
      </div>
    </div>
  );
};

export default GalleryEventSlider;
