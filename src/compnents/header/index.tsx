import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { gsap } from "gsap";
import Link from "next/link";
const Header: React.FC = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const HEADER = useRef<any>(null);
  useEffect(() => {
    HEADER.current &&
      gsap.to(HEADER.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    });
  }, []);

  const MENUS = [
    { title: "Introduction", link: "/about" },
    { title: "Curriculum", link: "/course-listing" },
    { title: "Campus", link: "#" },
    { title: "Events", link: "/events" },
    { title: "News and blog", link: "/blog-and-views" },
    { title: "Contact Us", link: "/contact" },
  ];
  return (
    <header
      className={`${style.header} ${hideHeader ? style.hide : ""}`}
      ref={HEADER}
    >
      <div className={style.container}>
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" href="/">
            <img src={logo.src} alt="Mentor" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {MENUS.map((menu: any, index: number) => {
                return (
                  <li className="nav-item" key={`menu-${index}`}>
                    <Link className="nav-link" href={menu.link}>
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
