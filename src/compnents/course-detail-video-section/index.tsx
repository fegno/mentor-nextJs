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
      <Title title={data.title} />
      <div className={style.video_wrapper} style={{border:"1px solid red"}}>
        <Player>
          <source src={data.video_url} />
        </Player>
      </div>
    </div>
  );
};

export default CourseDetailVideoSection;
