import React, {useState, useEffect} from "react";
import Link from 'next/link';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Lottie from 'react-lottie';
import * as animationData from '../../public/image2.json';

export default function CreateComplete() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

  return (
    <>
        <div className="container">
            <div className="character-container">
                {/* <iframe src="https://lottie.host/embed/0014543c-0fb3-4e61-81f8-d1531228a214/pHxjcBdy1z.json"></iframe> */}
                <Lottie options={defaultOptions} height={275} width={275} />
            </div>
            <div className="greeting">
                <p>마니또 초대장이 <br/>만들어졌어요!</p>
            </div>
            <div className="btns">
                <div className="kakaoBtn">
                    <button>
                        <Image src="/image 68.png" width={120} height={120} alt="카카오톡 로고" />
                    </button>
                    카카오톡 공유
                </div>
                <div className="copyBtn">
                    <button>
                        <ContentCopyIcon style={{color: "white", width: 50, height: 50 }} />
                    </button>
                    링크 복사
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .container {
                    padding: 30px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }
                .greeting {
                    text-align: center;
                }
                
                .greeting p{
                    font-size: 32px;
                }

                .btns {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }

                .btns div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }

                .kakaoBtn button {
                    border: none;
                    background-color: #ffffff;
                }

                .copyBtn button {
                    border: none;
                    background-color: #00C5B3;
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
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
