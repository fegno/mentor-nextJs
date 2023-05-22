import React, { useEffect, useState } from "react";
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
import { http } from "@/axios/http";
import Loading from "@/compnents/loading";

const Events: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    http.get("/events?populate=deep").then((res: any) => {
      setData(res.data.data);
      setLoading(false)
    }).catch((err)=>{
      setLoading(false)
    });
  }, []);
  return (
    <Container>
      {loading&&<Loading />}
      <div className={`${style.event_container}`}>
        <div className={`${style.event_name}`}>
          <Title title="Events" align="left" />
        </div>
        {/* <div className={`${style.event_count}`}>20-25 of 60 articles</div> */}
        <div className={`${style.event_card_container}`}>
          {data.map((event: any, index: number) => {
            return (
              <div className={`${style.event_card_wrapper}`} key={index}>
                <Link href={`/event-detail/${event.id}`}>
                  <EventCard data={event.attributes} />
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
