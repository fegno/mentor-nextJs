import React from "react";
import style from "./SkillsCard.module.scss";

type skillsCardProps = {
  data: any;
};

const SkillsCard: React.FC<skillsCardProps> = ({ data }) => {
  return (
    <div className={style.skills_card}>
      <div className={style.icon_wrapper}>
        <img src={data.icon} />
      </div>
      <div className={style.border}></div>
      <div className={style.data}>
        <span>{data.title}:</span>
        {data.description}
      </div>
    </div>
  );
};

export default SkillsCard;
