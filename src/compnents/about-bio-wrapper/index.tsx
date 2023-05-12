import React from 'react'
import DirectorBio from '../director-bio';
import style from "./AboutBioWrapper.module.scss";

const AboutBioWrapper: React.FC = () => {
    return (
        <div className={style.about_bio_wrapper}>
            
               <div className={style.card}>
                    <DirectorBio />
                </div>
     </div>
    )
}

export default AboutBioWrapper