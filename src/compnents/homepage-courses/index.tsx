import React, { useCallback, useEffect, useState } from "react";
import style from "./HomepageCourses.module.scss";
import HomepageCoursesWeb from "../homepage-courses-web";
import HomepageCoursesMobile from "../hompepage-courses-mobile";
import Container from "../container";
import { COURSES } from "./const";

type coursesProps={
  hasContainer?:boolean
}

const HomepageCourses: React.FC<coursesProps> = ({hasContainer}) => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const updateScreenType = () => {
      if (window.innerWidth < 991) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };
    updateScreenType();
    window.addEventListener("resize", () => {
      updateScreenType();
    });
  }, []); 

  return (
    <div className={style.courses}>
      {isResponsive ? (
        <Container>
          <HomepageCoursesMobile courses={COURSES} />
        </Container>
      ) : (
        <HomepageCoursesWeb courses={COURSES} hasContainer={hasContainer} />
      )}
    </div>
  );
};

export default HomepageCourses;
