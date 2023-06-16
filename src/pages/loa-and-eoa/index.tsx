import React from "react";
import style from "./LoaAndEoa.module.scss";
import Container from "@/compnents/container";
import Title from "@/compnents/title";
import Table from "@/compnents/table";
import aicta from "../../assets/aicte-logo.png";
import Link from "next/link";
import Image from "next/image";
import { BsDownload, BsFillCloudDownloadFill } from "react-icons/bs";
const LoaAndEoa: React.FC = () => {
  const DATA = [
    { status: "EOA Recommended by Council", report: "/pdf/EOAReport2015-2016.pdf", academic_year: "2015-2016" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA_Report_2016-17.PDF", academic_year: "2016-2017" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA_Report_2017-18new.pdf", academic_year: "2017-2018" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA Report_2018-19.PDF", academic_year: "2018-2019" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA 2019-20.PDF", academic_year: "2019-2020" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA_HO_Report2020-21(16).pdf", academic_year: "2020-2021" },
    { status: "EOA Recommended by Council", report: "/pdf/EOA 2021-22.pdf", academic_year: "2021-2022" },
    { status: "EOA Recommended by Council", report: "/pdf/MENTOR-EOA_Report_22-23-1(3).PDF", academic_year: "2022-2023" },
];

const DATA2 = [
    {report:"/pdf/Provisionalorder_73 (2016).pdf",academic_year:"2016"},
    {report:"/pdf/Provisionalorder_73 (2017).pdf",academic_year:"2017"},
    {report:"/pdf/Provisionalorder_73 (2018).pdf",academic_year:"2018"}, 
    {report:"/pdf/Provisionalorder_73 (2019).pdf",academic_year:"2019"},
    {report:"/pdf/Provisionalorder_73 (2020).pdf",academic_year:"2020"},
    {report:"/pdf/Provisionalorder_73 (2022).pdf",academic_year:"2022"},
]
  return (
    <div className={style.loa_and_eoa}>
      <Container>
        <div className={style.title}>
          <Title title="LOA and Subsequent EOA till the current academic year" />
        </div>
        <div className={style.table_wrapper}>
          <Table>
            <thead>
              <tr>
                <th>AICTE Approval status</th>
                <th>LOA/EOA Report</th>
                <th>Academic year</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((item: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{item?.status}</td>
                    <td>
                      <Link href={item?.report} target="_blank">
                        <Image
                          src={aicta.src}
                          alt="aicte"
                          width={70}
                          height={70}
                        />
                      </Link>
                    </td>
                    <td>{item?.academic_year}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className={style.section2}>
          <div className={style.title}>
            <Title title="Affiliations & Approvals" />
          </div>
          <div className={style.table_wrapper}>
            <Table>
              <thead>
                <tr>
                  <th>Report</th>
                  <th>Academic year</th>
                </tr>
              </thead>
              <tbody>
                {DATA2.map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Link href={item?.report} target="_blank">
                          <span className={style.icon}><BsDownload /></span>
                          Download
                        </Link>
                      </td>
                      <td>{item?.academic_year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoaAndEoa;
