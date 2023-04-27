import React from "react";
import style from "./JobChartCard.module.scss";

type jobCardProps = {
  title: string;
  image: string;
  imageSmall?:boolean
};

const JobChartModule: React.FC<jobCardProps> = ({ title, image ,imageSmall}) => {
  return (
    <div className={`${style.job_opp} ${imageSmall?style.small:""}`}>
      <div className={style.title}>{title}</div>
      <img src={image} alt="chart" className={`${style.chart}`} />
    </div>
  );
};

export default JobChartModule;
