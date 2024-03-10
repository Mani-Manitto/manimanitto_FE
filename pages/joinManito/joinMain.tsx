import React from "react";
import Image from "next/image";
// import Link from "next/link";

export default function JoinHome() {

    return (
        <>
            <div className="container">
                <Image className="mainImage" src="/bell.png" width={130} height={200} alt="종 이미지" />
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
                        padding-top: 100px;
                        align-items: center;
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