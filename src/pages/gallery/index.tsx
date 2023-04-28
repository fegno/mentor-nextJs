import React from "react";
import style from './Gallery.module.scss';
import Title from "@/compnents/title";
import Container from "@/compnents/container";
import GalleryCard from "@/compnents/gallery-card";
import fest1 from '../../assets/fest1.png';
import fest2 from '../../assets/fest2.png';

const Gallery: React.FC = () =>{
    const PROGRAM = [
        {   image:fest1.src,
            title:"Techtonic 2k22",
            name :"Technological fest",
            content:"Cloud computing has become increasingly popular in recent years as a way for businesses and individuals to access and store data and applications online. There are many benefits to cloud computing, but there are also some risks that should be considered. One of the main benefits of cloud"
        },
        {   image:fest2.src,
            title:"Cultural and Ethnic Fest ",
            name :"Technological fest",
            content:"Cloud computing has become increasingly popular in recent years as a way for businesses and individuals to access and store data and applications online. There are many benefits to cloud computing, but there are also some risks that should be considered. One of the main benefits of cloud"
        },
        {   image:fest1.src,
            title:"Techtonic 2k22",
            name :"Technological fest",
            content:"Cloud computing has become increasingly popular in recent years as a way for businesses and individuals to access and store data and applications online. There are many benefits to cloud computing, but there are also some risks that should be considered. One of the main benefits of cloud"
        },
        {   image:fest2.src,
            title:"Cultural and Ethnic Fest ",
            name :"Technological fest",
            content:"Cloud computing has become increasingly popular in recent years as a way for businesses and individuals to access and store data and applications online. There are many benefits to cloud computing, but there are also some risks that should be considered. One of the main benefits of cloud"
        }   
    ]
    return(
        <Container>
            <div className={style.gallery_container}>
                <div className={`${style.gallery_title}`}>
                    <Title title="Events" align="center" />
                </div>
                {PROGRAM.map((fest: any, index: number) => {
                    return (
                    <div className={`${style.gallery_card_wrapper}`} key={index}>
                        <GalleryCard data={fest} />
                    </div>
                    );
                })}
            </div>
        </Container> 
    )
}
export default Gallery