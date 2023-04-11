import React from "react";
import style from "./HomepageBenefits.module.scss";
import Title from "../title";
import BenefitsCard from "../benefits";
import career from "../../assets/benefits/career.png";
import capstone from "../../assets/benefits/capstone.png";
import peer from "../../assets/benefits/peer.png";
import game from "../../assets/benefits/game.png";
import mentor from "../../assets/benefits/mentor.png";

const HomepageBenefits: React.FC = () => {
  const BENEFITS = [
    { title: "Not Just a job : A Career", icon: career.src },
    { title: "Capstone (project) - Based Pedagogy", icon: capstone.src },
    { title: "Peer to peer learning", icon: peer.src },
    { title: "Gamification", icon: game.src },
    { title: "Chief technical officers as mentors", icon: mentor.src },
  ];

  return (
    <div className={style.benefits}>
      <div className="row">
        <div className="col-12">
          <Title title="Your Benefits" />
        </div>
      </div>
      <div className="row py-5 justify-content-center">
        {BENEFITS.map((benefit: any, index: number) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <BenefitsCard title={benefit.title} icon={benefit.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomepageBenefits;
