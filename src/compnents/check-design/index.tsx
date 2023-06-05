import React, { useRef, useState } from "react";
import style from "./CheckDesign.module.scss";
import check from "../../assets/Background.png";

type checkDesignProps = {
  children?: any;
};

const CheckDesign: React.FC<checkDesignProps> = ({ children }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 });


  const gradientRef: any = useRef(null);
  const mouseHandler = (e: any) => {
    gradientRef.current.style.display="block";
    const { offsetX, offsetY } = e.nativeEvent;
    setPosition({ x: offsetX, y: offsetY });
  };

  const handleMosueLeave = () => {
    gradientRef.current.style.display="none";
  };

  return (
    <div
      className={style.check_design}
      onMouseMove={mouseHandler}
      onMouseLeave={handleMosueLeave}
    >
      <img src={check.src} className={style.cover} />
      <div className={style.gradiant} ref={gradientRef} style={{left:position.x,top:position.y}}></div>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default CheckDesign;
