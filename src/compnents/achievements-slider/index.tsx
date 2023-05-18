import React, { useRef } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';
import AchievementCard from '../achievement-card';
import style from "./AchievementsSlider.module.scss";

type achievementSliderProps={
    data:any
}

const AchievementsSlider: React.FC<achievementSliderProps> = ({data}) => {
    const sliderRef :any= useRef(null)
    const settings = {
        fade: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    // fade: false,
                    // slidesToShow: 1.2,
                    // centerMode: true,
                    // centerPadding: "10%"
                }
            },
        ]
    }
    return (
        <div className={style.achievements_slider}>
            <Slider {...settings} ref={sliderRef}>
                {data.map((slide: any, index: number) => {
                    return <div className={style.card} key={index}>
                        <div className={style.slides_count}>
                            <span className={style.active}>{index+1}</span>/<span className={style.total_count}>{data.length}</span>
                        </div>
                        <AchievementCard data={slide}/>
                    </div>
                })}
            </Slider>
            <div className={style.btn_wrapper}>
                <button className={style.btn_prev} onClick={()=>{sliderRef.current.slickPrev()}}>
                    <MdArrowBackIos />
                </button>
                <button className={style.btn_next} onClick={()=>{sliderRef.current.slickNext()}}>
                    <MdArrowForwardIos />
                </button>
            </div>
        </div>
    )
}

export default AchievementsSlider