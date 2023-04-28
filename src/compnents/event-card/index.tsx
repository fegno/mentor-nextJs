import React from 'react';
import style from './Event-card.module.scss';
type EventProps = {
   data:any;
  };

    const EventCard : React.FC<EventProps>= ({data}) => {
    return(
        <div className={style.event_card}>
            <div className={`row ${style.event_row}`}>
                <div className={`col-4 col-sm-2 ${style.event_img}`}>
                    <img src={data.image} alt="img" />
                </div>
                <div className={`col-8 col-sm-10 ${style.event_data_wrapper}`}>
                    <div className={`${style.event_head}`}>
                        <span className={`${style.event_title}`}>
                            {data.title}
                        </span>
                        {data?.isUpcoming &&<span className={`${style.upcoming_event}`}>
                             Upcoming Event
                        </span>}
                    </div>
                    <div className={`${style.event_content}`}>
                        {data.content}
                    </div>
                    <div className={`${style.event_detail}`}>
                        <span className={`${style.event_author}`}>
                            {data.author}
                        </span>
                        <span className={`${style.event_dop}`}>
                            {data.dop}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EventCard;