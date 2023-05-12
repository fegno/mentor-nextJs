import React from 'react'
import style from "./AboutAuthorSection.module.scss";
import Author from '../author-pad';
import founder from "../../assets/about/founder.jpg";
import director from "../../assets/about/ramkumar.jpg";

const AboutAuthorSection: React.FC = () => {

    const AUTHORS = [
        { name: "Ramkumar Sreedharan Nair", photo: director.src, designation: " Director | Mentor Academy for Design Entrepreneurship Innovation and Technology", description: "Ramkumar Sreedharan Nair is an accomplished professional with extensive experience in the healthcare entrepreneurship industry and academia. He has held various leadership roles throughout his career and is currently the Chief Operating Officer at the Center for Healthcare Entrepreneurship at the Indian Institute of Technology, Hyderabad.",description2:"In his current role, Ramkumar is responsible for driving the center's mission to foster innovation and entrepreneurship in the healthcare industry. He works closely with faculty members, students, and industry experts to develop cutting-edge solutions to address some of the most pressing challenges in healthcare. Additionally, he oversees the center's operations, ensuring that all programs and initiatives are executed efficiently and effectively.", linked_in_profile:"https://www.linkedin.com/in/ramkumar-sreedharan-nair-73232619a/" },
        { name: "T R Shamsudheen", photo: founder.src, designation: " Founder and CEO | Mentor Academy for Design Entrepreneurship Innovation and Technology", description: "Mr. T.R. Shamsudheen is a distinguished Indian entrepreneur, educationist, and technocrat with a remarkable track record of accomplishments in the fields of education, entertainment, and technology. He is a self-made individual of extensive calibre, whose dedication to education and entertainment has resulted in successful ventures that inspire and empower others. His outstanding contributions to the fields of education and technology have served as a source of inspiration for many, and his commitment to excellence has earned him a reputation as a visionary leader and innovator across the media and the startup ecosystem.",linked_in_profile:"https://www.linkedin.com/in/shamsudheentr/" },
    ]

    return (
        <div className={style.about_author_section}>
            {AUTHORS.map((author: any, index: number) => {
                return <div className={style.author} key={index}>
                    <Author data={author} isRight={index%2!=0}/>
                </div>
            })}
        </div>
    )
}

export default AboutAuthorSection