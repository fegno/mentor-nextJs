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
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Introduction
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Curriculum
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Campus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  News and blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
