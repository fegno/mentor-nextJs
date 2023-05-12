import React, { useEffect, useRef, useState } from "react";
import style from "./ExpandListComponent.module.scss";


type expandListProps = {
  data: any;
  title:string
  expanded?: boolean
};

const ExpandListComponent: React.FC<expandListProps> = ({ data, expanded ,title}) => {
  console.log(data)
  const [showMenu, setShowMenu] = useState(false);

  const listRef = useRef(null);

  useEffect(() => {
    if (expanded) {
      setShowMenu(true)
    }
  }, [])

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
                {list.jobs?list.jobs:list.courses}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ExpandListComponent;
