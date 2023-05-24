import React from "react";
import style from "./Gallery-card.module.scss";
import { CONFIG } from "@/config/config";
import Image from "next/image";
type GalleryProps = {
  data: any;
};

const GalleryCard: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div className={style.gallery_card_container}>
      <div className={"row"}>
        <div className={`col-4 col-md-3 ${style.gallery_img_wrapper}`}>
          <div className={style.image_wrapper}>
            <Image src={`${CONFIG.baseUrl}${data?.images?.data[0]?.attributes.url}`} alt="event" width={500} height={500}/>
          </div>
        </div>
        <div className={`col-8 col-md-9 ${style.gallery_data_wrapper}`}>
          <div className={style.gallery_card_title}>{data.title}</div>
          <div className={style.gallery_card_name}>{data.sub_title}</div>
          <div className={style.gallery_card_content}>{data.description}</div>
        </div>
      </div>
    </div>
  );
};
export default GalleryCard;
