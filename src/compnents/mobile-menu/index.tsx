import React from "react";
import style from "./MobileMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type mobileMenuProps = {
  isOpen: boolean;
  menus: any;
  closeMenu: () => void;
};

const MobileMenu: React.FC<mobileMenuProps> = ({
  isOpen,
  menus,
  closeMenu,
}) => {

  const router = useRouter();

  return (
    <div className={`${style.mobile_header} ${isOpen ? style.show : ""}`}>
      <div className={style.wrapper}>
        <div className={style.menus}>
          {menus.map((menu: any, index: number) => {
            return (
              <div className={`${style.menu} ${router.route== menu.link ?style.active:""}`} key={index} onClick={closeMenu}>
                <Link href={menu.link}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
