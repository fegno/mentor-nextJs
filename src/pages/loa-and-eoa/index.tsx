import React from "react";
import style from "./LoaAndEoa.module.scss";
import Container from "@/compnents/container";
import Title from "@/compnents/title";
import Table from "@/compnents/table";
import { DATA, DATA2 } from "./const";
import aicta from "../../assets/aicte-logo.png";
import Link from "next/link";
import Image from "next/image";
import { BsDownload, BsFillCloudDownloadFill } from "react-icons/bs";
const LoaAndEoa: React.FC = () => {
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
