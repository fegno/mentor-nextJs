import React, { ReactNode } from 'react'
import style from "./CustomButton.module.scss";

type buttonProps = {
    children: ReactNode
}

const CustomButton: React.FC<buttonProps> = ({ children }) => {
    return (
        <button className={style.button}>
            {children}
        </button>
    )
}

export default CustomButton