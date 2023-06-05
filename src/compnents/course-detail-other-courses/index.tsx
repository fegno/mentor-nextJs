import React from "react";
import style from "./CourseDetailOtherCourses.module.scss";
import HomepageCourses from "../homepage-courses";

const CourseDetailOtherCourses: React.FC = () => {
  return (
    <div className={style.other_courses}>
      <div className={style.title}>Other courses</div>
      <div className={style.description}>
        Mentor College offers a wide range of future-ready courses from the
        field of computer science that is aimed at crafting you into an expert
        under the guidance of those who already excel at their respective
        fields. Given below are some of the other courses that you may be
        interested in:
      </div>
      <HomepageCourses hasContainer/>
    </div>
  );
};

export default CourseDetailOtherCourses;
