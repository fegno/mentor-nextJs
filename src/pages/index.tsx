import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/compnents/banner";
import ContactForm from "@/compnents/contact-form";
import HomepageNewsAndBlog from "@/compnents/homepage-news-blog";
import HomepageFeatures from "@/compnents/homepage-features";
import HomepageOurVision from "@/compnents/homepage-our-vision";
import Container from "@/compnents/container";
import HomepageOurValues from "@/compnents/homepage-our-values";
import HomepageBenefits from "@/compnents/homepage-benefits";
import HomePageClassroom from "@/compnents/class-room";
import HomepageCourses from "../compnents/homepage-courses";
import ComparisonTable from "@/compnents/comparison-table";
import CheckDesign from "@/compnents/check-design";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <CheckDesign /> */}
      <section className="mt-5">
        <Container>
          <HomePageClassroom />
        </Container>
      </section>
      <section className={styles.courses}>
        {/* <CheckDesign> */}
          <Container>
            <HomepageCourses hasContainer />
          </Container>
        {/* </CheckDesign> */}
      </section>
      <section className={styles.our_vision}>
        <Container>
          <HomepageOurVision />
        </Container>
      </section>
      <section className={styles.our_values}>
        <Container>
          <HomepageOurValues />
        </Container>
      </section>
      <section className={styles.benefits}>
        <Container>
          <HomepageBenefits />
        </Container>
      </section>
      <section className={styles.comparison_table}>
        <Container noPadding>
          <ComparisonTable />
        </Container>
      </section>
      <section className={styles.features}>
        <HomepageFeatures />
      </section>
      <section id="apply_now">
        <ContactForm />
      </section>
      <section>
        <HomepageNewsAndBlog />
      </section>
    </div>
  );
}
