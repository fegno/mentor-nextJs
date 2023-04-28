import React from 'react'
import DirectorBio from '../director-bio';
import style from "./AboutBioWrapper.module.scss";

const AboutBioWrapper: React.FC = () => {
    return (
        <div className={style.about_bio_wrapper}>
            {[1, 2, 4].map((bio: any, index: number) => {
                return <div className={style.card} key={index}>
                    <DirectorBio isLeft={index%2!=0}/>
                </div>
            })}
        </div>
    )
}

export default AboutBioWrapper