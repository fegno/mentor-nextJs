import React from "react";
import style from "./Title.module.scss";
type AnimatedTitleProps = {
  title: string;
  subTitle: string;
  color: "pink" | "blue" | "green" ;
};
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subTitle,
  color ,
  ...props
}) => {
  return (
    <div className={`${style.title} ${style[color]}`}>
      <div className={style.main}>
        <span className={style.title}>{title}</span>
        <span className={style.wrapper}>
          {[1, 2, 3, 4, 5].map((item) => {
            return <span className={style.icon} key={item}></span>;
          })}
        </span>
      </div>
      <div className={style.sub}>{subTitle}</div>
    </div>
  );
};
export default AnimatedTitle;
