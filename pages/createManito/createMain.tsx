import React, {useState, useEffect} from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function CreateHome() {
    const [greeting1, setGreeting1] = useState(['반가워요,', <br key="br" />, '마니또지기님!']);
    const [greeting2, setGreeting2] = useState(['마니또 게임을', <br key="br"/>, '도와드릴게요']);
    const [displayGreeting, setDisplayGreeting] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setDisplayGreeting(prev => !prev);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const display = displayGreeting ? greeting1 : greeting2;
    const key = displayGreeting ? "greeting1" : "greeting2";


  return (
    <>
        <div className="container">
            <p className="logo">마니마니또</p>
            <TransitionGroup>
                <CSSTransition key={key} timeout={500} classNames="fade" mountOnEnter unmountOnExit>
                    <h1 className="greeting">{display}</h1>
                </CSSTransition>
            </TransitionGroup>

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
                .greeting {
                    text-align: center;
                }
                .fade-enter {
                    opacity: 0;
                }
                .fade-enter-active {
                    opacity: 1;
                    transition: opacity 1000ms;
                }
                .fade-exit {
                    opacity: 1;
                }
                .fade-exit-active {
                    opacity: 0;
                    transition: opacity 1000ms;
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
