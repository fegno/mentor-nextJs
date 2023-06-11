import Layout from "@/compnents/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-01.png" />
        <title>Mentor Academy of Excellence</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
