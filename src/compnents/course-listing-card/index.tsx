import React from "react";
import style from "./CourseListingCard.module.scss";
import { BsArrowRightCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import { CONFIG } from "@/config/config";
import Image from "next/image";
import LazyLoad from "react-lazyload";
type cardProps = {
  imageLeft?: boolean;
  data: any;
  marginRight?: boolean;
  showDetailButton?: boolean;
  id?: number;
};

const CourseListingCard: React.FC<cardProps> = ({
  data,
  imageLeft,
  marginRight,
  showDetailButton,
  id,
}) => {
  const router = useRouter();

  return (
    <div
      className={`row ${style.course_card} ${imageLeft ? style.left : ""} ${
        marginRight ? style.right : ""
      } ${!showDetailButton ? style.detail : ""}`}
    >
      <div className={`col-12 col-lg-7 ${style.data_wrapper} `}>
        <div className={style.inner_wrapper}>
          <div className={style.title}>{data?.title}</div>
          <div
            className={`col-12 col-lg-5 ${style.image_wrapper} ${style.mobile}`}
          >
            <LazyLoad>
              <Image
                src={`${CONFIG.baseUrl}${data?.cover_image?.data?.attributes?.url}`}
                alt="course-image"
                height={500}
                width={500}
              />
            </LazyLoad>
          </div>
          <div className={style.description}>{data?.description}</div>
          {showDetailButton && (
            <div className={style.btn_wrapper}>
              <button
                onClick={() => {
                  router.push(`/course-detail/${id}`);
                }}
              >
                View details{" "}
                <span className={style.icon}>
                  <BsArrowRightCircle />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      {data?.cover_image?.data?.attributes.url && (
        <div className={`col-12 col-lg-5 ${style.image_wrapper}`}>
          <Image
            src={`${CONFIG.baseUrl}${data?.cover_image?.data?.attributes.url}`}
            alt="course-image"
            height={500}
            width={500}
          />
        </div>
      )}
    </div>
  );
};

export default CourseListingCard;
