import React from "react";
import style from "./JobOpportunity.module.scss";
import JobChartModule from "../job-chart-card";

type jobOppertunityProps = {
  data: any;
  fullWidth?: boolean;
};

const JobOppurtinities: React.FC<jobOppertunityProps> = ({
  data,
  fullWidth,
}) => {
  return (
    <div className={style.job_oppurtunities}>
      <div className="row">
        {data?.map((job: any, index: number) => {
          return (
            <div
              className={`col-12 ${fullWidth ? "" : "col-lg-4"}`}
              key={index}
            >
              <JobChartModule title={job.title} image={job.chart} imageSmall={fullWidth}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobOppurtinities;
