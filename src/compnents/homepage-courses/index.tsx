import React, { useCallback, useEffect, useState } from "react";
import style from "./HomepageCourses.module.scss";
import HomepageCoursesWeb from "../homepage-courses-web";
import HomepageCoursesMobile from "../hompepage-courses-mobile";
import Container from "../container";
import { COURSES } from "./const";
import { http } from "@/axios/http";

type coursesProps={
  hasContainer?:boolean
}

const HomepageCourses: React.FC<coursesProps> = ({hasContainer}) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [data,setData] = useState([]);
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
    http.get('courses?populate=deep').then((res)=>{
      setData(res.data.data)
    })
  }, []); 

  return (
    <div className={style.courses}>
      {isResponsive ? (
        <Container>
          <HomepageCoursesMobile courses={data} />
        </Container>
      ) : (
        <HomepageCoursesWeb courses={data} hasContainer={hasContainer} />
      )}
    </div>
  );
};

export default HomepageCourses;
