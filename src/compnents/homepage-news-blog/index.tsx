import React, { useState, useEffect } from "react";
import Button from "../button";
import Title from "../title";
import style from "./HomepageNewsAndBlog.module.scss";
import { http } from "@/axios/http";

const HomepageNewsAndBlog: React.FC = () => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    http.get("/newsandblogs?populate=*").then((res) => {
      setData(res?.data?.data);
    });
  }, []);

  return (
    <div className={style.news_and_blog_wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="News and Blog" />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-md-7 ">
           {data[0] && <div className="row">
              <div className={`col-12 card-gray rounded-20 p-5 ${style.card}`}>
                <div className="d-block">
                  <div className="d-block">
                    <h3>{data[0]?.attributes?.title}</h3>
                  </div>
                  <div className="d-block">
                    <p>{data[0]?.attributes?.description}</p>
                  </div>
                  <div className="d-block">
                    <strong>{data[0]?.attributes?.Author}</strong> |{" "}
                    {data[0]?.attributes?.date}
                  </div>
                </div>
              </div>
            </div>}
          </div>
          <div className="col-12 col-md-5 px-4">
            <div className={`row ${style.trending_news}`}>
              {data[1] && (
                <div className="col-12 card-blue p-5 rounded-20 mb-4">
                  <div className="d-block">
                    <p>{data[1]?.attributes?.title}</p>
                  </div>
                  <div className="d-block">
                    <strong> {data[1]?.attributes?.Author}</strong> |{" "}
                    {data[1]?.attributes?.date}
                  </div>
                </div>
              )}
              {data[2] && (
                <div className="col-12 card-ash p-5 rounded-20 mb-4">
                  <div className="d-block">
                    <p>{data[2]?.attributes?.title}</p>
                  </div>
                  <div className="d-block">
                    <strong> {data[2]?.attributes?.Author}</strong> |{" "}
                    {data[2]?.attributes?.date}
                  </div>
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-12 px-0">
                <Button width="fullwidth" href="/blog-and-views">
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
