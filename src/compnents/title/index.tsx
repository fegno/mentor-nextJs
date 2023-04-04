import React from "react";
import style from "./Title.module.scss";
type TitleProps = {
  title: string;
  align?:"center"|"left"|"right"
};
const Title: React.FC<TitleProps> = ({
  title,
  align= "center",
  ...props
}) => {
  return (
    <div className={`${style.title} ${style[align]}`}>
      <h2 className={style.main}>{title}</h2>
    </div>
  );
};
export default Title;
