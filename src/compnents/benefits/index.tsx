import React from "react";
import style from "./Benefits.module.scss";
type BenefitsProps = {
  title: string;
};
const BenefitsCard : React.FC<BenefitsProps> = ({
  title,
  ...props
}) => {
  return (
    <div className={style.card}>
      <div className={style.title}>
        <div className={style.content}>
        {title}
        </div>
      </div>
    </div>
  );
};
export default BenefitsCard;
