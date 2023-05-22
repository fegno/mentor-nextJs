import React, { useEffect, useRef, useState } from "react";
import style from "./ExpandListComponent.module.scss";
import { gsap } from "gsap";

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
  const [showMenu, setShowMenu] = useState(false);

  const listRef: any = useRef(null);
  const menuRef: any = useRef(null);

  useEffect(() => {
    if(expanded){
      setShowMenu(true)
    }
    // let list = listRef.current;
    // let menu = menuRef.current;
    // if (expanded) {
    //   setShowMenu(true);
    // }
    // gsap.to(list, {
    //   duration: 1,
    //   opacity:0,
    //   display:"block",
    //   scrollTrigger: {
    //     markers: true,
    //     trigger: menu,
    //     start: "top center", // Change this value as needed
    //     end: "bottom 80%", // Change this value as needed
    //     toggleActions: "restart none reverse pause",
    //   },
    // });
  }, []);
 
  // useEffect(() => {
  //   const element = listRef.current;
  //   const title = element.querySelector('.title');
  //   const list = element.querySelector('ul');

  //   gsap.set([title, list], { opacity: 0 });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: element,
  //       start: 'top center+=100',
  //       end: 'bottom center',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });

  //   tl.to(title, { opacity: 1, duration: 0.5 })
  //     .to(list, { opacity: 1, duration: 0.5 ,display:"block"}, '-=0.25');

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  const handleListShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.expand_list_component} ref={listRef}>
      <div className={`title ${style.title}`} onClick={handleListShow}>
        {title}
      </div>
      {showMenu && (
        <ul className={style.lists} ref={menuRef}>
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
