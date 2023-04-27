import React from 'react';
import Container from '@/compnents/container';
import style from './Event-detail.module.scss';
import eventbanner from '../../assets/code_ninja_tech.jpg'
import intel from '../../assets/intel.png';
import hp from '../../assets/hp.png';
import asus from '../../assets/asus.png';
import nvidia from '../../assets/nvidia.png';
import codingindia from '../../assets/codingindia.png';

const EventDetail : React.FC = () =>{
    return(
        <Container>
            <div className={style.event_detail_container}>
                <div className={style.event_detail_wrapper}>
                    <div className={style.event_banner_img}>
                        <img src={eventbanner.src} alt="banner" />
                    </div>
                    <div className={style.event_detail_head}>
                        Code Ninja Tech Summit 2k23
                    </div>
                    <div className={style.event_details}>
                        <div className={style.eve_type}>
                            Event date: <span className={style.eve_value}>20-Jan-2023</span>
                        </div>
                        <div className={style.eve_type}>
                            Event organized by : <span className={style.eve_value}>HP India</span>
                        </div>
                        <div className={style.eve_type}>
                            Venue : <span className={style.eve_value}>Mentor College</span>
                        </div>
                    </div>
                    <div className={style.eve_dec}>
                        <p>Code Ninja Tech Summit 2k23 is a highly anticipated coding competition organized by Mentor College and sponsored by HP India. The event is set to take place on 20th March 2023, and it has been generating a buzz among the coding community for several weeks now. The competition is open to all programmers, developers, and coders who are passionate about technology and love a good challenge. The event is expected to attract a large number of participants from across the country, all vying for the coveted title of Code Ninja Tech Summit 2k23 champion.</p>
                        <p>The competition will be divided into several rounds, each of which will test the participants' coding skills, problem-solving abilities, and creativity. The first round will be a coding challenge that will require the participants to solve a series of coding problems within a set time frame. The top performers from this round will move on to the next round, which will be a more complex coding challenge. The final round of the competition will be a live coding challenge, where the finalists will be given a set of coding problems to solve on the spot. The winner of this round will be crowned the Code Ninja Tech Summit 2k23 champion and will receive a grand prize, which is yet to be announced.</p>
                        <p>Mentor College, the organizer of the event, is known for its commitment to providing a platform for students and young professionals to showcase their skills and talents. The Code Ninja Tech Summit 2k23 is just one of the many initiatives that the college has undertaken to promote excellence in the field of technology. HP India, the event sponsor, is a leading technology company that has been at the forefront of innovation and technology for several decades. The company's support for the event is a testament to its commitment to fostering a culture of innovation and creativity among the next generation of technologists. In addition to the competition itself, the event will also feature a range of tech talks and presentations by leading experts in the field of technology. These talks will cover a range of topics, from the latest trends and innovations in coding to the future of technology and its impact on society. In conclusion, the Code Ninja Tech Summit 2k23 is a highly anticipated coding competition that promises to be both challenging and exciting. With its focus on innovation, creativity, and problem-solving, the event is sure to attract some of the best coders and developers from across the country. And with the support of Mentor College and HP India, the event is poised to be a resounding success.</p>
                    </div>
                    <div className={style.event_sponsors}>
                        <div className={style.sponsor_heading}>Powered by :</div>
                        <div className={style.sponsors_img}>
                            <img src={intel.src} alt="sponsors" />
                            <img src={hp.src} alt="sponsors" />
                            <img src={codingindia.src} alt="sponsors" />
                            <img src={nvidia.src} alt="sponsors" />
                            <img src={asus.src} alt="sponsors" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default EventDetail