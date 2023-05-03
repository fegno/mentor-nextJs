import React, { ReactNode ,useState,useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import style from "./Layout.module.scss";
import { useRouter } from "next/router";
import CustomHeader from "../custom-header";

type layoutProps = {
  children: ReactNode;
};
const Layout: React.FC<layoutProps> = ({ children }) => {
  const[hasPadding,setHasPadding] = useState(false)
  const router = useRouter();
useEffect(()=>{
if(router.route=='/about'){
  setHasPadding(false)
}else if(router.route=='/'){
  setHasPadding(false)
}
else{
  setHasPadding(true)
}
},[router.route])
  return (
    <div className={style.layout}>
      {/* <Header /> */}
      <CustomHeader />
      <div className={`${style.content} ${hasPadding ? style.paddingtop : ""}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
