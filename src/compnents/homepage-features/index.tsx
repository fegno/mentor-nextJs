import React from "react";
import style from "./HomepageFeatures.module.scss";
import AnimatedTitle from "../animated-title";
import Container from "../container";

const HomepageFeatures: React.FC = () => {
  return (
    <div className={style.homepage_features}>
      <Container>
        <div className={style.inner_wrapper}>
          <div className={style.item}>
            <AnimatedTitle title="100%" subTitle="Placements" color="pink" />
          </div>
          <div className={style.item}>
            <AnimatedTitle title="3-10" subTitle="Lakhs/Annum" color="blue" />
          </div>
          <div className={style.item}>
            <AnimatedTitle
              title="4 year"
              subTitle="Course duration"
              color="green"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomepageFeatures;
