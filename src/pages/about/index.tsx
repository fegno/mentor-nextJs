import React from "react";
import style from "./abou.module.scss";
import Container from "@/compnents/container";
import Author from "@/compnents/author-pad";
import Mentors from "@/compnents/mentors";
import DirectorBio from "@/compnents/director-bio";

const About: React.FC = () => {
  return (
    <div className={style.about}>
      <Container>
        <section className={style.about_container}>
          <Author />
        </section>
        <section className={style.director_block}>
          <DirectorBio />
        </section>
        <section className={style.mentors}>
          <Mentors />
        </section>
      </Container>
    </div>
  );
};
export default About;
