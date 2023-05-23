import React,{useState,useEffect} from "react";
import style from './Blog-articles.module.scss'
import Title from "@/compnents/title";
import BlogCard from "../../compnents/blog-card";
import Container from "@/compnents/container";
import Link from "next/link";
import { http } from "@/axios/http";
import Loading from "@/compnents/loading";

const Blogs : React.FC = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    http.get("/newsandblogs?populate=deep").then((res: any) => {
      setData(res.data.data);
      setLoading(false)
    }).catch((err)=>{
      setLoading(false)
    });
  }, []);
    return(
        <Container>
            {loading &&<Loading />}
            <div className={`${style.blog_container}`}>
                <div className={`${style.blog_name}`}>
                    <Title title="Blog articles" align="left"/>
                </div>
                {/* <div className={`${style.blog_count}`}>
                    20-25 of 60 articles
                </div> */}
                <div className={`${style.blog_card_container}`}>
                    {data?.map((blog : any ,index : number)=>{
                        return(
                            <div className={`${style.blog_card_wrapper}`} key={index}>
                                <Link href={`/blog/${blog?.id}`}>
                                <BlogCard data={blog?.attributes} />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}
export default Blogs;