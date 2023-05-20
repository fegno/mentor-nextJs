import React from "react";
import style from "./GalleryImages.module.scss";
import { CONFIG } from "@/config/config";

type galleryImageProps = {
  images: any;
};

const GalleryImages: React.FC<galleryImageProps> = ({ images }) => {
  console.log(images);
  return (
    <div className={style.gallery_images}>
      <div className="row" style={{gap:"20px 0"}}>
        {images?.map((image: any, index: number) => {
          return (
            <div className="col-6 col-md-3" key={index} >
              <div className={style.image_wrapper}>
                <img src={`${CONFIG.baseUrl}${image?.attributes?.url}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryImages;
