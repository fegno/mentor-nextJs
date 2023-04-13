import React, { useState, useEffect } from "react";
import style from "./ClassRoom.module.scss";
import classroom from "../../assets/classroom.png";
import classroom_mobile from "../../assets/classroom-mobile-svg.svg";

const HomePageClassroom: React.FC = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    const updateScreenType = () => {
      if (window.innerWidth < 991) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };
    updateScreenType();
    window.addEventListener("resize", updateScreenType);
  }, []);

  return (
    <div className={style.class_room}>
      {isResponsive ? (
        <img src={classroom_mobile.src} alt="classroom" />
      ) : (
        <img src={classroom.src} alt="classroom" />
      )}
    </div>
  );
};

export default HomePageClassroom;
