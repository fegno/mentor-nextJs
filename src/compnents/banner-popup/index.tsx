import React, { useEffect, useRef } from "react";
import style from "./Popup.module.scss";
import { gsap } from "gsap";
const BannerPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const modal = useRef<any>(null);
  useEffect(() => {
    if (isOpen) {
      gsap.to(modal.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
      });
    } else {
      gsap.to(modal.current, {
        y: `200%`,
        opacity: 0,
        duration: 1.2,
      });
    }
  }, [isOpen]);
  const onScrollHandler = () => {
    isOpen && onClose();
  };
  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  });
  return <div className={style.popup} ref={modal} onClick={onClose}></div>;
};
export default BannerPopup;
