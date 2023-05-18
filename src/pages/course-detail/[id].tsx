import React, { useState, useEffect } from "react";
import style from "./CourseDetail.module.scss";
import ml_image from "../../assets/course-listing/machine-learning-examples-applications 1.png";
import Container from "@/compnents/container";
import CourseListingCard from "@/compnents/course-listing-card";
import CourseDetailVideoSection from "@/compnents/course-detail-video-section";
import CourseDetailOtherCourses from "@/compnents/course-detail-other-courses";
import CourseDetailAbout from "@/compnents/course-detail-about";
import CourseDetailFeatures from "@/compnents/course-detail-features";
import Mentors from "@/compnents/mentors";
import ListExpand from "@/compnents/list-expand";
import { http } from "@/axios/http";
import { useRouter } from "next/router";
import Loading from "@/compnents/loading";
const CourseDetail: React.FC = () => {
  const [data, setData]: any = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id }: any = router.query;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await http.get(`/courses/${id}?populate=deep`);
      if (response.data.data) {
        setData(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  const DETAILS = {
    section1: {
      title: "Machine Learning and AI",
      description:
        "Machine learning is a branch of AI that gives computer systems the ability to automatically learn and improve from experience, rather than being explicitly programmed. In machine learning, computers use massive sets of data and apply algorithms to train on and make predictions",
      image: "",
    },
    video_section: {
      title: "What is Machine Learning and AI?",
      sub_title: "About the field",
      video_url: "https://www.youtube.com/watch?v=9QErWiClGjM",
    },
  };

  return (
    <div className={style.course_detail}>
      {loading && <Loading />}
      <div className={style.bg_group}>
        <Container>
          <>
            <section>
              <CourseListingCard data={data.attributes} />
            </section>
            <section>
              <CourseDetailVideoSection data={data.attributes} />
            </section>
            <section>
              <CourseDetailFeatures data={data?.attributes} />
            </section>
          </>
        </Container>
      </div>
      <div>
        <Container>
          <section className={` ${style.center}`}>
            <CourseDetailAbout data={data?.attributes} />
          </section>
          <section>
            <ListExpand
              jobs={data?.attributes?.jobs}
              courses={data?.attributes?.courses}
            />
          </section>
        </Container>
      </div>
      <div className={style.bg_group}>
        <Container>
          <section className={style.mentors}>
            <Mentors />
          </section>
          <section>
            <CourseDetailOtherCourses />
          </section>
        </Container>
      </div>
    </div>
  );
};

export default CourseDetail;
