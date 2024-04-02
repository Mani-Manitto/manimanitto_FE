import React, {useEffect } from 'react';
import Image from 'next/image';

type KakaoShareButtonProps = {
    description: string;
    roomCode: string;
}

const KakaoBtn = ({description, roomCode}: KakaoShareButtonProps) => {
    const shareUrl = `http://localhost:3000/joinManito/joinMain/${roomCode}`;

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const { Kakao } = window;

            if(!Kakao.isInitialized()){
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        }
    },[]);

    const shareMessage = () => {
        const { Kakao, location } = window;
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content:{
                title:"💌 마니또 초대장 도착 💌",
                description: "즐거운 마니또 세계로 오신걸 환영합니다! 마니또를 확인하고 행복한 시간을 보내요!",
                imageUrl: "https://private-user-images.githubusercontent.com/64177079/318686628-4136d554-01ee-4518-a478-af5e7718e45d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIwNDM5MjIsIm5iZiI6MTcxMjA0MzYyMiwicGF0aCI6Ii82NDE3NzA3OS8zMTg2ODY2MjgtNDEzNmQ1NTQtMDFlZS00NTE4LWE0NzgtYWY1ZTc3MThlNDVkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDAyVDA3NDAyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4NDViNmMyZjc1MGIwMDhlZGI0ZGE3NTYzMWM3MTZhZjM0NjA3YmRiMzA3MDZlZjQzZDg0ODBmMmQ1YWQ5N2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.lUL_ac1RrNp4yNfCN1oXtcAJB2ysFTndYNcSw6e-Ivc",
                link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                },
            },
            buttons: [
                {
                  title: '마니또 확인하러 가기',
                  link: {
                    mobileWebUrl: shareUrl,
                    webUrl: shareUrl,
                  }
                }
              ]
          });
    };

    return (
        <>
            <div className="kakaoBtn" onClick={shareMessage}>
                <button>
                    <Image src="/KakaoImg.png" width={120} height={120} alt="카카오톡 로고" />
                </button>
                카카오톡 공유
            </div>
            <style jsx>{`
                .kakaoBtn {
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
            `}
            </style> 
        </>
    )
}

export default KakaoBtn;