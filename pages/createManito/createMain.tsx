import React, {useState, useEffect} from "react";

const sentences = ['반가워요, \n마니또지기님!', '마니또 게임을 \n도와드릴게요'];

export default function CreateHome() {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === sentences.length - 1 ? 0 : prev + 1));
        }, 4900);

        return () => clearInterval(interval);
    },[]);


  return (
    <>
        <div className="container">
            <p className="logo">마니마니또</p>
            <div className="greeting">
                {sentences[index].split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="character-container">
                <iframe src="https://lottie.host/embed/be36fba1-43f0-4d12-a882-cf40fa5d84bd/npTev2uCYy.json"></iframe>
            </div>
            <button className="button1">마니또 방 만들기</button>
        </div>
        <style jsx>
            {`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
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
                }

                .character-container {
                    position: relative;
                    width: 300px;
                    height: 300px;
                    overflow: hidden;
                }

                .character-container::before {
                    content: '';
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    left: -50%;
                    background-color: #bceceb;
                    border-radius: 50%;
                    z-index: -1;
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
