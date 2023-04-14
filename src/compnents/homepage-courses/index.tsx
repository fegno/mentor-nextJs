import React, { useCallback, useEffect, useState } from "react";
import style from "./HomepageCourses.module.scss";
import HomepageCoursesWeb from "../homepage-courses-web";
import HomepageCoursesMobile from "../hompepage-courses-mobile";
import Container from "../container";
import intellegence from "../../assets/gif/Ai and machine learning 2.gif"
import data_science from "../../assets/gif/Ai and data science.gif"
import cloud from "../../assets/gif/cloud.gif"
import cyber_security from "../../assets/gif/cyber security.gif"
import iot from "../../assets/gif/iot.gif"
import blockchain from "../../assets/gif/blockchain.gif"

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
      title: "Btech in Artificial Intelligence and Machine Learning",
      gif: intellegence.src,
      clasname: "top_left",
      text: "Btech in Artificial Intelligence and Machine Learning",
    },
    {
      title: "Btech in Artificial Intelligence and Data Science",
      gif: data_science.src,
      clasname: "top-right",
      text: "Btech in Artificial Intelligence and Data Science",
    },
    {
      title: "Btech in Cloud Computing",
      gif: cloud.src,
      clasname: "middle-left",
      text: "Btech in Cloud Computing",
    },
    {
      title: "Btech in Cyber Security",
      gif: cyber_security.src,
      clasname: "middle-right",
      text: "Btech in Cyber Security",
    },
    {
      title: "Btech in Internet of Things",
      gif: iot.src,
      clasname: "bottom-left",
      text: "Btech in Internet of Things",
    },
    {
      title: "Btech in Blockchain",
      gif: blockchain.src,
      clasname: "bottom-right",
      text: "Btech in Blockchain",
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
