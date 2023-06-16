import React from 'react'
import style from "./Table.module.scss";
import { type } from 'os';

type tableProps= {
    children:any
}

const Table:React.FC <tableProps>= ({children}) => {
  return (
    <table className={style.table}>
        {children}
    </table>
  )
}

export default Table