import React from "react";
import style from "./Container.module.scss";

type containerProps = {
  children: any;
};

const Container: React.FC<containerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
