import React from 'react';
import style from './Event-card.module.scss';
import { CONFIG } from '@/config/config';
import Image from 'next/image';
type EventProps = {
   data:any;
  };

    const EventCard : React.FC<EventProps>= ({data}) => {
    return(
        <div className={style.event_card}>
            <div className={`row ${style.event_row}`}>
                <div className={`col-4 col-sm-2 ${style.event_img}`}>
                    <Image src={`${CONFIG.baseUrl}${data?.thumbnail?.data.attributes?.url}`} alt="img" width={500} height={200}/>
                </div>
                <div className={`col-8 col-sm-10 ${style.event_data_wrapper}`}>
                    <div className={`${style.event_head}`}>
                        <div className={`${style.event_title}`}>
                            {data.title}
                        </div>
                        {data?.upcoming &&<span className={`${style.upcoming_event}`}>
                             Upcoming Event
                        </span>}
                    </div>
                    <div className={`${style.event_content}`}>
                        {data.short_description}
                    </div>
                    <div className={`${style.event_detail}`}>
                        <span className={`${style.event_author}`}>
                            {data.author}
                        </span>
                        <span className={`${style.event_dop}`}>
                            {data.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EventCard;