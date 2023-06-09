import React from "react";
import style from "./abou.module.scss";
import Container from "@/compnents/container";
import Mentors from "@/compnents/mentors";
import Author from "../../compnents/author-pad";
import AboutBanner from "@/compnents/about-banner";
import AboutAchievements from "@/compnents/about-achievements";
import DirectorBio from "@/compnents/director-bio";
import AboutBioWrapper from "@/compnents/about-bio-wrapper";
import AboutAuthorSection from "@/compnents/about-author-section";

const About: React.FC = () => {
  return (
    <div className={style.about}>
      <div className={style.banner}>
        <AboutBanner />
      </div>
      <Container>
        <section className={style.about_container}>
          <AboutAuthorSection />
        </section>
        {/* <section className={style.director_block}>
          <AboutBioWrapper />
        </section> */}
        <section className={style.mentors}>
          <Mentors />
        </section>
        <section>
          <AboutAchievements />
        </section>
      </Container>
    </div>
  );
};
export default About;
