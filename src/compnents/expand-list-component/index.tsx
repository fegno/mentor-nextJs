import React, { useEffect, useRef, useState } from "react";
import style from "./ExpandListComponent.module.scss";
import { gsap } from 'gsap';

type expandListProps = {
  data: any;
  title: string;
  expanded?: boolean;
};

const ExpandListComponent: React.FC<expandListProps> = ({
  data,
  expanded,
  title,
}) => {
  const [showMenu, setShowMenu] = useState(true);

  const listRef: any = useRef(null);

  useEffect(() => {
    let list = listRef.current;
    if (expanded) {
      setShowMenu(true);
    }
    gsap.from(list, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: list,
        start: 'top 10%', // Change this value as needed
        end: 'bottom 80%', // Change this value as needed
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const handleListShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.expand_list_component} ref={listRef}>
      <div className={style.title} onClick={handleListShow}>
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
