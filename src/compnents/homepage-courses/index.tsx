import React, { useCallback, useEffect, useState } from "react";
import style from "./HomepageCourses.module.scss";
import HomepageCoursesWeb from "../homepage-courses-web";
import brain from "../../assets/gif/head.gif";
import intelligence from "../../assets/gif/intelligence.gif";
import HomepageCoursesMobile from "../hompepage-courses-mobile";
import Container from "../container";

const HomepageCourses: React.FC = () => {
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

  const COURSES = [
    {
      title: "Machine Learning",
      gif: brain.src,
      clasname: "top_left",
      text: "B.tech in Artificial Intelligence and Machine Learning ",
    },
    {
      title: "Machine Learning",
      gif: intelligence.src,
      clasname: "top-right",
      text: "B.tech in Artificial Intelligence and Data Science",
    },
    {
      title: "Machine Learning",
      gif: intelligence.src,
      clasname: "middle-left",
      text: "B.tech in Artificial Intelligence and Data Science",
    },
    {
      title: "Machine Learning",
      gif: brain.src,
      clasname: "middle-right",
      text: "B.tech in Artificial Intelligence and Machine Learning",
    },
    {
      title: "Machine Learning",
      gif: brain.src,
      clasname: "bottom-left",
      text: "B.tech in Internet of Things",
    },
    {
      title: "Machine Learning",
      gif: intelligence.src,
      clasname: "bottom-right",
      text: "B.tech in Cyber Security",
    },
  ];

  return (
    <div className={style.courses}>
      {isResponsive ? (
        <Container>
          <HomepageCoursesMobile courses={COURSES} />
        </Container>
      ) : (
        <HomepageCoursesWeb courses={COURSES} />
      )}
    </div>
  );
};

export default HomepageCourses;
