import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { wrapper } from "../store/configureStore";

const CogMind = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/sprout.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <title>CogMind</title>
    </Head>
    <Component {...pageProps} />
  </>
);
export default wrapper.withRedux(CogMind);
