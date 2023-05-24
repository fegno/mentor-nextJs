import React ,{useState,useEffect} from "react";
import style from "./Gallery.module.scss";
import Title from "@/compnents/title";
import Container from "@/compnents/container";
import GalleryCard from "@/compnents/gallery-card";
import GalleryEvents from "@/compnents/gallery-events";
import GalleryBanner from "@/compnents/gallery-banner";
import GalleryCampus from "@/compnents/gallery-campus";
import GalleryImages from "@/compnents/gallery-images";
import { http } from "@/axios/http";

const Gallery: React.FC = () => {
const[data,setData]:any = useState([])

useEffect(()=>{
  http.get('galleries?populate=deep').then((res)=>{
    setData(res.data.data);
  })
},[])
  return (
    <div className={style.gallery}>
      <GalleryBanner />
      <Container>
        <section>
          <GalleryCampus />
        </section>
        <GalleryImages images={data[0]?.attributes?.images.data} />
        <section>
          <GalleryEvents events={data[0]?.attributes?.events} />
        </section>
      </Container>
    </div>
  );
};
export default Gallery;
