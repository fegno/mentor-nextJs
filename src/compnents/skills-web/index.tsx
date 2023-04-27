import React from "react";
import style from "./SkillsWeb.module.scss";
import skils from "../../assets/blockchain skills.png";

type skillswebProps = {
  data: any;
};

const SkillsWeb: React.FC<skillswebProps> = ({ data }) => {
  const skills = data.details[0].data;
  return (
    <div className={style.skills_web}>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-4" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",}}>
          {skills?.slice(0, 2).map((skill: any, index: number) => {
            return (
              <div className={style.skill_wrapper} key={index}>
                <span>{skill.title}:</span>
                {skill.description}
              </div>
            );
          })}
        </div>
        <div className="col-4">
          <img src={skils.src} alt="skills" className={style.skill_img} />
        </div>
        <div className="col-4" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
          {skills?.slice(2, 4).map((skill: any, index: number) => {
            return (
              <div className={style.skill_wrapper} key={index}>
                <span>{skill.title}:</span>
                {skill.description}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsWeb;
