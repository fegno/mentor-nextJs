import React from "react";
import style from "./HomepageFeatures.module.scss";
import AnimatedTitle from "../animated-title";

const HomepageFeatures: React.FC = () => {
  return (
    <div className={style.homepage_features}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <AnimatedTitle title="100%" subTitle="Placements" color="pink" />
          </div>
          <div className="col-12 col-md-4">
            <AnimatedTitle title="3-10" subTitle="Lakhs/Annum" color="blue" />
          </div>
          <div className="col-12 col-md-4">
            <AnimatedTitle
              title="4 year"
              subTitle="Course duration"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageFeatures;
