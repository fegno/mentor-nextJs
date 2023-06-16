import React from "react";
import style from "./MandatoryDisclosure.module.scss";
import Container from "@/compnents/container";
import Title from "@/compnents/title";
import Table from "@/compnents/table";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const MandatoryDisclosure: React.FC = () => {
  const DATA = [
    {
      title: "COLLEGE LEVEL COMMITEE",
      file: "/pdf/disclosure/COLLEGE LEVEL COMMITEE.docx.pdf",
    },
    {
      title: "Mandatory-Disclosure-2023-2024",
      file: "/pdf/disclosure/Mandatory-Disclosure-2023-2024 .docx.pdf",
    },
  ];

  return (
    <div className={style.mandatory}>
      <Container>
        <div className={style.title}>
          <Title title="Mandatory Disclosure" />
        </div>
        <div className={style.table_wrapper}>
          <Table>
            <thead>
              <tr>
                <th>Name/Type</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((item: any, index: any) => {
                return (
                  <tr key={index}>
                    <td>{item?.title}</td>
                    <td>
                      <Link href={item?.file} target="_blank">
                        <span className={style.icon}>
                          <BsDownload />
                        </span>
                        Download
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default MandatoryDisclosure;
