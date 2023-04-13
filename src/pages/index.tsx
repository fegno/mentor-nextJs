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
import Courses from "@/compnents/courses";
import HomepageNewsAndBlog from "@/compnents/homepage-news-blog";
import HomepageFeatures from "@/compnents/homepage-features";
import HomepageOurVision from "@/compnents/homepage-our-vision";
import Container from "@/compnents/container";
import HomepageOurValues from "@/compnents/homepage-our-values";
import HomepageBenefits from "@/compnents/homepage-benefits";
import HomePageClassroom from "@/compnents/class-room";
import NoSSR from "react-no-ssr";
import HomepageCourses from "@/compnents/homepage-courses";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section className="mt-5">
        <Container>
          <HomePageClassroom />
        </Container>
      </section>
      {/* <section>
          <Courses />
      </section> */}
      <section>
        <HomepageCourses />
      </section>
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
      <section className="py-5 my-5">
        <Container>
          <HomepageBenefits />
        </Container>
      </section>
      <section className="my-5">
        <HomepageFeatures />
      </section>
      <section className="pt-5">
        <ContactForm />
      </section>
      <section className="my-5">
        <HomepageNewsAndBlog />
      </section>
      <Footer />
    </>
  );
}
