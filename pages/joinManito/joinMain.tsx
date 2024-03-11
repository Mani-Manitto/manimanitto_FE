import React from "react";
import Image from "next/image";
// import Link from "next/link";

export default function JoinHome() {

    return (
        <>
            <div className="container">
                <Image src="/logo.png" width={156} height={40} alt="logo" priority />
                <div className="character-container">
                    <iframe src="https://lottie.host/embed/18e7eee8-dc7b-4ea0-b0f3-a9c91c59a365/KWCWIxtkjH.json"></iframe>
                </div>
                <div className="greeting">
                    <h2>마니또 초대장이<br/>도착했어요!</h2>
                </div>
                <div className="manitoName">
                    <p>From. 은상림 크리스마스 파티</p>
                </div>
                <button className="button1">마니또 확인하기</button>
            </div>
            <style jsx>
                {`
                    .background {
                        position: relative;
                        z-index: 1;
                    }
                    .container {
                        background-image: url('/backgroundImg.png');
                        background-size: cover;
                        backtground-repeat: no-repeat;
                        background-position: center;
                        position: absolute;
                        top: 0;
                        z-index: 2;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        padding-top: 50px;
                        padding-bottom: 50px;
                        align-items: center;
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

                    .mainImage {
                        margin-top: 30px;
                    }

                    .greeting {
                        text-align: center;
                    }
                    .greeting h2 {
                        font-size: 32px;
                    }

                    .manitoName {
                        border-radius: 20px;
                        background-color: #D9D9D9;
                        padding: 15px 20px;
                    }
                    .manitoName p {
                        color: #5E5E5E;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    )
}