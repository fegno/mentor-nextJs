import React from "react";
import style from "./GalleryBanner.module.scss";
import Container from "../container";

const GalleryBanner: React.FC = () => {
  return (
    <div className={style.gallery_banner}>
      <Container>
        <div className={style.inner_wrapper}>
          <div className={style.data_wrapper}>
            <div className={style.title}>Explore</div>
            <div className={style.desc}>
              Immerse yourself in the captivating essence of our campus through
              stunning imagery.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryBanner;
