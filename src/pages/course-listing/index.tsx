import React from "react";
import style from "./CourseListing.module.scss";
import CourseListingCard from "@/compnents/course-listing-card";
import Container from "@/compnents/container";
import ml from "../../assets/course-listing/ml-ai.svg";
const CourseListing: React.FC = () => {

  const COURSES = [
    {
      title: "Machine Learning and AI",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Cloud Computing",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Cyber Security",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Btech in Internet of Things",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Btech in Blockchain",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning.",
      slug: "",
      image: ml.src,
    },
  ];
  return (
    <div className={style.course_listing}>
      <Container>
        {COURSES.map((course: any, index: number) => {
          return (
            <div className={style.card_wrapper} key={index}>
              <CourseListingCard imageLeft={index % 2 !== 0} data={course}/>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default CourseListing;
