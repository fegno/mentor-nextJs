import React, { useState, useEffect } from "react";
import style from "./Mentors.module.scss";
import Title from "../title";
import shilpan from "../../assets/mentors/SHILPAN_VAISHNANI 4.png";
import brinta from "../../assets/mentors/brinda.png";
import shreyas from "../../assets/mentors/shreyas.png";
import MentorCard from "../mentor-card";
import { http } from "@/axios/http";
import Loading from "../loading";

const Mentors: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    http
      .get("mentors?populate=deep")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.mentors}>
      {loading && <Loading />}
      <div className={style.title}>
        <Title title="Mentors" />
      </div>
      <div className={style.card_wrapper}>
        {data?.map((mentor: any, index: number) => {
          return (
            <div className={style.card} key={index}>
              <MentorCard
                data={mentor?.attributes}
                alignRight={index % 2 != 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
