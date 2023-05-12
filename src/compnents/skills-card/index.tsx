import React from "react";
import style from "./SkillsCard.module.scss";
import { CONFIG } from "@/config/config";

type skillsCardProps = {
  data: any;
};

const SkillsCard: React.FC<skillsCardProps> = ({ data }) => {
  return (
    <div className={style.skills_card}>
      <div className={style.icon_wrapper}>
        <img src={`${CONFIG.baseUrl}${data?.icon.data?.attributes?.url}`} />
      </div>
      <div className={style.border}></div>
      <div className={style.data}>
        <span>{data.title}: </span>
        {data.description}
      </div>
    </div>
  );
};

export default SkillsCard;
