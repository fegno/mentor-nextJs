import React from "react";
import style from "./Loading.module.scss";

const Loading: React.FC = () => {
  return <div className={style.loading}>
    <span className={style.spinner}></span>
    Loading
  </div>;
};

export default Loading;
