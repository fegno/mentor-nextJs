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
export default function Home() {
  return (
    <>
    <Header />
    <Banner />
      <section>
        <div className="container py-5">
          <div className="d-block card-glowing-blue p-5 rounded-20">
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
            <div className="col-12 col-md-4">
              <AnimatedTitle title="100%" subTitle="Placements" />
            </div>
            <div className="col-12 col-md-4">
              <AnimatedTitle title="3-10" subTitle="Lakhs/Annum" />
            </div>
            <div className="col-12 col-md-4">
              <AnimatedTitle title="4 year" subTitle="Course duration" />
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
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Title title="News and Blog" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7 p-4">
              <div className="row">
                <div className="col-12 card-gray rounded-20 p-5">
                  <div className="d-block">
                    <div className="d-block">
                      <h3>
                        TO TRAIN YOU TODAY FOR THE OPPORTUNITIES OF TOMORROW
                      </h3>
                    </div>
                    <div className="d-block">
                      <p>
                        The training at MADEIT Will not only grant you a career,
                        ob, it will launch you for the opportunities of
                        tomorrow. At MENTOR you learn to learn so you keep
                        growing professionally. Rather than offering a series of
                        short training courses about specific technologies and
                        languages that will quickly become obsolete, at MADEIT
                        you learn how to learn throughout your life in order to
                        adapt to new technologies yet to be developed. With this
                        skill in your pocket, you remain up-to-date and future
                        proofed for the jobs of tomorrow.
                      </p>
                    </div>
                    <div className="d-block">
                      <strong>John Nathan</strong> | 20-Jan-2023
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 p-4">
              <div className="row">
                <div className="col-12 card-blue p-5 rounded-20">
                  <div className="d-block">
                    <p>The Web`&apos;`s Largest Collection of DevOps Content</p>
                  </div>
                  <div className="d-block">
                    <strong> Mentor College</strong> | 20-Jan-2023
                  </div>
                </div>
                <div className="col-12 card-ash p-5 rounded-20">
                  <div className="d-block">
                    <p>The Web`&apos;`s Largest Collection of DevOps Content</p>
                  </div>
                  <div className="d-block">
                    <strong> Mentor College</strong> | 20-Jan-2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
