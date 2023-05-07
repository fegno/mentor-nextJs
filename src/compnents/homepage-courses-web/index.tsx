import React, { useState } from "react";
import style from "./HomepageCoursesWeb.module.scss";
import baase_image from "../../assets/courses-base.svg";
import CustomModal from "../modal";
import CoursesTab from "../courses-tab";
import Button from "../button";
import CustomButton from "../custom-button";
import { BsArrowRightCircle } from "react-icons/bs";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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

  const particlesInit = async (main: any) => {
    await loadFull(main);
};


const particlesOptions:any = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "top",
      enable: true,
      outMode: "out",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.9,
    },
    shape: {
      type: "edge",
    },
    size: {
      random: true,
      value: 3,
    },
  },
detectRetina: true,
}

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
            onClick={() => {
              handleCourseClick(index);
            }}
          >
            <div className={`${style.course_icon} ${style[course.clasname]}`}>
              <img src={course.gif} />
            </div>
            <div className={`${style.course_title} ${style[course.clasname]}`}>
              <div>B.Tech in</div>
              <div>{course.text}</div>
              <div className={style.view_btn}>
                <button >
                  View details <BsArrowRightCircle />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className={style.particle_canvas}>
        <div className={style.inner_wrapper}>
          <div className={style.title}> B.Tech</div>
          <div className={style.particles}>
            <Particles init={particlesInit} options={particlesOptions} url="http://foo.bar/particles.json"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCoursesWeb;
