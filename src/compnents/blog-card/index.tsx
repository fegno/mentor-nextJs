import React from "react";
import style from "./BlogCard.module.scss";
import { CONFIG } from "@/config/config";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
type BlogProps = {
  data: any;
};

const BlogCard: React.FC<BlogProps> = ({ data }) => {
  return (
    <div className={style.blog_card}>
      <div className={`row ${style.blog_row}`}>
        <div className={`col-4 col-sm-2 ${style.blog_img}`}>
          <Image
            src={`${CONFIG.baseUrl}${data?.thumbnail?.data?.attributes?.url}`}
            alt="img"
            width={200}
            height={200}
          />
        </div>
        <div className={`col-8 col-sm-10 ${style.blog_data_wrapper}`}>
          <div className={`${style.blog_title}`}>{data.title}</div>
          <div className={`${style.blog_detail}`}>
            <span className={`${style.blog_author}`}>{data.author}</span>
            <span className={`${style.blog_dop}`}>{data.date}</span>
          </div>
          <div className={`${style.blog_content}`}>
            <ReactMarkdown>{data?.description}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
