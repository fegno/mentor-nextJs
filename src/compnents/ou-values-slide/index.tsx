import React from "react";
import style from "./OurValuesSilde.module.scss";

type ourValuesProps = {
  data: any;
  index:number;
};

const OurValuesSlide: React.FC<ourValuesProps> = ({ data ,index}: any) => {
  return (
    <div className={`row ${style.our_values}`}>
      <div className={`col-12 col-lg-5 ${style.card_left_wrapper}`}>
        <div
          className={`card-violet card-glowing-blue animated-border-glow rounded-30 p-5 ${style.card_left}`}
        >
          <div className={style.count_tag}>
            <span>0{index+1}</span>
          </div>
          <span className="d-block">{data.title}</span>
        </div>
      </div>
      <div className="col-12 col-lg-7">
        <div
          className={`card-black animated-border-glow card-glowing-blue rounded-30 p-5 ${style.card_right}`}
        >
          <div className={style.title}>{data?.title}</div>
          <div>
            <p>
              {data.description}
            </p>
          </div>
          <div>
            <ul className={style.unordered_list}>
              {data?.points?.map((points:string,index:number)=>{
                return<li key={index}>{points}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesSlide;
