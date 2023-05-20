import React from "react";
import style from "./MentorCard.module.scss";
import Link from "next/link";
import linkedIn from "../../assets/Linkedin-logo.png";
import { CONFIG } from "@/config/config";
type mentorCardProps = {
  data: any;
  alignRight?: boolean;
};

const MentorCard: React.FC<mentorCardProps> = ({ data, alignRight }) => {
  return (
    <div className={`${style.card} ${alignRight ? style.align_right : ""}`}>
      <div className="row">
        <div className={`col-12 col-md-4 ${style.image_wrapper}`}>
          <div className={style.gradiant}></div>
          <img src={`${CONFIG.baseUrl}${data?.photo?.data?.attributes?.url}`} className={style.profile_pic} />
        </div>
        <div className={`col-12 col-md-8 ${style.data_wrapper}`}>
          <div className={style.inner_wrapper}>
            <div className={style.head}>
              <div className={style.name}>{data.name}</div>
              <Link href={data.linkedIn_profile_link} target="_blank">
                <img src={linkedIn.src} className={style.linkedin_logo} />
              </Link>
            </div>
            <div className={style.qualification}>{data.qualification}</div>
            <div className={style.border}></div>
            <div className={style.experiences}>
              <div className={style.title}>Professional experience :</div>

              <div className={style.experience}>
                <div className={style.position}>{data?.experience1}</div>
                <div className={style.company}>{data?.company1}</div>
              </div>
              <div className={style.experience}>
                <div className={style.position}>{data?.experience2}</div>
                <div className={style.company}>{data?.company2}</div>
              </div>
              <div className={style.experience}>
                <div className={style.position}>{data?.experience3}</div>
                <div className={style.company}>{data?.company3}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
