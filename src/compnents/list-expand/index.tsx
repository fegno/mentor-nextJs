import React, { useState } from "react";
import style from "./ListExpand.module.scss";
import ExpandListComponent from "../expand-list-component";

const ListExpand: React.FC = () => {
  const DATA = {
    title: "Post completion of course",
    lists: [
      {
        title: "Higher study",
        children: [
          "MSc. in Data Science",
          "Masters in ML",
          "M.tech in Artificial intelligence",
          "PG Diploma in deep learning",
        ],
      },
      {
        title: "Jobs",
        children: [
          "MSc. in Data Science",
          "Masters in ML",
          "M.tech in Artificial intelligence",
          "PG Diploma in deep learning",
        ],
      },
    ],
  };

 
  return (
    <div className={style.list_expand}>
      <div className={style.title}>{DATA.title}</div>
      <div className={style.lists_wrapper}>
        {DATA.lists.map((list: any, index: number) => {
          return (
            <div className={style.list_item} key={`list${index}`} >
              <ExpandListComponent data={list} index={index}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListExpand;
