import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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
          max-width: 450px;
          width: 100vh;
          height: 100vh;
          background-color: white;
        }
      `}</style>
    </div>
    
  );
}
