import React from "react";
import style from "./Title.module.scss";
type AnimatedTitleProps = {
  title: string;
  subTitle: string;
  color?: string;
};
const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subTitle,
  ...props
}) => {
  return (
    <div className={style.title}>
      <div className={style.main}>{title}</div>
      <div className={style.sub}>{subTitle}</div>
    </div>
  );
};
export default AnimatedTitle;
