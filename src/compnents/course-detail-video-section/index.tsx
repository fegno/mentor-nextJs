import React from "react";
import style from "./CourseDetailVideoSection.module.scss";
import Title from "../title";
import { Player } from "video-react";

type courseVideoProps = {
  data: {
    title: string;
    sub_title: string;
    video_url: string;
  };
};

const CourseDetailVideoSection: React.FC<courseVideoProps> = ({ data }) => {
  return (
    <div className={style.course_detail_video}>
      <div className={style.sub_title}>{data.sub_title}</div>
      <div className={style.title}>
        <Title title={data.title} />
      </div>
      <div className={style.video_wrapper}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HcqpanDadyQ?start=3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default CourseDetailVideoSection;
