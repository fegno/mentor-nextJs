import React, { useState, useEffect } from "react";
import Container from "@/compnents/container";
import style from "./Blog.module.scss";
import { useRouter } from "next/router";
import { http } from "../../axios/http";
import { CONFIG } from "@/config/config";
import Loading from "@/compnents/loading";

const EventDetail: React.FC = () => {
  const [data, setData]: any = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id }: any = router.query;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await http.get(`/newsandblogs/${id}?populate=deep`);
      if (response.data.data) {
        setData(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  const event = data?.attributes;
  return (
    <Container>{loading &&<Loading />}
      <div className={style.event_detail_container}>
        <div className={style.event_detail_wrapper}>
          {event?.cover_image?.data && (
            <div className={style.event_banner_img}>
              <img
                src={`${CONFIG.baseUrl}${event?.cover_image?.data?.attributes?.url}`}
                alt="banner"
              />
            </div>
          )}
          <div className={style.event_detail_head}>{event?.title}</div>
          <div className={style.event_details}>
           {event?.date && <div className={style.eve_type}>
              Event date: <span className={style.eve_value}>{event?.date}</span>
            </div>}
           {event?.event_organized_by && <div className={style.eve_type}>
              Event organized by :{" "}
              <span className={style.eve_value}>
                {event?.event_organized_by}
              </span>
            </div>}
           {event?.venue && <div className={style.eve_type}>
              Venue : <span className={style.eve_value}>{event?.venue}</span>
            </div>}
          </div>
          <div className={style.eve_dec}>
            <p>{event?.description}</p>
          </div>
          {event?.powered_by?.data && (
            <div className={style.event_sponsors}>
              <div className={style.sponsor_heading}>Powered by :</div>
              <div className={style.sponsors_img}>
                {event?.powered_by?.data?.map((image: any, index: number) => {
                  return (
                    <img
                      src={`${CONFIG.baseUrl}${image?.attributes?.url}`}
                      alt="sponsors"
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
export default EventDetail;