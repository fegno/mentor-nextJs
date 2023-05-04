import React from "react";
import style from "./CourseListing.module.scss";
import CourseListingCard from "@/compnents/course-listing-card";
import Container from "@/compnents/container";
import ml from "../../assets/course-listing/1.png";
import artificial from "../../assets/course-listing/2.png";
import cloud from "../../assets/course-listing/3.png";
import cyber from "../../assets/course-listing/4.png";
import iot from "../../assets/course-listing/5.png";
import blockchain from "../../assets/course-listing/6.png";

const CourseListing: React.FC = () => {
  const COURSES = [
    {
      title: "Artificial Intelligence and Machine Learning",
      description:
        "B.Tech in Artificial Intelligence and Machine Learning combines computer science, mathematics, and statistics to teach students how to develop intelligent systems. Graduates of this program can pursue careers in fields such as robotics, healthcare, and finance, where machine learning technologies are increasingly important.",
      slug: "",
      image: ml.src,
    },
    {
      title: "Artificial Intelligence and Data Science",
      description:"B.Tech in Artificial Intelligence and Data Science is a multidisciplinary program that combines the fields of computer science, statistics, and mathematics to provide students with the skills and knowledge required to work with data and create intelligent systems. Graduates of this program can pursue careers in industries such as finance, healthcare, and technology, where the demand for AI and data science professionals is growing rapidly.",
      slug: "",
      image: artificial.src,
    },
    {
      title: "Computer Science",
      description:"B.Tech in Computer Science is designed to provide students with the skills and knowledge necessary to manage and deploy cloud-based applications and services. Graduates of this program can pursue careers as cloud architects, cloud engineers, and cloud developers in industries that rely on Computer Science technology.",
      slug: "",
      image: cloud.src,
    },
    {
      title: "Cyber Security",
      description:"B.Tech in Cyber Security prepares students to secure computer systems, networks, and data from unauthorized access, attacks, and cyber threats. Graduates of this program can pursue careers as security analysts, penetration testers, and cyber security engineers in industries such as finance, healthcare, and government.",
      slug: "",
      image: cyber.src,
    },
    {
      title: "Internet of Things",
      description:"B.Tech in IoT (Internet of Things) teaches students how to design and develop systems that connect devices and sensors to the internet, enabling communication and data exchange. Graduates of this program can pursue careers in industries such as healthcare, manufacturing, and transportation, where IoT technology is increasingly being used to improve efficiency and productivity.",
      slug: "",
      image: iot.src,
    },
    {
      title: "Blockchain",
      description:"B.Tech in Blockchain teaches students about the technology behind digital currencies like Bitcoin and how to develop decentralized applications using blockchain. Graduates of this program can pursue careers in industries such as finance, healthcare, and government, where blockchain technology is increasingly being adopted.",
      slug: "",
      image: blockchain.src,
    },
  ];
  return (
    <div className={style.course_listing}>
      <Container>
        {COURSES.map((course: any, index: number) => {
          return (
            <div className={style.card_wrapper} key={index}>
              <CourseListingCard
                imageLeft={index % 2 !== 0}
                marginRight={index % 2 == 0}
                data={course}
                showDetailButton
              />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default CourseListing;
