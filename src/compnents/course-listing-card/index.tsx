import React from "react";
import style from "./CourseListingCard.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import { useRouter } from "next/router";

type cardProps = {
  imageLeft?: boolean;
  data: any;
  marginRight?: boolean;
  showDetailButton?: boolean;
};

const CourseListingCard: React.FC<cardProps> = ({
  data,
  imageLeft,
  marginRight,
  showDetailButton,
}) => {

  const router = useRouter();

  return (
    <div
      className={`row ${style.course_card} ${imageLeft ? style.left : ""} ${marginRight ? style.right : ""
        } ${!showDetailButton?style.detail:""}`}
    >
      <div className={`col-12 col-lg-7 ${style.data_wrapper} `}>
        <div className={style.inner_wrapper}>
          <div className={style.title}>{data?.title}</div>
          <div className={`col-12 col-lg-5 ${style.image_wrapper} ${style.mobile}`}>
            <img src={data.image} alt="course-image" height="500px" />
          </div>
          <div className={style.description}>{data?.description}</div>
          {showDetailButton && (
            <div className={style.btn_wrapper}>
              <button onClick={() => { router.push('/course-detail/1') }}>
                View details{" "}
                <span className={style.icon}>
                  <BsArrowRightCircle />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={`col-12 col-lg-5 ${style.image_wrapper}`}>
        <img src={data.image} alt="course-image" height="500px" />
      </div>
    </div>
  );
};

export default CourseListingCard;
