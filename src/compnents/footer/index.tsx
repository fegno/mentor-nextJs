import React from "react";
import Link from "next/link";
import logo from "../../assets/logo.png";
import NewsletterForm from "../newsletter-form";
import Container from "../container";
import style from "./Footer.module.scss";
import { CONST } from "./Const";

const Footer: React.FC = () => {
  return (
    <footer className={`${style.footer}`}>
      <Container>
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-3 mb-4">
            <div className={style.inner_wrapper}>
              <div className="row" style={{height:"286px"}}>
                <div className="col-12">
                  <a href="#">
                    <img src={logo.src} alt="Mentor" />
                  </a>
                </div>
                <div className="col-12">
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div> 
          <div className="col-12 col-lg-6 col-xl-3 mb-4">
            <div className="d-block">Ettapilly</div>
            <div className="d-block">Mannathoor(PO)</div>
            <div className="d-block">Pampakuda via</div>
            <div className="d-block">Muvattupuzha</div>
            <div className="d-block">Ernakulam</div>
            <div className="d-block">Kerala 686667</div>
            <div className="d-block">INDIA</div>
            <div className="d-block">Contact : 6282089866</div>
          </div>
          <div className="col-12 col-lg-6 col-xl-3 mb-4">
            {CONST.MENU.map((menu: any, index: number) => {
              return (
                <div className="d-block" key={index}>
                  <Link href={menu.link}>{menu.title}</Link>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-6 col-xl-3 mb-4">
            {CONST.COURSES.map((course: any, index: number) => {
              return (
                <div className="d-block" key={index}>
                  <Link href={course.link}>{course.title}</Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12">
            &copy; MENTOR COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
