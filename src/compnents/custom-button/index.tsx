import React, { ReactNode ,useState} from 'react'
import style from "./CustomButton.module.scss";

type buttonProps = {
    children: ReactNode;
}

const CustomButton: React.FC<buttonProps> = ({ children }) => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const setHovered = ()=>{
        setIsButtonHovered(true)
    }
    const setNotHover = () => {
        setIsButtonHovered(false)
    }
    return (
        <button className={`${style.button} ${isButtonHovered?style.hovered:""}`}>
            {children}
        </button>
    )
}

export default CustomButton