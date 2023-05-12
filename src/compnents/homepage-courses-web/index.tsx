import React, { useState } from "react";
import style from "./HomepageCoursesWeb.module.scss";
import baase_image from "../../assets/courses-base.svg";
import CustomModal from "../modal";
import CoursesTab from "../courses-tab";
import HologramButton from "../hologram-button";
import particle from "../../assets/particle.gif";
import { CONFIG } from "@/config/config";

type coursesProps = {
  courses: any;
  hasContainer?: boolean
};

const HomepageCoursesWeb: React.FC<coursesProps> = ({ courses, hasContainer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(0);

  const handleCourseClick = (index: number) => {
    setIsModalOpen(true);
    setSelectedCourse(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  let course = courses[selectedCourse];


  return (
    <div className={`${style.courses_wrapper} ${hasContainer ? style.small : ""}`}>
      <CustomModal isOpen={isModalOpen} close={handleCloseModal}>
        <CoursesTab data={course} />
      </CustomModal>
      <img src={baase_image.src} alt="courses" />
      {courses.map((course: any, index: number) => {
        return (
          <div
            className={style.course_wrapper}
            key={index}
            data-id={index+1}
            onClick={() => {
              handleCourseClick(index);
            }}
          >
            <div className={`${style.course_icon} ${style[course.clasname]}`}>
              <img src={`${CONFIG.baseUrl}${course?.attributes?.gif_icon?.data?.attributes?.url}`} />
            </div>
            <div className={`${style.course_title} ${style[course.clasname]}`}>
              <div>B.Tech in</div>
              <div>{course?.attributes?.title_short}</div>
              <div className={style.button}>
                <HologramButton />
              </div>
            </div>
          </div>
        );
      })}
      <div className={style.particle_canvas}>
        <div className={style.inner_wrapper}>
          <div className={style.title}> B.Tech</div>
          <div className={style.particles}>
            {/* <ParticlesComponent /> */}
            <img src={particle.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCoursesWeb;
