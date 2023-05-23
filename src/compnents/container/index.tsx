import React from "react";
import style from "./Container.module.scss";

type containerProps = {
  children: any;
  noPadding?:boolean
};

const Container: React.FC<containerProps> = ({ noPadding,children }) => {
  return <div className={`${style.container} ${noPadding?style.no_padding:""}`}>{children}</div>;
};

export default Container;
