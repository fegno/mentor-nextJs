import React, { useState } from "react";
import style from "./CourseDetailFeatures.module.scss";
import chart from "../../assets/chart.png";
import jobchart from "../../assets/jobchart.png";
import crypto_icon from "../../assets/crypto.png";
import data_icon from "../../assets/data.png";
import distributed_icon from "../../assets/distributed.png";
import smart_icon from "../../assets/smart.png";
import SkillsCard from "../skills-card";
import JobOppurtinities from "../job-oppurtunities";
import MarketGrowth from "../market-growth";

type featuresProps = {
  data: any
}

const CourseDetailFeatures: React.FC<featuresProps> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const FEATURES = [
    {
      title: "Skills",
      page_title: "Top Machine Learning and AI Skills",
      data: [
        {
          title: "Cryptography",
          description:
            "Blockchain technology relies heavily on cryptography to ensure secure transactions. Knowledge of encryption techniques such as hashing, digital signatures, and public-key cryptography is a fundamental requirement.",
          icon: crypto_icon.src,
        },
        {
          title: "Distributed Systems",
          description:
            "Blockchain is a distributed ledger system, and knowledge of distributed systems is crucial for working with this technology. Understanding concepts such as consensus algorithms, network topology, and node communication is essential.",
          icon: distributed_icon.src,
        },
        {
          title: "Data Structures",
          description:
            "Understanding data structures such as Merkle Trees, Hash Tables, and Directed Acyclic Graphs (DAG) is essential for working with blockchain technology. These structures allow for efficient and secure data storage and retrieval.",
          icon: data_icon.src,
        },
        {
          title: "Smart Contracts",
          description:
            "Understanding smart contract technology is crucial in the blockchain space as it enables the creation of self-executing contracts that can automate various business processes. With the use of smart contracts, businesses can reduce costs, increase transparency, and eliminate the need for intermediaries.",
          icon: smart_icon.src,
        },
      ],
    },
    {
      title: "Market",
      data: {
        chart: chart.src,
        points: [
          "The market for blockchain technology is expected to grow significantly with a CAGR of 51.7% from 2021 to 2028.",
          "The finance sector is projected to have the largest market share, with a CAGR of 55.6%.",
          "The healthcare industry is also expected to see substantial growth, with a CAGR of 53.9%.",
          "The supply chain management and real estate industries are also projected to have significant growth, with CAGRs of 52.6% and 52.1%, respectively.",
          "Other industries, such as government, energy, media, and retail, are also expected to see growth in the adoption of blockchain technology.",
          "Blockchain technology has the potential to improve transparency, reduce costs, increase efficiency, and reduce fraud in various industries.",
        ],
      },
    },
    {
      title: "Career",
      data: [
        {
          title: "Types of companies posting jobs in India",
          chart: jobchart.src,
        },
        { title: "Required skills in India", chart: jobchart.src },
        {
          title: "Blockchain platform wise jobs in India",
          chart: jobchart.src,
        },
      ],
    },
  ];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className={style.features}>
      <div className={`row ${style.inner_wrapper}`}>
        <div className={`col-12 col-lg-3 ${style.tab_wrapper}`}>
          <div className={style.tabs}>
            {FEATURES.map((tab: any, index: number) => {
              return (
                <div
                  className={`${style.tab} ${index == selectedTab ? style.active : ""
                    }`}
                  key={index}
                  onClick={() => {
                    handleTabClick(index);
                  }}
                >
                  <div
                    className={`${style.border} ${selectedTab >= index ? style.active : ""
                      }`}
                  ></div>
                  {tab.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className={`col-12 col-lg-9 ${style.data_wrapper}`}>
          <div className={style.data_inner_wrapper}>

            {/* if first tab selected */}

            {selectedTab == 0 && (
              <div className={style.skills_wrapper}>
                <div className={style.inner_title}>{`Top ${data?.title} Skills`}</div>
                <div className={style.cards_wrapper}>
                  {data?.skills[0]?.skills?.map((skill: any, index: number) => {
                    return (
                      <div className={style.card} key={index}>
                        <SkillsCard data={skill} />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* if second tab is selected */}

            {selectedTab == 1 && <div>
              <MarketGrowth data={data?.market} fullWidth />
            </div>}

            {/* if third tab selected */}

            {selectedTab == 2 && <div className={style.jobs_wrapper}>
              <JobOppurtinities data={data?.job} fullWidth />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailFeatures;
