import React, { useState } from "react";
import style from "./CourseDetailAbout.module.scss";
import icon_who from "../../assets/course-about-who.png";
import icon_what from "../../assets/course-about-what.png";
import CourseAboutCard from "../course-about-card";

const CourseDetailAbout: React.FC = () => {
  const CARDS = [
    {
      title: "Who this course is for",
      description:
        "As a student on the Machine Learning MSc, you will develop an understanding of the principles underlying the development and application of new techniques in this area, alongside an awareness of, and ability to analyse the range and scope of algorithms and approaches available, and design, develop and evaluate appropriate algorithms and methods for new problems and applications.",
      icon: icon_who.src,
    },
    {
      title: "What this course will give you",
      description:
        "As a student on the Machine Learning MSc, you will develop an understanding of the principles underlying the development and application of new techniques in this area, alongside an awareness of, and ability to analyse the range and scope of algorithms and approaches available, and design, develop and evaluate appropriate algorithms and methods for new problems and applications. ",
      icon: icon_what.src,
    },
  ];



  return (
    <div className={style.course_detail_about}>
      <div className={style.title}>About this degree</div>
      <div className={style.description}>
        As a student on the Machine Learning MSc, you will develop an
        understanding of the principles underlying the development and
        application of new techniques in this area, alongside an awareness of,
        and ability to analyse the range and scope of algorithms and approaches
        available, and design, develop and evaluate appropriate algorithms and
        methods for new problems and applications.
      </div>
      <div className={`row ${style.card_wrapper}`}>
        {CARDS.map((card: any, index: number) => {
          return (
            <div className="col-12 col-lg-6 mb-4" key={index}>
             <CourseAboutCard data={card}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailAbout;
