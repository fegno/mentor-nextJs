import React from "react";
import style from "./spinner.module.scss";
import spinner from "../../assets/spinner.png";

const Spinner: React.FC = () => {
  return (
    <div className={style.spinner}>
        <img src={spinner.src} alt="spinner" className={style.image} />
    </div>
  );
};

export default Spinner;
