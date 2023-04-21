import React from "react";
import style from "./CourseListingCard.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";

type cardProps = {
  imageLeft?: boolean;
  data: any;
};

const CourseListingCard: React.FC<cardProps> = ({ data, imageLeft }) => {
  return (
    <div className={`row ${style.course_card} ${imageLeft ? style.left : ""}`}>
      <div className={`col-12 col-lg-8 ${style.data_wrapper}`}>
        <div className={style.inner_wrapper}>
          <div className={style.title}>{data?.title}</div>
          <div className={style.description}>{data?.description}</div>
          <div className={style.btn_wrapper}>
            <button>
              View details{" "}
              <span className={style.icon}>
                <BsArrowRightCircle />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={`col-12 col-lg-4 ${style.image_wrapper}`}>
        <img src={data.image} alt="course-image" height="500px" />
      </div>
    </div>
  );
};

export default CourseListingCard;
