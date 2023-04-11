import React from "react";
import style from "./HomepageOurValues.module.scss";

const HomepageOurValues: React.FC = () => {
  return (
    <div className={`row ${style.our_values}`}>
      <div className={`col-12 col-lg-5 ${style.card_left_wrapper}`}>
        <div
          className={`card-violet animated-border-glow rounded-30 p-5 ${style.card_left}`}
        >
          <div className={style.count_tag}>
            <span>01</span>
          </div>
          <span className="d-block">TO TRAIN YOU</span>
          <span className="d-block">TODAY FOR THE</span>
          <span className="d-block">OPPORTUNITIES OF</span>
          <span className="d-block">TOMORROW</span>
        </div>
      </div>
      <div className="col-12 col-lg-7">
        <div
          className={`card-black animated-border-glow rounded-30 p-5 ${style.card_right}`}
        >
            <div className={`card-violet animated-border-glow rounded-30 ${style.card_header}`}>Our Values</div>
          <div>
            <p>
              At MADElT, we believe in differentiation and inclusivity. The
              education model focuses on project-based learning and teamwork,
              rather than theoretical education. As we integrate the latest
              educational innovations, our goal is to empower the next leading
              generation of IT talent.
            </p>
          </div>
          <div>
            <ul className={style.unordered_list}>
              <li>
                We have mentors and mentees instead of teachers and students
              </li>
              <li>Capstone ( project) -BASED PEDAGOGY</li>
              <li>PEER-TO-PEER LEARNING</li>
              <li>GAMIFICATION</li>
              <li>Chief technical officers as MENTORS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageOurValues;
