import React,{useState,useEffect} from 'react'
import AchievementsSlider from '../achievements-slider';
import Title from '../title';
import style from "./AboutAchievements.module.scss";
import { http } from '@/axios/http';


const AboutAchievements:React.FC = () => {
  const[data,setData] = useState([]);

  useEffect(()=>{
    http.get('achievements?populate=deep').then((res)=>{
      setData(res.data.data)
    })
  },[])

  return (
    <div className={style.about_achievements}>
        <div className={style.title}>
            <Title title='Achievements' />
        </div>
        <div className={style.slider_wrapper}>
            <AchievementsSlider data={data}/>
        </div>
    </div>
  )
}

export default AboutAchievements