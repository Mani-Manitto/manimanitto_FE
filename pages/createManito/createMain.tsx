import React, {useState, useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';
import Lottie from 'react-lottie';
import * as animationData from '../../public/image1.json';

const sentences = ['반가워요, \n마니또지기님!', '마니또 게임을 \n도와드릴게요'];

export default function CreateHome() {
    const [index, setIndex] = useState<number>(0);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === sentences.length - 1 ? 0 : prev + 1));
        }, 4900);

        return () => clearInterval(interval);
    },[]);


  return (
    <>
        <div className="container">
            <Image src="/logo.png" width={156} height={40} alt="logo" priority />
            <div className="greeting">
                {sentences[index].split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="character-container">
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <Link href="/createManito/createRoomInfo" className="button1">마니또 방 만들기</Link>
        </div>
        <style jsx>
            {`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    padding: 60px 0;
                }
                .greeting {
                    text-align: center;
                    animation: fadeInOut 5s linear infinite;
                }

                @keyframes fadeInOut {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
                
                .greeting p{
                    font-size: 32px;
                    font-weight: 600;
                    line-height: 50px;
                }

                .character-container {
                    position: relative;
                    width: 400px;
                    height: 400px;
                    overflow: hidden;
                }

                iframe{
                    border: none;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
            
            `}
        </style>
    </>
  );
}
