import React from "react";
import Head from "next/head";
import "../styles/globals.css";

const CogMind = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <title>CogMind</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default CogMind;
