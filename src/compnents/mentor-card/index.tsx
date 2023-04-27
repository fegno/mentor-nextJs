import React from "react";
import style from "./MentorCard.module.scss";
import Link from "next/link";
import linkedIn from "../../assets/Linkedin-logo.png";
type mentorCardProps = {
  data: any;
  alignRight?: boolean;
};

const MentorCard: React.FC<mentorCardProps> = ({ data, alignRight }) => {
  return (
    <div className={`${style.card} ${alignRight?style.align_right:""}`}>
      <div className="row">
        <div className={`col-12 col-md-4 ${style.image_wrapper}`}>
          <img src={data.image} className={style.profile_pic} />
        </div>
        <div className={`col-12 col-md-8 ${style.data_wrapper}`}> 
          <div className={style.inner_wrapper}>
            <div className={style.head}>
              <div className={style.name}>{data.name}</div>
              <Link href="/">
                <img src={linkedIn.src} className={style.linkedin_logo} />
              </Link>
            </div>
            <div className={style.qualification}>{data.qualification}</div>
            <div className={style.border}></div>
            <div className={style.experiences}>
              <div className={style.title}>Professional experience :</div>
              {data.experience.map((experience: any, index: number) => {
                return (
                  <div className={style.experience} key={index}>
                    <div className={style.position}>{experience.position}</div>
                    <div className={style.company}>{experience.company}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
