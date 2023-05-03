import React from 'react'
import Container from '../container';
import style from "./AboutBanner.module.scss";

const AboutBanner: React.FC = () => {
    return (
        <div className={`${style.banner}`}>
            <div className={style.gradient}></div>
            <div className={`${style.inner_wrapper}`}>
                <Container>
                    <div className={style.content_wrapper}>
                        <div className={style.title}>About Us</div>
                        <div className={style.description}>Mentor Engineering College is an engineering institution to educate and future-proof computer science graduates for the next generation of challenges and opportunities being created by Industry 4.0.</div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AboutBanner