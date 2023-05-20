import React, { useState } from "react";
import style from "./GalleryEvents.module.scss";
import GalleryCard from "../gallery-card";
import Title from "../title";
import fest1 from "../../assets/fest1.png";
import fest2 from "../../assets/fest2.png";
import CustomModal from "../modal";
import GalleryEventSlider from "../gallery-event-slider";

type galleryEventsProps = {
  events: any;
};

const GalleryEvents: React.FC<galleryEventsProps> = ({ events }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={style.gallery_container}>
      {events && <CustomModal isOpen={isModalOpen} close={toggleModal}>
        <GalleryEventSlider data={events[selectedEventIndex]}/>
      </CustomModal>}
      <div className={`${style.gallery_title}`}>
        <Title title="Events" align="center" />
      </div>
      {events?.map((fest: any, index: number) => {
        return (
          <div
            className={`${style.gallery_card_wrapper}`}
            key={index}
            onClick={() => {
              toggleModal();
              setSelectedEventIndex(index);
            }}
          >
            <GalleryCard data={fest} />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryEvents;
