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
                        <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AboutBanner