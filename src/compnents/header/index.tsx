import React, { useEffect, useRef, useState } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { gsap } from "gsap";
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
          }else{
            setHideHeader(false)
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
          <a className="navbar-brand" href="#">
            <img src={logo.src} alt="Mentor" />
          </a>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Admisson
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
