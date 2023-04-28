import React, { useState,useEffect } from "react";
import style from "./CoursesTab.module.scss";
import SkillsWeb from "../skills-web";
import MarketGrowth from "../market-growth";
import JobOppurtinities from "../job-oppurtunities";
import SkillsMobile from "../skills-mobile";

type CoursesTabProps = {
  data: any;
};

const CoursesTab: React.FC<CoursesTabProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const[isResponsive,setIsResponsive] = useState(false);
  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };
useEffect(()=>{
if(window.innerWidth>991){
  setIsResponsive(false)
}else{
  setIsResponsive(true)
}
},[])
  return (
    <div className={style.course_tab}>
      <div className={style.title}>{data.title}</div>
      <div className={style.tabs_wrapper}>
        {data?.details?.map((tab: any, index: number) => {
          return (
            <button
              key={index}
              className={`${style.tab} ${
                selectedTab == index ? style.active : ""
              }`}
              onClick={() => {
                handleTabClick(index);
              }}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className={style.data_wrapper}>
        {selectedTab == 0 && (
          !isResponsive?<div className={style.web}>
            <SkillsWeb data={data} />
          </div>:
          <div>
            <SkillsMobile />
          </div>
        )}
        {selectedTab == 1 && (
          <div className={style.market}>
            <MarketGrowth data={data.details[1].data}/>
          </div>
        )}
        {selectedTab == 2 && <div className={style.jobs}>
          <JobOppurtinities data={data.details[2].data}/>
          </div>}
      </div>
    </div>
  );
};

export default CoursesTab;
