import Layout from "@/compnents/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
