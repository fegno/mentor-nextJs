import React from "react";
import style from "./Mentors.module.scss";
import Title from "../title";
import shilpan from "../../assets/mentors/SHILPAN_VAISHNANI 4.png";
import brinta from "../../assets/mentors/brinda.png";
import shreyas from "../../assets/mentors/shreyas.png";
import MentorCard from "../mentor-card";

const Mentors: React.FC = () => {
  const MENTORS = [
    {
      image: shilpan.src,
      name: "Shilpan Vaishnani",
      qualification: "Phd in Machine Learning, University of Berkley",
      experience: [
        { position: "Chief Machine Learning Architect", company: "Google" },
        { position: "Machine Learning Engineer", company: "IBM" },
        {
          position: "System and Infrastructure Architect",
          company: "Microsoft",
        },
      ],
    },
    {
      image: brinta.src,
      name: "Brinda Mehta",
      qualification: "Phd in Machine Learning, University of Berkley",
      experience: [
        { position: "Chief Machine Learning Architect", company: "Google" },
        { position: "Machine Learning Engineer", company: "IBM" },
        {
          position: "System and Infrastructure Architect",
          company: "Microsoft",
        },
      ],
    },
    {
      image: shreyas.src,
      name: "Shreyas Nair",
      qualification: "Phd in Machine Learning, University of Berkley",
      experience: [
        { position: "Chief Machine Learning Architect", company: "Google" },
        { position: "Machine Learning Engineer", company: "IBM" },
        {
          position: "System and Infrastructure Architect",
          company: "Microsoft",
        },
      ],
    },
  ];
  return (
    <div className={style.mentors}>
      <div className={style.title}>
        <Title title="Mentors" />
      </div>
      <div className={style.card_wrapper}>
        {MENTORS.map((mentor: any, index: number) => {
          return (
            <div className={style.card} key={index}>
              <MentorCard data={mentor} alignRight={index%2!=0}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
