import React from "react";
import style from './Author-pad.module.scss';
import author from '../../assets/author.png';

const Author : React.FC = () => {
    return(
        <div className={style.author_pad_container}>
            <div className="row">
                <div className={`col-12 col-sm-4 ${style.author_img}`}>
                    <img src={author.src} />
                </div>
                <div className={`col-12 col-sm-8 ${style.author_detail_wrapper}`}>
                    <div className={style.author_bio}>
                        <div className={style.author_name}>
                            Shilpan Vaishnani
                        </div>
                        <div className={style.author_designation}>
                            Principal, Mentor Academy for Design Entrepreneurship Innovation and Technology 
                        </div>
                        <div className={style.author_dec}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        {/* <div className={style.social_icon}>
                            <img src={authsocial.src} alt="linkedIn" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author