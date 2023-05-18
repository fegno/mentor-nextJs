import React, { useEffect, useState } from "react";
import style from "./CourseListing.module.scss";
import CourseListingCard from "@/compnents/course-listing-card";
import Container from "@/compnents/container";
import { http } from "@/axios/http";

const CourseListing: React.FC = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    http.get('courses?populate=deep').then((res) => { setData(res.data.data) }).catch((err) => {
    })
  }, [])

  return (
    <div className={style.course_listing}>
      <Container>
        {data.map((course: any, index: number) => {
          return (
            <div className={style.card_wrapper} key={index}>
              <CourseListingCard
                imageLeft={index % 2 !== 0}
                marginRight={index % 2 == 0}
                data={course.attributes}
                id={course.id}
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
