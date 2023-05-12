import React from "react";
import Link from "next/link";
import logo from "../../assets/mentor-logo-full.svg";
import NewsletterForm from "../newsletter-form";
import Container from "../container";
import style from "./Footer.module.scss";
import { CONST } from "./Const";
import Whatsapp from "../whatsapp";
import acte from "../../assets/aicte.svg";
import sm from "../../assets/sm.svg";
import ApplyNow from "../apply-now";

const Footer: React.FC = () => {

  const AWARDS = [
    { title: "All India Council for Technical Education", image: acte.src },
    { title: "Kerala Startup Mission", image: sm.src }
  ]


  return (
    <footer className={`${style.footer}`}>
      <div className={style.floating}>
        <Whatsapp />
        <ApplyNow />
      </div>
      <Container>
        <div className="row">
          <div
            className={`col-12 col-lg-6 col-xl-5 mb-4 ${style.address_wrapper}`}
          >
            <div className={style.inner_wrapper}>
              <div className="row">
                <div className="col-12 mb-5">
                  <a href="#">
                    <img src={logo.src} alt="Mentor" className={style.logo} />
                  </a>
                </div>
                <div className={`col-12 ${style.menus_mobile}`}>
                  <div className={style.menu_wrapper}>
                    {CONST.MENU.map((menu: any, index: number) => {
                      return (
                        <div className={`d-block ${style.menu}`} key={index}>
                          <Link href={menu.link}>{menu.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.title}>
                    Mentor Academy of Excellence
                  </div>
                  <div className={style.address}>
                    Ettapilly, Mannathoor(PO), Pampakuda via Muvattupuzha
                    Ernakulam, Kerala 686667, INDIA Contact : 6282089866
                  </div>
                </div>
                <div className="col-12">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
          <div className="`col-12 col-lg-6 col-xl-7">
            <div className="row"
            >
              <div
                className={`col-12 col-lg-6 col-xl-4 mb-4 ${style.links_wrapper}`}
              >
                <div className={`row ${style.social_links}`}>
                  {CONST.SOCIAL_LINKS.map((social: any, index: number) => {
                    return (
                      <div className={`col-6 col-lg-12 ${style.link}`} key={index}>
                        <Link href={social.link} target="_blank">
                          <img src={social.icon} />
                          <div className={style.social_media}>{social.title}</div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className={`col-12 col-lg-6 col-xl-4 mb-4 ${style.menus_wrapper}`}
              >
                {CONST.MENU.map((menu: any, index: number) => {
                  return (
                    <div className={`d-block ${style.menu}`} key={index}>
                      <Link href={menu.link}>{menu.title}</Link>
                    </div>
                  );
                })}
              </div>
              <div
                className={`col-12 col-lg-6 col-xl-4 mb-4 ${style.courses_list_wrapper}`}
              >
                {CONST.COURSES.map((course: any, index: number) => {
                  return (
                    <div className={`d-block`} key={index}>
                      <Link href={course.link}>{course.title}</Link>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
        <div className="row pt-4">
            <div className={style.bottom_title}>
              Recognized by :
            </div>
          <div className="col-12 col-xl-6 pb-4">
            <div className={style.awards_wrapper}>
              {AWARDS.map((awards: any, index: number) => {
                return <div className={style.award} key={index}>
                  <img src={awards.image} />
                  <span className={style.title}>{awards.title}</span>
                </div>
              })}
            </div>
          </div>
          <div className={`col-12 col-xl-6 pb-4 ${style.copy_right}`}>
            &copy; MENTOR COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
