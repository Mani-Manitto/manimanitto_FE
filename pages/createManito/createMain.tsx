import React, {useState, useEffect} from "react";

export default function CreateHome() {
    const [greeting, setGreeting] = useState('반가워요, \n마니또지기님!');

  return (
    <>
        <div className="container">
            <p className="logo">마니마니또</p>
            <h1 className="greeting">{greeting}</h1>

            <div className="character-container">
                <iframe src="https://lottie.host/embed/be36fba1-43f0-4d12-a882-cf40fa5d84bd/npTev2uCYy.json"></iframe>
            </div>
            <button>마니또 방 만들기</button>
        </div>
        <style jsx>
            {`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
                .character-container {
                    position: relative;
                    display: inline-block;
                }

                iframe{
                    border: none;

                }
                
                button{
                    width: 300px;
                    height: 70px;
                    background-color: #00C5B3;
                    color: white;
                    border-radius: 60px;
                    border: none;
                    font-size: 23px;
                }
            `}
        </style>
    </>
  );
}
