import React from 'react'
import style from "./AchievementCard.module.scss";
import image from "../../assets/achievement.jpg";
import { BsArrowRightCircle } from 'react-icons/bs';

const AchievementCard: React.FC = () => {
    return (
        <div className={style.achievement_card}>
            <div className='row'>
                <div className="col-12 col-lg-5">
                    <div className={style.image_wrapper}>
                        <img src={image.src} alt="achievement-image" />
                    </div>
                </div>
                <div className={`col-12 col-lg-7 ${style.content_wrapper}`}>
                    <div className={style.content}>
                        <div className={style.title}>Performance achievement</div>
                        <div className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        <div className={style.btn_wrapper}>
                            <button>
                                View details
                                <BsArrowRightCircle className={style.icon}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementCard