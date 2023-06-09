import React from "react";
import style from "./Author-pad.module.scss";
import author from "../../assets/about/founder.jpg";
import authsocial from "../../assets/Linkedin-logo.png";
import Link from "next/link";
import Image from "next/image";
import LazyLoad from "react-lazyload";

type authorProps = {
  data: {
    name: string;
    designation: string;
    photo: string;
    description: string;
    description2?: string;
    linked_in_profile: string;
  };
  isRight: boolean;
};

const Author: React.FC<authorProps> = ({ data, isRight }) => {
  return (
    <div
      className={`${style.author_pad_container} ${isRight ? style.right : ""}`}
    >
      <div className="row">
        <div className={`col-12 col-lg-4 ${style.author_img}`}>
          <div className={style.gradiant}></div>
          <LazyLoad>
            <Image src={data?.photo} alt="mentor" width={500} height={500} />
          </LazyLoad>
        </div>
        <div className={`col-12 col-lg-8 ${style.author_detail_wrapper}`}>
          <div className={style.author_bio}>
            <div className={style.author_head_wrapper}>
              <div className={style.author_name}>
                {data?.name}
               {data.linked_in_profile && <div className={style.auth_social_icon}>
                  <Link href={data.linked_in_profile} target="_blank">
                    <img src={authsocial.src} alt="linkedIn" />
                  </Link>
                </div>}
              </div>
              <div className={style.author_social}>
                <img src={authsocial.src} alt="img" />
              </div>
            </div>
            <div className={style.author_designation}>{data?.designation}</div>
            <div className={style.border}></div>
            <div className={style.author_dec}>
              {data?.description}
              <p>{data?.description2}</p>
            </div>
           {data?.linked_in_profile && <div className={style.auth_social_icon}>
              <Link href={data?.linked_in_profile} target="_blank">
                <img src={authsocial.src} alt="linkedIn" />
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
