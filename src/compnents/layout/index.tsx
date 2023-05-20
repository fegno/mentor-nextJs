import React, { ReactNode, useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
import style from "./Layout.module.scss";
import { useRouter } from "next/router";
import CustomHeader from "../custom-header";
import Loading from "../loading";
import { copyFileSync, fstat } from "fs";

type layoutProps = {
  children: ReactNode;
};
const Layout: React.FC<layoutProps> = ({ children }) => {
  const [loading, setloading] = useState(true); //state to show loading screen

  const [hasPadding, setHasPadding] = useState(false); //state to give padding to the page contents

  const router = useRouter();

  //function to change loading to true
  const onPageLoadStart = () => {
    setloading(true);
  };

  //function to change loading state to false
  const onPageLoadStop = () => {
    setloading(false);
  };

  useEffect(() => {
    if (router.route == "/about") {
      setHasPadding(false);
    } else if (router.route == "/gallery") {
      setHasPadding(false)
    } else if (router.route == "/") {
      setHasPadding(false);
    } else {
      setHasPadding(true);
    }
    router.events.on("routeChangeStart", onPageLoadStart);
    router.events.on("routeChangeComplete", onPageLoadStop);

    //setting loading untill all images are fully loaded
    const images = Array.from(document.images);
    let imagesNum = images.length;
    let numLoaded = 0;

    const handleImageLoad = () => {
      numLoaded++;
      if (numLoaded === imagesNum) {
        setloading(false);
      }
    };

    images.forEach((image) => {
      if (image.complete) {
        handleImageLoad();
      } else {
        image.addEventListener("load", handleImageLoad);
      }
    });
    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handleImageLoad);
      });
    };
  }, [router.route]);

  return (
    <div className={style.layout}>
      {/* <Header /> */}
      {loading && <Loading />}
      <CustomHeader />
      <div className={`${style.content} ${hasPadding ? style.paddingtop : ""}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
