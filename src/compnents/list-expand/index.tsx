import React, { useState } from "react";
import style from "./ListExpand.module.scss";
import ExpandListComponent from "../expand-list-component";

type listExpandProps = {
  jobs: any;
  courses: any
}

const ListExpand: React.FC<listExpandProps> = ({ jobs, courses }) => {



  return (
    <div className={style.list_expand}>
      <div className={style.title}>Post completion of course</div>
      <div className={style.lists_wrapper}>
        <div className={style.list_item} >
          <ExpandListComponent data={jobs} expanded title="Higher study" />
        </div>
        <div className={style.list_item} >
          <ExpandListComponent data={courses} title="Jobs" />
        </div>
      </div>
    </div>
  );
};

export default ListExpand;
