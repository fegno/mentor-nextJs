import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import reddit from "../../assets/reddit.svg";

export const CONST = {
    MENU:[
        {
            title:"Home",link:"/home"
        },{
            title:"About Us",link:"/about"
        },{
            title:"Blog",link:"/blog-and-views"
        },{
            title:"Contact",link:"/contact"
        }
    ],
    COURSES:[
        {title:"B.Tech CSE",link:"/"},
        {title:"B.Tech CSE AI and ML",link:"/"},
        {title:"B.Tech CSE AI and DSC",link:"/"},
        {title:"B.Tech CSE IOT",link:"/"},
        {title:"B.Tech CSE CYBER SECURITY",link:"/"},
        {title:"B.Tech CSE BLOCKCHAIN",link:"/"},
    ],
    SOCIAL_LINKS :[
     {title:"Facebook",icon: facebook.src,link:"https://www.facebook.com/MADEITMENTOR/"},
     {title:"LinkedIn",icon: linkedin.src,link:"https://www.linkedin.com/company/mentor-engineering-college/"},
     {title:"Instagram",icon: instagram.src,link:"https://www.instagram.com/__mentor_academy__/"},
     {title:"Reddit",icon: reddit.src,link:"https://www.reddit.com/user/Mentorow"},
    ]
}