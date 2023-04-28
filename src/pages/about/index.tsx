import React from "react";
import style from "./abou.module.scss";
import Container from "@/compnents/container";
<<<<<<< HEAD
import Author from "../../compnents/author-pad";
=======
import Author from "../author-pad";
import Mentors from "@/compnents/mentors";
>>>>>>> f4e7ff3091152a1309c5886d27febb66f60ab04b

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
