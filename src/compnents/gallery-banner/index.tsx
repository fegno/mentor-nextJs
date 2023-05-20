import React from "react";
import style from "./GalleryBanner.module.scss";
import Container from "../container";

const GalleryBanner: React.FC = () => {
  return (
    <div className={style.gallery_banner}>
      <Container>
        <div className={style.inner_wrapper}>
          <div className={style.data_wrapper}>
            <div className={style.title}>Gallery</div>
            <div className={style.desc}>Our three main campuses in Cambridge, Allston, and Boston are a home to students and faculty, a hub of research and innovation, and a destination for visitors from all over the world.</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GalleryBanner;
