import React, { useEffect, useState } from "react";
import style from "./CustomHeader.module.scss";
import MobileMenu from "../mobile-menu";
import logo from "../../assets/logo.svg";
import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const CustomHeader: React.FC = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHideHeader(true);
        setSubMenuOpen(false)
      } else {
        setHideHeader(false);
      }
    });
    window.addEventListener('resize',()=>{
        if(window.innerWidth>991){
            setSubMenuOpen(false)
        }else{
          setSubMenuOpen(false)
        }
    })
  }, []);

  const MENUS = [
    { title: "Introduction", link: "/about" },
    { title: "Programs", link: "/course-listing" },
    // { title: "Campus", link: "#" },
    { title: "Events", link: "/events" },
    { title: "News and blog", link: "/blog-and-views" },
    { title: "Contact Us", link: "/contact" },
  ];

  const closeMenu = () =>{
    setSubMenuOpen(false)
  }

  return (
    <div className={`${style.custom_header} ${hideHeader ? style.hide : ""}`}>
      <MobileMenu isOpen={subMenuOpen} menus={MENUS} closeMenu={closeMenu}/>
      <div className={` ${style.wrapper}`}>
        <div className={`container ${style.inner_wrapper}`}>
          <div className={style.logo} onClick={closeMenu}>
            <Link href="/">
              <img src={logo.src} alt="logo" />
            </Link>
          </div>

          <ul className={style.menus}>
            {MENUS.map((menu: any, index: number) => {
              return (
                <div className={style.menu} key={index}>
                  <Link href={menu.link}>{menu.title}</Link>
                </div>
              );
            })}
          </ul>
          <div className={style.icons}>
            {!subMenuOpen && (
              <button
                onClick={() => {
                  setSubMenuOpen(true);
                }}
              >
                <RiMenu4Line />
              </button>
            )}
            {
                subMenuOpen&& <button onClick={closeMenu}>
                    <AiOutlineClose />
                </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
