import React, { useState } from "react";
import style from "./GalleryImages.module.scss";
import { CONFIG } from "@/config/config";
import CustomModal from "../modal";
import Image from "next/image";
import LazyLoad from "react-lazyload";

type galleryImageProps = {
  images: any;
};

const GalleryImages: React.FC<galleryImageProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className={style.gallery_images}>
      {images && images[selectedIndex] && (
        <CustomModal
          isOpen={isModalOpen}
          close={() => {
            setIsModalOpen(false);
          }}
        >
          <div className={style.image_view}>
            <img
              src={`${CONFIG.baseUrl}${images[selectedIndex]?.attributes?.url}`}
              alt="image"
            />
          </div>
        </CustomModal>
      )}
      <div className="row" style={{ gap: "20px 0" }}>
        {images?.map((image: any, index: number) => {
          return (
            <div className="col-6 col-md-3" key={index}>
              <div
                className={style.image_wrapper}
                onClick={() => {
                  handleImageClick(index);
                }}
              >
                <LazyLoad placeholder={<div>loading</div>} >
                  <Image
                    src={`${CONFIG.baseUrl}${image?.attributes?.url}`}
                    alt="mentor"
                    width={500}
                    height={500}
                  />
                </LazyLoad>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryImages;
