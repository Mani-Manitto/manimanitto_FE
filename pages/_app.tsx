import Head from 'next/head';
import React, { useEffect } from 'react';
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setVh);
    setVh();

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
  return (
    <>
      <Head>
        <title>마니마니또</title>
        <link rel="icon" href="/manimanitto.ico" />
      </Head>
      <div className="container">
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #EEFFFB;
            display: flex;
            justify-content: center;
          }
          
          .container {
            min-width: 350px;
            max-width: 700px;
            width: 100vw;
            height: calc(var(--vh, 1vh) * 100);
            background-color: white;
          }
        `}</style>
      </div>
    </>
    
  );
}
