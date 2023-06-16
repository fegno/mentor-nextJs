import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import reddit from "../../assets/reddit.svg";

export const CONST = {
  MENU: [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Blogs",
      link: "/blog-and-views",
    },
    // {
    //   title: "Contact",
    //   link: "/contact",
    // },
    {
      title: "Privacy",
      link: "/privacy-policy",
    },
    {
      title: "LOA and EOA",
      link: "/loa-and-eoa",
    },
    {
      title: "Grievance Redressal Cell - College",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd4XIBIabEK4X3dUcj-E2nySTghOatHsf9JgK10jnHdGCRjFQ/viewform?usp=send_form",
      redirect:true
    },
    {
      title: "Grievance Redressal Cell - University",
      link: "https://www.aicte-india.org/bureaus/grievance-redressal",
      redirect:true
    },
  ],
  COURSES: [
    { title: "B.Tech in CS", link: "/course-detail/6" },
    { title: "B.Tech in AI and ML", link: "/course-detail/3" },
    { title: "B.Tech in AI and DSc", link: "/course-detail/5" },
    { title: "B.Tech in IOT", link: "/course-detail/8" },
    { title: "B.Tech in CYBER SECURITY", link: "/course-detail/7" },
    { title: "B.Tech in BLOCKCHAIN", link: "/course-detail/4" },
  ],
  SOCIAL_LINKS: [
    {
      title: "Facebook",
      icon: facebook.src,
      link: "https://www.facebook.com/MADEITMENTOR/",
    },
    {
      title: "LinkedIn",
      icon: linkedin.src,
      link: "https://www.linkedin.com/company/mentor-engineering-college/",
    },
    {
      title: "Instagram",
      icon: instagram.src,
      link: "https://www.instagram.com/__mentor_academy__/",
    },
    {
      title: "Reddit",
      icon: reddit.src,
      link: "https://www.reddit.com/user/Mentorow",
    },
  ],
};
