import React, {useState, useEffect} from "react";
import Link from 'next/link';

export default function JoinComplete() {

  return (
    <>
        <div className="container">
            <div className="greeting">
                <span>당신의 마니또는<br/><span className="userName">독도</span>입니다!</span>
            </div>
            <div className="infoMessage">
                <p>너만 알고 있어야해 멍!</p>
            </div>
            <div className="character-container">
                <iframe src="https://lottie.host/embed/6f4ef4c3-5dec-4c7c-9e2b-603c42561666/MEKz0qliha.json"></iframe>
            </div>
            <div className="btns">
                <button className="button1">이미지 저장하기</button>
                <button className="button2">처음으로</button>
            </div>
        </div>
        <style jsx>
            {`
                .container {
                    padding: 30% 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .greeting {
                    text-align: center;
                    margin-bottom: 50px;
                }
                
                .greeting span{
                    font-size: 32px;
                    font-weight: bold;
                }

                .userName {
                    background-image: linear-gradient(to right, #00C5B3, #7F8CFF);
                    -webkit-background-clip: text; /* Safari 및 기타 브라우저 지원 */
                    background-clip: text;
                    color: transparent; /* 텍스트를 투명하게 만들어 배경 그라데이션이 표시되도록 합니다. */
                }

                .infoMessage {
                    position: relative;
                    width: 80%;
                    height: 85px;
                    padding: 10px;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: rgba(0, 197, 179, 0.25) 0px 13px 27px -5px, rgba(0, 197, 179, 0.3) 0px 8px 16px -8px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .infoMessage::before {
                    content: "";
                    position: absolute;
                    top: 100%; /* 말풍선 아래에 배치 */
                    left: 50%;
                    margin-left: -10px; /* 삼각형 가로 위치 조정 */
                    border-width: 20px;
                    border-style: solid;
                    border-color: #ffffff transparent transparent transparent; 
                }
                .infoMessage p {
                    font-size: 19px;
                    color: #7B7B7B;
                }

                .btns {
                    text-align: center;
                    margin-top: 30px;
                }
                .btns button {
                    display: inline-block;
                    margin: 10px;
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
