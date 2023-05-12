import React from "react";
import style from "./MarketGrowth.module.scss";
import { CONFIG } from "@/config/config";

type marketProps = {
  data: any;
  fullWidth?: boolean;
};

const MarketGrowth: React.FC<marketProps> = ({ data, fullWidth }) => {
  return (
    <div className={style.market_growth}>
      <div className={style.title}>Projected Market Growth</div>
      <div className="row">
        <div className={`col-12 ${fullWidth ? "" : "col-lg-6"} mb-4`}>
          <img src={`${CONFIG.baseUrl}${data?.market_graph?.data?.attributes?.url}`} className={style.chart_image} />
        </div>
        <div className={`col-12 ${fullWidth ? "" : "col-lg-6"}`}>
          <ul className={style.points}>
            {data.points.map((point: any, index: number) => {
              return <li key={index}>{point.points}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketGrowth;
