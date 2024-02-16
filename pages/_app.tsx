import React, { useEffect } from 'react';
import "@/styles/globals.css";
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
    <div className="container">
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: blue;
          display: flex;
          justify-content: center;
        }
        
        .container {
          min-width: 350px;
          max-width: 500px;
          width: 100vw;
          height: calc(var(--vh, 1vh) * 100);
          background-color: white;
        }
      `}</style>
    </div>
    
  );
}
