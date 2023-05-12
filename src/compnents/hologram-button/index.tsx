import React from 'react'
import style from "./HologramButton.module.scss";

const HologramButton: React.FC = () => {
    return <div className={style.hologram_button}>
        <span className={style.text}>View details</span>
    </div>

}

export default HologramButton