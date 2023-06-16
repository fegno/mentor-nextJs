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
      title: "MOOCS",
      link: "https://swayam.gov.in/",
      redirect:true
    },
    {
      title: "Mandatory Disclosure",
      link: "/mandatory-disclosure",
    },
    {
      title: "Grievance Redressal Cell",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd4XIBIabEK4X3dUcj-E2nySTghOatHsf9JgK10jnHdGCRjFQ/viewform?usp=send_form",
      redirect:true
    },
    {
      title: "AICTE Grievance Redressal Cell",
      link: "https://www.aicte-india.org/bureaus/grievance-redressal",
      redirect:true
    },
    {
      title: "Governing board and advisory board",
      link: "/governing-board-and-advisory-board",
    },
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
