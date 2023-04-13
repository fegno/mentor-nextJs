import React from "react";
import style from "./HomepageCoursesMobile.module.scss";
import large_holog from "../../assets/big_hologram.svg";
import small_holog from "../../assets/small_hologram.svg";

type coursesMobileProps = {
  courses: any;
};

const HomepageCoursesMobile: React.FC<coursesMobileProps> = ({
  courses,
}: any) => {
  return (
    <div className={style.courses_mobile_wrapper}>
      {/* lines start */}
      <div className={`${style.line} ${style.large_top}`}></div>
      <div className={`${style.line} ${style.right}`}></div>
      <div className={`${style.line} ${style.left}`}></div>
      <div className={`${style.line} ${style.first_left}`}></div>
      <div className={`${style.line} ${style.first_right}`}></div>
      <div className={`${style.line} ${style.second_left}`}></div>
      <div className={`${style.line} ${style.second_right}`}></div>
      <div className={`${style.line} ${style.third_left}`}></div>
      <div className={`${style.line} ${style.third_right}`}></div>
      {/* lines end */}
      <div className={style.large_hologram}>
        <div className={style.large_hologram_image}>
          <img src={large_holog.src} alt="holo" />
          <div className={style.title_wrapper}>
            <div className={style.title}>BTech CSE</div>
            <div className={style.sub_title}>Courses</div>
          </div>
        </div>
      </div>
      {courses &&
        courses.length > 0 &&
        courses.map((course: any, index: number) => {
          return (
            <div
              className={`${style.course} ${
                index % 2 == 0 ? style.left : style.right
              }`}
              key={index}
            >
              <div className={style.hologram_wrapper}>
                <img
                  src={small_holog.src}
                  alt="hologram"
                  className={style.hologram_small}
                />
                <img
                  src={course.gif}
                  alt="course"
                  className={style.couse_vector}
                />
              </div>
              <div className={style.couse_title}>{course.text}</div>
            </div>
          );
        })}
    </div>
  );
};

export default HomepageCoursesMobile;
