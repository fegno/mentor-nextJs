import React from "react";
import style from "./Events.module.scss";
import Title from "@/compnents/title";
import EventCard from "../../compnents/event-card";
import Container from "@/compnents/container";
import Devops from "../../assets/Devops.png";
import UI from "../../assets/ultra_intelligence.png";
import Connectivity from "../../assets/5g_connectivity.png";
import CC from "../../assets/cloud_computing.png";
import AI from "../../assets/artificial_intelligence.png";
import Link from "next/link";

const Events: React.FC = () => {
  const ITEMS = [
    {
      image: Devops.src,
      isUpcoming: true,
      title: "Code Ninja Tech Summit 2k23",
      author: "John Nathan",
      dop: "20-Jan-2023",
      content:
        "The Web's Largest Collection of DevOps Content is a comprehensive resource for all things related to DevOps, covering a wide range of topics including continuous integration and delivery, automation, cloud computing, containerization, monitoring, security, and more. This collection is a one-stop-shop for developers, IT professionals, and organizations looking to adopt or improve their DevOps practices. The collection includes articles, tutorials, videos, webinars, podcasts, and whitepapers from industry experts and thought leaders. These resources cover everything from basic concepts to advanced techniques and provide practical guidance on how to implement DevOps in real-world scenarios. Additionally, the collection is updated regularly to reflect the latest trends, tools, and technologies in the DevOps space. One of the key benefits of the Web's Largest Collection of DevOps Content is that it brings together diverse perspectives and experiences from a broad range of practitioners, making it a valuable resource for both beginners and experienced DevOps professionals. With so much information available in one place, it's easy to find relevant and helpful content that can help accelerate DevOps adoption and improve organizational agility and efficiency. Overall, the Web's Largest Collection of DevOps Content is an indispensable resource for anyone looking to build or improve their DevOps practice.",
    },
    {
      image: UI.src,
      title: "HackFest Hackathon",
      author: "Mentor College",
      dop: "20-Jan-2023",
      content:
        "The first WoW processor and ultraintelligence are two fascinating and groundbreaking technologies that have revolutionized the world of computing. The WoW processor, also known as the World's fastest Optimized Waveshaper, was designed by IBM in 1998 and was the first processor to break the one-gigahertz barrier. On the other hand, ultraintelligence refers to the hypothetical future development of artificial intelligence systems that surpass human intelligence. The WoW processor was a significant leap forward in processor technology, offering faster clock speeds and higher bandwidths than previous processors. It was designed to process complex waveforms, making it ideal for multimedia applications such as video and audio encoding and decoding. The processor's ability to handle ",
    },
    {
      image: Connectivity.src,
      isUpcoming: true,
      title: "How 5G is Revolutionizing Mobile Connectivity",
      author: "Mentor College",
      dop: "20-Jan-2023",
      content:
        "The fifth generation of mobile networks, or 5G, is revolutionizing mobile connectivity in many ways. 5G is a significant upgrade over previous generations of wireless networks, providing faster speeds, lower latency, and greater capacity. This new technology is expected to have a profound impact on the world, enabling new applications and services that were previously impossible. One of the most significant benefits of 5G is its speed. 5G networks can provide speeds up to 100 times faster than 4G, with some estimates suggesting that speeds of up to 10 Gbps could be possible. This means that users will be able to download and upload data much faster, stream higher quality video, and enjoy a better overall mobile experience. Another benefit of 5G is its lower latency. Latency refers to the delay between sending and receiving data over a network. With 5G, latency is expected to be reduced to just a few milliseconds, which is a significant improvement over the 20 to 30 milliseconds that are typical with 4G. This lower latency will make real-time applications like gaming, virtual and augmented reality, and autonomous vehicles possible. 5G is also expected to provide greater capacity, The WoW processor was a significant leap forward in processor technology, offering faster clock speeds and higher bandwidths than previous processors. It was designed to process complex waveforms, making it ideal for multimedia applications such as video and audio encoding and decoding. The processor's ability to handle ",
    },
    {
      image: CC.src,
      title: "Cloud Computing: Benefits and Risks",
      author: "Mentor College",
      dop: "20-Jan-2023",
      content:
        "Cloud computing has become increasingly popular in recent years as a way for businesses and individuals to access and store data and applications online. There are many benefits to cloud computing, but there are also some risks that should be considered. One of the main benefits of cloud computing is cost savings. By using cloud services, businesses can avoid the upfront costs of purchasing and maintaining their own hardware and software. They can also pay for only what they need, and scale their usage up or down as required. Another benefit is accessibility. Cloud computing allows users to access their data and applications from anywhere with an internet connection. This makes it easier to work remotely and collaborate with others in different locations. However, there are also some risks associated with cloud computing. One of the main risks is data security. Storing data in the cloud means that it is accessible from anywhere, which can make it more vulnerable to hacking and other cyber threats. There is also the risk of data loss if",
    },
    {
      image: AI.src,
      title: "The Future of Work: How Technology is Transforming the Workplace",
      author: "Mentor College",
      dop: "20-Jan-2023",
      content:
        "Technology is transforming the workplace in many ways, and the future of work is likely to be very different from what we see today. As automation and artificial intelligence become increasingly prevalent, many jobs are at risk of being replaced by machines. However, new opportunities are also emerging, and there is a growing need for workers with advanced skills in areas like data science, cybersecurity, and digital marketing. One of the most significant changes that technology is bringing to the workplace is the rise of remote work. Advances in communication and collaboration tools are making it easier for employees to work from home or other remote locations. This has many benefits, including increased productivity, reduced commuting time and costs, and a better work-life balance for employees. Another trend that is likely to continue is the gig economy. More and more workers are choosing to ",
    },
  ];
  return (
    <Container>
      <div className={`${style.event_container}`}>
        <div className={`${style.event_name}`}>
          <Title title="Events" align="left" />
        </div>
        <div className={`${style.event_count}`}>20-25 of 60 articles</div>
        <div className={`${style.event_card_container}`}>
          {ITEMS.map((event: any, index: number) => {
            return (
              <div className={`${style.event_card_wrapper}`} key={index}>
                <Link href="/event-detail/1">
                  <EventCard data={event} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
export default Events;
