import react, { useEffect, useRef, useState, useCallback } from "react";
import style from "./Banner.module.scss";
import Slider from "react-slick";
import bg_small from "../../assets/bg-small.png";
import banner2 from "../../assets/banner-2.png";
import { gsap } from "gsap";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const SETTINGS = {
  slidesToShow: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade:true,
};
const SETTINGS_2 = {
  dots: false,
  slidesToShow: 1,
  arrows: false,
  fade: true,
  draggable: false,
  autoplaySpeed: 3000,
  autoplay: true,
};
const getSelector = (id: number, type: string) => {
  return `_item_${id}_${type}`;
};
const SPILTTED_CLASS_NAME = "splited-item";
const Slide: React.FC<{ image: any; id: any }> = ({ image, id }) => {
  return (
    <div
      className={style.slide}
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    ></div>
  );
};

const SplitedText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "splited-letter",
}) => {
  return (
    <>
      {text.split("").map((letter, index) => {
        return (
          <span
            className={className}
            key={index}
            style={{ display: "inline-block" }}
          >
            {letter && letter.trim() ? (
              letter
            ) : (
              <span style={{ margin: `0 10px` }}></span>
            )}
          </span>
        );
      })}
    </>
  );
};
const CAPTIONS = [
  {
    line1: "Your future",
    line2: "begins",
    highlight: "here!",
    image:bg_small,
    description:
      "Experience 21st century Learning, creating movers and shakers who create the world of tomorrow",
  },

  {
    line1: "Stay ahead",
    line2: "of the",
    highlight: "Curve",
    image:banner2,
    description:
      "Stay ahead of the curve with our tech education that prepares you for the ever-evolving industry landscape.Our program empowers you with knowledge, skills and attitudes for tomorrow",
  },
];
const Slider2: React.FC<any> = ({ caption, id, description }: any) => {
  const router = useRouter();
  return (
    <div className={style.slide2}>
      <div className={style.inner}>
        <h1 className={style.caption} id={getSelector(id, "title")}>
          <div className="sections">
            <SplitedText className={SPILTTED_CLASS_NAME} text={caption.line1} />
          </div>
          <div className="sections">
            <SplitedText className={SPILTTED_CLASS_NAME} text={caption.line2} />
            <span className="pink">
              <SplitedText
                className={SPILTTED_CLASS_NAME}
                text={` ${caption.highlight}`}
              />
            </span>
          </div>
        </h1>
        <div className={style.description}>
          <p id={getSelector(id, "desc")}>
            {description}
          </p>
        </div>
        <div className={`mt-5 ${style.view_link}`} >
          <Link href="/course-listing">
            View all programs <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
const Banner: React.FC = () => {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const slider1 = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const [sliderContent, setContentSlider] = useState(null);
  const [isPopupOpen, setPopupVisibility] = useState<boolean>(false);
  const interval = useRef<any>(null);
  const onAfterChange = (index: number) => {
    let items = getItemsByIndex(index, SPILTTED_CLASS_NAME);
    let desc = document.getElementById(getSelector(index, "desc"));
    gsap.to(items, {
      opacity: 1,
      y: `0%`,
      duration: 0.6,
      onComplete: () => {
        gsap.to(desc, {
          opacity: 1,
        });
      },
    });
  };
  const getItemsByIndex = (index: number, target: string = "") => {
    let items = document.querySelectorAll(
      `#${getSelector(index, "title")} .${target}`.trim()
    );
    return items;
  };
  const beforeChange = (oldIndex: number, newIndex: number) => {
    let items = getItemsByIndex(newIndex, SPILTTED_CLASS_NAME);
    let desc = document.getElementById(getSelector(newIndex, "desc"));
    gsap.set(items, {
      opacity: 0,
      y: `150%`,
    });
    gsap.set(desc, {
      opacity: 0,
    });
  };

  useEffect(() => {
    setContentSlider(slider2.current);
  }, []);
  useEffect(() => {
    interval.current = setTimeout(() => {
      setPopupVisibility(true);
    }, 2000);
    return () => {
      interval.current && clearTimeout(interval.current);
    };
  }, []);
  const onCloseHandle = useCallback(() => {
    setPopupVisibility(false);
  }, []);
  return (
    <section>
      {/* <BannerPopup isOpen={isPopupOpen} onClose={onCloseHandle} /> */}
      <div className="container-fluid" ref={wrapper}>
        <div className="row">
          <div className="col-12 p-0">
            <div className={style.banner}>
              <Slider
                {...SETTINGS}
                ref={slider1}
                asNavFor={sliderContent as any}
              >
                {CAPTIONS.map((item, index) => {
                  return (
                    <Slide
                      key={index}
                      id={index}
                      image={item.image}
                    />
                  );
                })}
              </Slider>
              <div className={style.contents}>
                <Slider
                  {...SETTINGS_2}
                  ref={slider2}
                  afterChange={onAfterChange}
                  beforeChange={beforeChange}
                >
                  {CAPTIONS.map((item: any, index) => {
                    return <Slider2 key={item} caption={item} id={index} description={item.description} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
