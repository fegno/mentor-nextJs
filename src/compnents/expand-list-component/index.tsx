import React, { useEffect, useRef, useState } from "react";
import style from "./ExpandListComponent.module.scss";
import { gsap } from "gsap";

type expandListProps = {
  data: any;
  title: string;
  expanded?: boolean;
  index: number;
};

const ExpandListComponent: React.FC<expandListProps> = ({
  data,
  expanded,
  title,
  index,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const windowHeight = window.innerHeight;
  //     const scrollTop = window.scrollY;
  //     const component = document.getElementById(`component${index}`);

  //     if (component) {
  //       const { top, bottom } = component.getBoundingClientRect();
  //       const isInViewport =
  //         top < windowHeight / 2 && bottom > windowHeight / 2;
  //       setShowMenu(isInViewport);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const handleListShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.expand_list_component} id={`component${index}`}>
      <div className={`title ${style.title}`} onClick={handleListShow}>
        {title}
      </div>
      {showMenu && (
        <ul className={style.lists}>
          {data?.map((list: any, index: number) => {
            return (
              <li className={style.list} key={`list${index}`}>
                {list.jobs ? list.jobs : list.courses}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ExpandListComponent;
