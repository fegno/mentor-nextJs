import React from "react";
import style from "./HomepageOurVision.module.scss";
import Title from "../title";
import Spinner from "../spinner";

const HomepageOurVision: React.FC = () => {
  return (
    <div
      className={`d-block card-glowing-blue rounded-20 animated-border-glow ${style.our_vision}`}
    >
      <div>
        <div className={style.header}>
          <div className={style.title}>
            <Title align="left" title="Our Mission" />
          </div>
          <div className={style.spinner_wrapper}>
            <Spinner />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>TO TRAIN YOU TODAY FOR THE OPPORTUNITIES OF TOMORROW</h4>
        </div>
        <div className="col-12">
          <p>
            MADEIT is committed to offer an integrated training on the eight
            pillars of IR 4.0 to the aspirants. Our unique position in the world
            of higher education is based on strong values: inclusivity, open
            culture and always aiming at excellence. The ultimate goal is
            sustainable professional integration career paths of today and
            tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomepageOurVision;
