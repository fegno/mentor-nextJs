import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import reddit from "../../assets/reddit.svg";

export const CONST = {
    MENU:[
        {
            title:"Home",link:"/"
        },{
            title:"About Us",link:"/about"
        },{
            title:"Blog",link:"/blog-and-views"
        },{
            title:"Contact",link:"/contact"
        }
    ],
    COURSES:[
        {title:"B.Tech in CS",link:"/course-detail/6"},
        {title:"B.Tech in AI and ML",link:"/course-detail/3"},
        {title:"B.Tech in AI and DSC",link:"/course-detail/5"},
        {title:"B.Tech in IOT",link:"/course-detail/8"},
        {title:"B.Tech in CYBER SECURITY",link:"/course-detail/7"},
        {title:"B.Tech in BLOCKCHAIN",link:"/course-detail/4"},
    ],
    SOCIAL_LINKS :[
     {title:"Facebook",icon: facebook.src,link:"https://www.facebook.com/MADEITMENTOR/"},
     {title:"LinkedIn",icon: linkedin.src,link:"https://www.linkedin.com/company/mentor-engineering-college/"},
     {title:"Instagram",icon: instagram.src,link:"https://www.instagram.com/__mentor_academy__/"},
     {title:"Reddit",icon: reddit.src,link:"https://www.reddit.com/user/Mentorow"},
    ]
}