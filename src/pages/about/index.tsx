import React from "react";
import style from "./abou.module.scss";
import Container from "@/compnents/container";
import Author from "../author-pad";
import Mentors from "@/compnents/mentors";

const About: React.FC = () => {
  return (
    <div className={style.about}>
      <Container>
        <section className={style.about_container}>
          <Author />
        </section>
        <section className={style.mentors}>
          <Mentors />
        </section>
      </Container>
    </div>
  );
};
export default About;
