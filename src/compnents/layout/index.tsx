import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import style from "./Layout.module.scss";
import { useRouter } from "next/router";

type layoutProps = {
  children: ReactNode;
};
const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={style.layout}>
      <Header />
      <div className={`${style.content} ${router.route !== ("/about" || "/") ? style.paddingtop : ""}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
