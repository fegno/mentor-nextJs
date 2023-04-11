import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import AnimatedTitle from "@/compnents/animated-title";
import BenefitsCard from "@/compnents/benefits";
import Title from "@/compnents/title";
import Banner from "@/compnents/banner";
import Header from "@/compnents/header";
import Footer from "@/compnents/footer";
import ContactForm from "@/compnents/contact-form";
import Button from "@/compnents/button";
import HomepageNewsAndBlog from "@/compnents/homepage-news-blog";
import HomepageFeatures from "@/compnents/homepage-features";
import HomepageOurVision from "@/compnents/homepage-our-vision";
import Container from "@/compnents/container";
import HomepageOurValues from "@/compnents/homepage-our-values";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="my-5 py-5">
        <Container>
          <HomepageOurVision />
        </Container>
      </section>
      <section className="my-5 pt-5">
        <Container>
          <HomepageOurValues />
        </Container>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <Title title="Your Benefits" />
            </div>
          </div>
          <div className="row py-5 justify-content-center">
            <div className="col-12 col-md-4">
              <BenefitsCard title="Not Just a job : A Career" />
            </div>
            <div className="col-12 col-md-4">
              <BenefitsCard title="Capstone (project) - Based Pedagogy" />
            </div>
            <div className="col-12 col-md-4">
              <BenefitsCard title="Peer to peer learning" />
            </div>
            <div className="col-12 col-md-4">
              <BenefitsCard title="Gamification" />
            </div>
            <div className="col-12 col-md-4">
              <BenefitsCard title="Chief technical officers as entors" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <HomepageFeatures />
      </section>
      <section className="pt-5">
        <ContactForm />
      </section>
      <section>
        <HomepageNewsAndBlog />
      </section>
      <Footer />
    </>
  );
}
