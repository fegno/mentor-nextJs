import React, { useEffect, useRef, useState } from "react";
import style from "./ExpandListComponent.module.scss";


type expandListProps = {
  data: any;
  showMenu?: boolean;
};

const ExpandListComponent: React.FC<expandListProps> = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);

  const listRef = useRef(null);


  const handleListShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={style.expand_list_component} ref={listRef}>
      <div className={style.title} onClick={handleListShow}>
        {data.title}
      </div>
      {showMenu && (
        <ul className={style.lists}>
          {data.children.map((list: string, index: number) => {
            return (
              <li className={style.list} key={`list${index}`}>
                {list}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ExpandListComponent;
