import React from "react";
import style from "./Benefits.module.scss";
type BenefitsProps = {
  title: string;
  icon: string;
};
const BenefitsCard: React.FC<BenefitsProps> = ({ title, icon, ...props }) => {
  return (
    <div className={style.card}>
      <div className={style.icon}>
        <img src={icon} alt="icon" />
      </div>
        <div className={style.title}>{title}</div>
    </div>
  );
};
export default BenefitsCard;
