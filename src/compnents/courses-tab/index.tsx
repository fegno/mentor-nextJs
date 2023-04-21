import React, { useState } from "react";
import style from "./CoursesTab.module.scss";

type CoursesTabProps = {
  data: any;
};

const CoursesTab: React.FC<CoursesTabProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };
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
        
      </div>
    </div>
  );
};

export default CoursesTab;
