import React from "react";
import style from "./GoverningBoard.module.scss";
import Container from "@/compnents/container";
import Title from "@/compnents/title";
import founder from "../../assets/about/founder.jpg";
import director from "../../assets/about/ramkumar.jpg";
import Author from "@/compnents/author-pad";
import manoj from "../../assets/Manoj Hari (1).jpg";
import abin from "../../assets/Abin (1).jpg"
import sujas from "../../assets/Sujas Ali (1).jpg";

const GoverningBoard: React.FC = () => {
  const PROFILE = [
    {
      name: "Ramkumar S",
      photo: director.src,
      designation:
        " Director | Mentor Academy for Design Entrepreneurship Innovation and Technology",
      description:
        "Ramkumar S is Director at Mentor Academy for Design Entrepreneurship Innovation and Technology. He has formerly worked at Indian Institute of Technology, Hyderabad, as chief operating officer at the center for healthcare entrepreneurship. He has impervious experience in healthcare entrepreneurship industry and academia. He works closely with faculty members, students, and industry experts to develop cutting-edge solutions to address some of the most pressing challenges in healthcare."
    },
    {
      name: "T R Shamsudheen",
      photo: founder.src,
      designation:
        " Founder and CEO | Mentor Academy for Design Entrepreneurship Innovation and Technology",
      description:
        "T R Shamsudheen is the founder and CEO of Mentor Academy for Design Entrepreneurship Innovation and Technology. He has a remarkable track record in the fields of education, entertainment and technology. Experience in these fields have served as a source of inspiration for many, and his commitment to excellence has earned him a reputation as a visionary leader and innovator across the media and the startup ecosystem."
    },
    {
      name: "Abin Jos Tom",
      photo: abin.src,
      designation:
        " Founder and CEO - Webandcrafts",
      // description:
      //   "T R Shamsudheen is the founder and CEO of Mentor Academy for Design Entrepreneurship Innovation and Technology. He has a remarkable track record in the fields of education, entertainment and technology. Experience in these fields have served as a source of inspiration for many, and his commitment to excellence has earned him a reputation as a visionary leader and innovator across the media and the startup ecosystem."
    },
    {
      name: "Manoj Hari",
      photo: manoj.src,
      designation:
        " Founder | Director - Fegno Technologies",
      // description:
      //   "T R Shamsudheen is the founder and CEO of Mentor Academy for Design Entrepreneurship Innovation and Technology. He has a remarkable track record in the fields of education, entertainment and technology. Experience in these fields have served as a source of inspiration for many, and his commitment to excellence has earned him a reputation as a visionary leader and innovator across the media and the startup ecosystem."
    },
    {
      name: "Sujas Ali",
      photo: sujas.src,
      designation:
        " Founder & CEO - Aabasoft",
      // description:
      //   "T R Shamsudheen is the founder and CEO of Mentor Academy for Design Entrepreneurship Innovation and Technology. He has a remarkable track record in the fields of education, entertainment and technology. Experience in these fields have served as a source of inspiration for many, and his commitment to excellence has earned him a reputation as a visionary leader and innovator across the media and the startup ecosystem."
    },
  ];

  return (
    <div className={style.governing_board}>
      <Container>
        <div className={style.title}>
          <Title title="Governing board and advisory board" />
        </div>
        <div className={style.wrapper}>
          {PROFILE.map((item: any, index: number) => {
            return <div className={style.card} key={index}>
                <Author data={item} isRight={index%2!=0}/>
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default GoverningBoard;
