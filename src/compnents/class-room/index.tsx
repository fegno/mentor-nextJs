import React from "react";
import style from "./ClassRoom.module.scss";
import classroom from "../../assets/classroom.png";

const HomePageClassroom: React.FC = () => {
  return (
    <div className={style.class_room}>
      <img src={classroom.src} alt="classroom" />
    </div>
  );
};

export default HomePageClassroom;
