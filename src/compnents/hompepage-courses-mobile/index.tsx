import React, { useState } from "react";
import style from "./HomepageCoursesMobile.module.scss";
import large_holog from "../../assets/gif_glow_Large.svg";
import small_holog from "../../assets/gif_glow_small.svg";
import CustomModal from "../modal";
import CoursesTab from "../courses-tab";
import HologramButton from "../hologram-button";
import particle from "../../assets/particle.gif";
import { CONFIG } from "@/config/config";

type coursesMobileProps = {
  courses: any;
};

const HomepageCoursesMobile: React.FC<coursesMobileProps> = ({
  courses,
}: any) => {
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
    <div className={style.courses_mobile_wrapper}>
      <CustomModal isOpen={isModalOpen} close={handleCloseModal}>
        <CoursesTab data={course} />
      </CustomModal>

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
          <img src={large_holog.src} alt="holo" className={style.large_holog}/>
          <div className={style.title_wrapper}>
            <div className={style.text_wrapper}>
            <div className={style.title}>B.Tech CSE</div>
            <div className={style.sub_title}>Courses</div>
            </div>
            <img src={particle.src} className={style.particle}/>
          </div>
        </div>
      </div>
      {courses &&
        courses.length > 0 &&
        courses.map((course: any, index: number) => {
          return (
            <div
              className={`${style.course} ${index % 2 == 0 ? style.left : style.right
                }`}
              key={index}
              onClick={() => { handleCourseClick(index) }}
            >
              <div className={style.hologram_wrapper}>
                <img
                  src={small_holog.src}
                  alt="hologram"
                  className={style.hologram_small}
                />
                <img
                  src={`${CONFIG.baseUrl}${course?.attributes?.gif_icon?.data?.attributes?.url}`}
                  alt="course"
                  className={style.couse_vector}
                />
              </div>
              <div className={style.couse_title}><div>B.Tech in </div>{course?.attributes?.title_short}
              <div className={style.btn}>
                <HologramButton />
              </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomepageCoursesMobile;
