import React from "react";
import style from './Director-bio.module.scss';
import director from '../../assets/director.png';
import cisco from '../../assets/Cisco_logo.png';
import amazon from '../../assets/Amazon_logo.png';
import microsoft from '../../assets/Microsoft_logo.png';
import linkedin from '../../assets/Linkedin-logo.png';

type directorBioProps = {
    isLeft?: boolean
}

const DirectorBio: React.FC<directorBioProps> = ({ isLeft }) => {
    return (
        <div className={`${style.bio_container} ${isLeft ? style.left : ""}`}>
            <div className={"row"}>
                <div className={`col-12 col-md-4 ${style.director_mob_img}`}>
                    <img src={director.src} alt="director" />
                </div>
                <div className={`col-12 col-md-8 ${style.director_bio}`}>
                    <div className={style.director_bio_wrapper}>
                        <div className={style.bio_head_wrapper}>
                            <div className={style.bio_head}>
                                Charlie Morris
                            </div>
                            <div className={style.dir_social}>
                                <img src={linkedin.src} alt="img" />
                            </div>
                        </div>
                        <div className={style.dir_position}>
                            Co-founder and Managing Partner
                        </div>
                        <div className={style.bio_deatil}>
                            <div className={style.dir_dec}>
                                PHD in Machine Learning -
                                <span className={style.dir_data}>
                                    North Carolina University
                                </span>
                            </div>
                            <div className={style.dir_dec}>
                                Senior Systems Engineer -
                                <span className={style.dir_data}>
                                    Microsoft
                                </span>
                            </div>
                            <div className={style.dir_dec}>
                                System Architect -
                                <span className={style.dir_data}>
                                    Azure
                                </span>
                            </div>
                        </div>
                        <div className={style.dir_exp}>
                            <img src={microsoft.src} alt="company" />
                            <img src={amazon.src} alt="company" />
                            <img src={cisco.src} alt="company" />
                        </div>
                    </div>
                </div>
                <div className={`col-12 col-sm-4 ${style.director_img}`}>
                    <img src={director.src} alt="director" />
                </div>
            </div>
        </div>
    )
}
export default DirectorBio