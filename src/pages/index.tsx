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
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section>
        <div className="container py-5">
          <div className="d-block card-glowing-blue p-5 rounded-20 animated-border-glow">
            <div className="row mb-4">
              <div className="col-8">
                <Title align="left" title="Our Vision" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>TO TRAIN YOU TODAY FOR THE OPPORTUNITIES OF TOMORROW</h4>
              </div>
              <div className="col-12">
                <p>
                  MADEIT is committed to offer an integrated training on the
                  eight pillars of IR 4.0 to the people. Our unique position in
                  the world of higher education is based on strong values:
                  inclusivity, open culture, and always aiming at excellence.
                  The ultimate goal is sustainable professional integration into
                  the labor market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="card-violet animated-border-glow rounded-30 p-4">
                <span className="d-block">TO TRAIN YOU</span>
                <span className="d-block">TODAY FOR THE</span>
                <span className="d-block">OPPORTUNITIES OF</span>
                <span className="d-block">TOMORROW</span>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-black animated-border-glow rounded-30 p-4">
                <div>
                  <p>
                    At MADElT, we believe in differentiation and inclusivity.
                    The education model focuses on project-based learning and
                    teamwork, rather than theoretical education. As we integrate
                    the latest educational innovations, our goal is to empower
                    the next leading generation of IT talent.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      We have mentors and mentees instead of teachers and
                      students
                    </li>
                    <li>Capstone ( project) -BASED PEDAGOGY</li>
                    <li>PEER-TO-PEER LEARNING</li>
                    <li>GAMIFICATION</li>
                    <li>Chief technical officers as MENTORS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <ContactForm />
      <section>
        <HomepageNewsAndBlog />
      </section>
      <Footer />
    </>
  );
}
