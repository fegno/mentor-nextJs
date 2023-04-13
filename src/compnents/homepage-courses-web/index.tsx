import React from "react";
import style from "./HomepageCoursesWeb.module.scss";
import baase_image from "../../assets/courses-base.svg";

type coursesProps = {
  courses: any;
};

const HomepageCoursesWeb: React.FC<coursesProps> = ({ courses }: any) => {
  return (
    <div className={style.courses_wrapper}>
      <img src={baase_image.src} alt="courses" />
      {courses.map((course: any, index: number) => {
        return (
          <div className={style.course_wrapper} key={index}>
            <div className={`${style.course_icon} ${style[course.clasname]}`}>
              <img src={course.gif} />
            </div>
            <div className={`${style.course_title} ${style[course.clasname]}`}>
              {course.text}
            </div>
          </div>
        );
      })}
      <div className={style.particle_canvas}>
        <div className={style.inner_wrapper}>
          <div className={style.title}> B.Tech</div>
          <div className={style.particles}></div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCoursesWeb;
