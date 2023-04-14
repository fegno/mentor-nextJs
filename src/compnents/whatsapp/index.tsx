import React from "react";
import style from "./Whatsapp.module.scss";
import icon from "../../assets/whatsapp.svg";
import Link from "next/link";

const Whatsapp: React.FC = () => {
  return (
    <div className={style.whatsapp}>
      <Link href="https://wa.me/9745680111" target="_blank">
        <img src={icon.src} alt="whatsapp" />
      </Link>
    </div>
  );
};

export default Whatsapp;
