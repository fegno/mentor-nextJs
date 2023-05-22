import React from "react";
import style from "./ComparisonTable.module.scss";

const ComparisonTable: React.FC = () => {
  const TABLE_CONTENT = [
    {
      cell1: "Curriculum",
      cell2:
        "Industry vetted curriculum. Redesigning with our R& D team consisting of industry experts who have more than 10yrs experience.",
      cell3: "Outdated",
    },
    {
      cell1: "Instructors",
      cell2:
        "Our experienced instructors are having more than 10yrs experience in MNC’s with coding and development experience.",
      cell3: "No industry experience",
    },
    {
      cell1: "Assigments",
      cell2: "50+ Apps and Products to be Coded",
      cell3: "Theoretical written papers",
    },
    {
      cell1: "Mentorship",
      cell2: "Weekly sessions with industry experts",
      cell3: "No dedicated guidance",
    },
    {
      cell1: "Internship",
      cell2:
        "Compulsory paid internship according to university semester structure for final year.",
      cell3: "No support for Internship Opportunities",
    },
    {
      cell1: "Employability",
      cell2: "Job ready certificate",
      cell3: "Has to undergo extra training",
    },
    {
      cell1: "Graduate",
      cell2: "Senior Development Executive",
      cell3: "Junior SDE",
    },
    {
      cell1: "Live project experience",
      cell2:
        "Opportunity to work part time at SW development companies from 2nd yr after completing IIJRC prgrm",
      cell3: "Lack of resources",
    },
    {
      cell1: "Add on cerification",
      cell2: "Vetted with industry- IIJRC",
      cell3: "Some local training programs not vetted with industry",
    },
    {
      cell1: "Teaching Methodology",
      cell2:
        "Targeting students to pass exams with the knowledge of how these theories effectively is used in their SW careers.",
      cell3:
        "Following university curriculum same as school to get marks through theory studies.",
    },
  ];
  return (
    <div className={style.comparison_table}>
      <table className={style.web_view}>
        <thead>
          <tr>
            <th></th>
            <th>Traditional Education</th>
            <th> Mentor Approach</th>
          </tr>
        </thead>
        <tbody>
          {TABLE_CONTENT.map((row: any, index: number) => {
            return (
              <tr key={index} className={style.table_row}>
                <td className={style.first_cell}>{row.cell1}</td>
                <td>
                  <ul className={style.others_list}>
                    <li>{row.cell3}</li>
                  </ul>
                </td>
                <td>
                  <ul className={style.mentor_list}>
                    <li>{row.cell2}</li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className={`d-block card-glowing-blue rounded-20  ${style.mobile_view}`}
      >
        <div className={style.title}>Comparison</div>
        <div className={`row ${style.head}`}>
          <div className="col-6">Traditional Education</div>
          <div className={`col-6 ${style.bg}`}>Mentor Approach</div>
        </div>
        <div className={style.content}>
          {TABLE_CONTENT.map((row: any, index: number) => {
            return (
              <div className={`${style.row}`} key={index}>
                <div className="row">
                  <div className={`col-12 ${style.inner_title}`}>
                    {row.cell1}
                  </div>
                  <div className="col-12">
                    <div className="row pb-4">
                    <div className={`col-6 ${style.descrpition}`}>
                        {row.cell3}
                      </div>
                      <div className={`col-6 ${style.descrpition}`}>
                        {row.cell2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
