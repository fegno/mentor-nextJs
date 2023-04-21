import React from "react";
import style from "./Modal.module.scss";
import closeIcon from "../../../src/assets/close.svg";
import { ReactNode } from "react";

type customModalProps = {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
};

const CustomModal: React.FC<customModalProps> = ({
  isOpen,
  close,
  children,
}) => {
  return (
    <div className={`${style.custom_modal} ${isOpen ? style.open : ""}`}>
      <div className={style.inner_wrapper}>
        <button className={style.btn_close} onClick={close}>
          <img src={closeIcon.src} />
        </button>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
