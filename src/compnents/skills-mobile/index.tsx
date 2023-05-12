import React from 'react'
import style from "./SkillsMobiel.module.scss";
import image1 from "../../assets/skills/1.png"
import image2 from "../../assets/skills/2.png"
import image3 from "../../assets/skills/3.png"
import image4 from "../../assets/skills/4.png";
import { CONFIG } from '@/config/config';

type skillsMobileProps={
    data:any
}

const SkillsMobile: React.FC <skillsMobileProps>= ({data}) => {
   const skills= data?.skills[0]?.skills;
    return (
        <div className={style.skills_mobile}>
            <div className={style.title}>
                Top Blockchain Skills
            </div>
            {skills?.map((item: any, index: number) => {
                return <div key={index} className={`row ${style.card} ${index % 2 == 0 ? style.right : ""}`}>
                    <div className={`col-4 `}>
                        <div className={style.image_wrapper}>
                            <img src={`${CONFIG.baseUrl}${item?.icon?.data?.attributes?.url}`} />
                        </div>
                    </div>
                    <div className={`col-8 ${style.content_wrapper}`}>
                        <span className={style.title}>{item.title} {" "}:{" "}</span>
                        {item.description}
                    </div>
                </div>
            })}
        </div>
    )
}

export default SkillsMobile