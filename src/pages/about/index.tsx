import React from "react";
import style from './abou.module.scss';
import Container from "@/compnents/container";
import Author from "../author-pad";

const About : React.FC = () => {
    return(
        <Container>
            <div className={style.about_container}>
                <Author />
            </div>
        </Container>
    )
}
export default About