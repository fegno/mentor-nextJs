import React from 'react'
import style from "./SkillsMobiel.module.scss";
import image1 from "../../assets/skills/1.png"
import image2 from "../../assets/skills/2.png"
import image3 from "../../assets/skills/3.png"
import image4 from "../../assets/skills/4.png"
const SkillsMobile: React.FC = () => {
    const DATA = [
        { title: "Cryptography", description: "Blockchain technology relies heavily on cryptography to ensure secure transactions. Knowledge of encryption techniques such as hashing, digital signatures, and public-key cryptography is a fundamental requirement.", image: image1 },
        { title: "Data Structures", description: "Understanding data structures such as Merkle Trees, Hash Tables, and Directed Acyclic Graphs (DAG) is essential for working with blockchain technology. These structures allow for efficient and secure data storage and retrieval.", image: image2 },
        { title: "Cryptography", description: "Blockchain technology relies heavily on cryptography to ensure secure transactions. Knowledge of encryption techniques such as hashing, digital signatures, and public-key cryptography is a fundamental requirement.", image: image3 },
        { title: "Data Structures", description: "Understanding data structures such as Merkle Trees, Hash Tables, and Directed Acyclic Graphs (DAG) is essential for working with blockchain technology. These structures allow for efficient and secure data storage and retrieval.", image: image4 },
    ]
    return (
        <div className={style.skills_mobile}>
            <div className={style.title}>
                Top Blockchain Skills
            </div>
            {DATA.map((item: any, index: number) => {
                return <div key={index} className={`row ${style.card} ${index % 2 == 0 ? style.right : ""}`}>
                    <div className={`col-4 `}>
                        <div className={style.image_wrapper}>
                            <img src={item.image.src} />
                        </div>
                    </div>
                    <div className={`col-8 ${style.content_wrapper}`}>
                        <span className={style.title}>{item.title} {" "}:{" "}</span>
                        {item.description}
                    </div>
                </div>
            })}
        </div>
    )
}

export default SkillsMobile