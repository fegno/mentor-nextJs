import React from "react";
import style from "./AchievementCard.module.scss";
import image from "../../assets/achievement.jpg";
import { BsArrowRightCircle } from "react-icons/bs";
import { CONFIG } from "@/config/config";
import Image from "next/image";

type achievementCardProps = {
  data: any;
};

const AchievementCard: React.FC<achievementCardProps> = ({ data }) => {
  return (
    <div className={style.achievement_card}>
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className={style.image_wrapper}>
            <Image
              src={`${CONFIG.baseUrl}${data?.attributes?.cover_image?.data?.attributes?.url}`}
              alt="achievement-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={`col-12 col-lg-7 ${style.content_wrapper}`}>
          <div className={style.content}>
            <div className={style.title}>{data?.attributes?.title}</div>
            <div className={style.desc}>{data?.attributes?.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
