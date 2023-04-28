import React from 'react'
import AchievementsSlider from '../achievements-slider';
import Title from '../title';
import style from "./AboutAchievements.module.scss";


const AboutAchievements:React.FC = () => {
  return (
    <div className={style.about_achievements}>
        <div className={style.title}>
            <Title title='Achievements' />
        </div>
        <div className={style.slider_wrapper}>
            <AchievementsSlider />
        </div>
    </div>
  )
}

export default AboutAchievements