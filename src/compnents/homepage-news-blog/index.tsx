import React from "react";
import Button from "../button";
import Title from "../title";
import style from "./HomepageNewsAndBlog.module.scss";

const HomepageNewsAndBlog: React.FC = () => {
  return (
    <div className={style.news_and_blog_wrapper}>
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
                      ob, it will launch you for the opportunities of tomorrow.
                      At MENTOR you learn to learn so you keep growing
                      professionally. Rather than offering a series of short
                      training courses about specific technologies and languages
                      that will quickly become obsolete, at MADEIT you learn how
                      to learn throughout your life in order to adapt to new
                      technologies yet to be developed. With this skill in your
                      pocket, you remain up-to-date and future proofed for the
                      jobs of tomorrow.
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
              <div className="col-12 card-blue p-5 rounded-20 mb-4">
                <div className="d-block">
                  <p>The Web`&apos;`s Largest Collection of DevOps Content</p>
                </div>
                <div className="d-block">
                  <strong> Mentor College</strong> | 20-Jan-2023
                </div>
              </div>
              <div className="col-12 card-ash p-5 rounded-20 mb-4">
                <div className="d-block">
                  <p>The Web`&apos;`s Largest Collection of DevOps Content</p>
                </div>
                <div className="d-block">
                  <strong> Mentor College</strong> | 20-Jan-2023
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-0">
                <Button width="fullwidth" href="/">
                  View all news and blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageNewsAndBlog;
