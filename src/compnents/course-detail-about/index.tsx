import React, { useState } from "react";
import style from "./CourseDetailAbout.module.scss";
import icon_who from "../../assets/course-about-who.png";
import icon_what from "../../assets/course-about-what.png";
import CourseAboutCard from "../course-about-card";

type aboutProps = {
  data: any
}

const CourseDetailAbout: React.FC<aboutProps> = ({ data }) => {
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
        {data?.about_this_degree}
      </div>
      <div className={`row ${style.card_wrapper}`}>

        <div className="col-12 col-lg-6 mb-4" >
          <CourseAboutCard data={data?.who_this_course_is_for} title="Whom this course is for" icon={icon_who.src}/>
        </div>
        <div className="col-12 col-lg-6 mb-4" >
          <CourseAboutCard data={data?.what_this_course_will_give} title="What this course will give you" icon={icon_what.src}/>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailAbout;
