import React, { useState, useEffect } from "react";
import style from "./CourseAboutCard.module.scss";
import arrow from "../../assets/arrow-down.png";

type cardProps = {
  data: any;
  title:string;
  icon:string
};

const CourseAboutCard: React.FC<cardProps> = ({ data ,title ,icon}) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleClick = () => {
    setShowDescription(!showDescription);
  };

  const handleDescripption = () => {
    if (window.innerWidth > 991) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  };

  useEffect(() => {
    handleDescripption();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", handleDescripption);
  }
  return (
    <div
      className={`card-glowing-blue rounded-20 animated-border-glow ${style.card}`}
    >
      <div className={style.head}>
        <div className={style.inner_wrapper}>
          <img src={icon} alt="icon" className={style.icon} />
          <div className={style.title}>{title}</div>
        </div>
        <img
          src={arrow.src}
          alt="arrow"
          className={style.arrow}
          onClick={handleToggleClick}
        />
      </div>
      {showDescription && (
        <div className={style.description}>{data}</div>
      )}
    </div>
  );
};

export default CourseAboutCard;
