import React from 'react';
import style from './Gallery-card.module.scss';
type GalleryProps= {
    data:any;
};

const GalleryCard : React.FC <GalleryProps> = ({data}) => {
    return(
        <div className={style.gallery_card_container}>
            <div className={"row"}>
                <div className={`col-4 col-sm-3 ${style.gallery_img_wrapper}`}>
                    <img src={data.image} />
                </div>
                <div className={`col-8 col-sm-9 ${style.gallery_data_wrapper}`}>
                    <div className={style.gallery_card_title}>
                        {data.title}
                    </div>
                    <div className={style.gallery_card_name}>
                        {data.name}
                    </div>
                    <div className={style.gallery_card_content}>
                        {data.content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryCard